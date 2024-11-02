import React, { Fragment } from "react";
import { eventFlow } from "./module/eventEmitter";

import ClientPos from "./ClientPos";
import ClientForm from "./ClientForm";
import ControlBtn from "./ControlBtn";

import "./TableClients.css";

const newInfoClient = {
    id: 0,
    f: "",
    i: "",
    o: "",
    balance: "",
};

function randomInt(min = 100, max = 200) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function generateNewId(arrListNum) {
    let newCode = randomInt();
    if (arrListNum.includes(newCode)) { generateNewId(arrListNum) } 
        else { return newCode }
}

class TableClients extends React.PureComponent {

    state = {
        clientsArr: [...this.props.clientsArr],
        editClientId: -1,
        filterMode: 0,
    }

    filterAll = () => this.setState({filterMode: 0});
    filterActive = () => this.setState({filterMode: 1});
    filterBlocked = () => this.setState({filterMode: 2});
    addNewClient = () => this.setState({editClientId: 0});
    editClient = (id) => this.setState({editClientId: id});
    cancelEdit = () => this.setState({editClientId: -1});

    getIdList = () => {
        return this.state.clientsArr.reduce( (idList, elem) => {
            idList.push(+elem.id)
            return idList;
        }, [])
    }

    saveClient = (obj) => {
        let newClientsArr = [...this.state.clientsArr];
        if (obj.id === 0) {
            let idClient = generateNewId(this.getIdList());
            newClientsArr.push({...obj, id: idClient});
        } else {
            let indexPos = newClientsArr.findIndex(pos => pos.id === obj.id);
            newClientsArr[indexPos] = obj;
        }
        this.setState({clientsArr: newClientsArr, editClientId: -1});
    }

    delClient = (id) => {
        let newClientsArr = [...this.state.clientsArr].filter((elem) => elem.id !== id);
        this.setState({clientsArr: newClientsArr});
    }

    componentDidMount = () => { // подписываемся
        eventFlow.on("editPos", this.editClient);
        eventFlow.on("savePos", this.saveClient);
        eventFlow.on("delPos", this.delClient);
        eventFlow.on("cancelEdit", this.cancelEdit);
        eventFlow.on("filterAll", this.filterAll);
        eventFlow.on("filterActive", this.filterActive);
        eventFlow.on("filterBlocked", this.filterBlocked);
    };

    componentWillUnmount = () => { // отписываемся
        eventFlow.off("editPos", this.editClient);
        eventFlow.off("savePos", this.saveClient);
        eventFlow.off("delPos", this.delClient);
        eventFlow.off("cancelEdit", this.cancelEdit);
        eventFlow.off("filterAll", this.filterAll);
        eventFlow.off("filterActive", this.filterActive);
        eventFlow.off("filterBlocked", this.filterBlocked);
    }

    render() {
        console.log('Render TableClients');

        let filteredListClients = this.state.clientsArr.filter( (client) => {
            switch (this.state.filterMode) {
                case 1: return client.balance >= 0;
                case 2: return client.balance < 0;
            default: return true;
            }
        });

        let clientsPos = filteredListClients.map(
            (pos) => {
                if (pos.id === this.state.editClientId) {
                    return <ClientForm clientInfo={pos} key={pos.id}/>
                } else {
                    return <ClientPos clientInfo={pos} key={pos.id}/>
                }     
            }
        );

        return (
            <Fragment>
                <ControlBtn/>
                <table className="table-clients">
                    <thead>
                        <tr>
                            <th>Фамилия</th>
                            <th>Имя</th>
                            <th>Отчество</th>
                            <th>Баланс</th>
                            <th>Статус</th>
                            <th>Редактировать</th>
                            <th>Удалить</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clientsPos}
                    </tbody>
                    <tfoot>
                        {(this.state.editClientId === 0) && <ClientForm clientInfo={newInfoClient} key={newInfoClient.id}/>}
                    </tfoot>
                </table>
                <label htmlFor="btn-add">
                    <input type="button" id="btn-add" value="Добавить клиента" onClick={() => {this.addNewClient()}}></input>
                </label>
            </Fragment>
        );
    }
}

export default TableClients;