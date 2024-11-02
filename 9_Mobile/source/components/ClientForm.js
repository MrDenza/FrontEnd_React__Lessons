import React from "react";

import "./ClientForm.css"
import { eventFlow } from "./module/eventEmitter";

class ClientForm extends React.PureComponent {

    constructor(props) {
        super(props);
        this.fElem = React.createRef();
        this.iElem = React.createRef();
        this.oElem = React.createRef();
        this.balanceElem = React.createRef();
    }

    saveClient = () => {
        let objInfo = {
            id: this.props.clientInfo.id,
            f: this.fElem.current ? this.fElem.current.value : this.props.clientInfo.f,
            i: this.iElem.current ? this.iElem.current.value : this.props.clientInfo.i,
            o: this.oElem.current ? this.oElem.current.value : this.props.clientInfo.o,
            balance: this.balanceElem.current ? +this.balanceElem.current.value : this.props.clientInfo.balance,
        }
        eventFlow.emit("savePos", objInfo);
    }

    cancelEdit = () => eventFlow.emit("cancelEdit");

    render() {  
        console.log(`Render ClientForm. ID - ${this.props.clientInfo.id}`);

        return (
            <tr className="table__tr-form">
                <td> 
                    <label htmlFor="input-f">
                        <input type="text" id="input-f" ref={this.fElem} defaultValue={this.props.clientInfo.f}></input>
                    </label>
                </td>
                <td>
                    <label htmlFor="input-i">
                        <input type="text" id="input-i" ref={this.iElem} defaultValue={this.props.clientInfo.i}></input>
                    </label>
                </td>
                <td>                    
                    <label htmlFor="input-o">
                        <input type="text" id="input-o" ref={this.oElem} defaultValue={this.props.clientInfo.o}></input>
                    </label>
                </td>
                <td>
                    <label htmlFor="input-balance">
                        <input type="text" id="input-balance" ref={this.balanceElem} defaultValue={this.props.clientInfo.balance}></input>
                    </label>
                </td>
                <td className="table__td_null"></td>
                <td>
                    <label htmlFor="btn-edit">
                        <input type="button" id="btn-edit" value="Сохранить" onClick={() => this.saveClient()}></input>
                    </label>
                </td>
                <td>
                    <label htmlFor="btn-cancel">
                        <input type="button" id="btn-cancel" value="Отмена" onClick={() => this.cancelEdit()}></input>
                    </label>
                </td>
            </tr>
        );
    }
}

export default ClientForm;