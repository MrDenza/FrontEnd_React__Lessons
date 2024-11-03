import React, { Fragment, memo, useState, useEffect } from "react";
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

function TableClients(props) {
    
    const [clientsArr, setClientsArr] = useState([...props.clientsArray]);
    const [editClientId, setEditClientId] = useState(-1);
    const [filterMode, setFilterMode] = useState(0);

    useEffect( () => {
        eventFlow.on("editPos", editClient);
        eventFlow.on("savePos", saveClient);
        eventFlow.on("delPos", delClient);
        eventFlow.on("cancelEdit", cancelEdit);
        eventFlow.on("filterAll", filterAll);
        eventFlow.on("filterActive", filterActive);
        eventFlow.on("filterBlocked", filterBlocked);
        return () => {
            eventFlow.removeListener("editPos", editClient);
            eventFlow.removeListener("savePos", saveClient);
            eventFlow.removeListener("delPos", delClient);
            eventFlow.removeListener("cancelEdit", cancelEdit);
            eventFlow.removeListener("filterAll", filterAll);
            eventFlow.removeListener("filterActive", filterActive);
            eventFlow.removeListener("filterBlocked", filterBlocked);
        }
    }, [clientsArr, filterMode]);

    const editClient = (id) => setEditClientId(id);
    const cancelEdit = () => setEditClientId(-1);
    const filterAll = () => setFilterMode(0);
    const filterActive = () => setFilterMode(1);
    const filterBlocked = () => setFilterMode(2);
    const addNewClient = () => setEditClientId(0);

    const getIdList = () => {
        return clientsArr.reduce( (idList, elem) => {
            idList.push(+elem.id)
            return idList;
        }, [])
    };

    const saveClient = (obj) => {
        let newClientsArr = [...clientsArr];
        if (obj.id === 0) {
            let idClient = generateNewId( getIdList() );
            newClientsArr.push({...obj, id: idClient});
        } else {
            let indexPos = newClientsArr.findIndex(pos => pos.id === obj.id);
            newClientsArr[indexPos] = obj;
        }
        setClientsArr(newClientsArr);
        setEditClientId(-1);
    };

    const delClient = (id) => {
        let newClientsArr = [...clientsArr].filter((elem) => elem.id !== id);
        setClientsArr(newClientsArr);
    };
    
    let filteredListClients = clientsArr.filter( (client) => {
        switch (filterMode) {
            case 1: return client.balance >= 0;
            case 2: return client.balance < 0;
        default: return true;
        }
    });

    let clientsPos = filteredListClients.map(
        (pos) => {
            if (pos.id === editClientId) {
                return <ClientForm clientInfo={pos} key={pos.id}/>
            } else {
                return <ClientPos clientInfo={pos} key={pos.id}/>
            }     
        }
    );

    console.log('Render TableClients');
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
                    {(editClientId === 0) && <ClientForm clientInfo={newInfoClient} key={newInfoClient.id}/>}
                </tfoot>
            </table>
            <label htmlFor="btn-add">
                <input type="button" id="btn-add" value="Добавить клиента" onClick={() => {addNewClient()}}></input>
            </label>
        </Fragment>
    );
}

export default memo(TableClients);