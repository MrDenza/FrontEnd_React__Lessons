import React, { memo, useRef } from "react";
import { eventFlow } from "./module/eventEmitter";

import "./ClientForm.css";

function ClientForm(props) {

    const fElem = useRef(null);
    const iElem = useRef(null);
    const oElem = useRef(null);
    const balanceElem = useRef(null);

    const saveClient = () => {
        let objInfo = {
            id: props.clientInfo.id,
            f: fElem.current ? fElem.current.value : props.clientInfo.f,
            i: iElem.current ? iElem.current.value : props.clientInfo.i,
            o: oElem.current ? oElem.current.value : props.clientInfo.o,
            balance: balanceElem.current ? +balanceElem.current.value : props.clientInfo.balance,
        }
        eventFlow.emit("savePos", objInfo);
    }

    const cancelEdit = () => eventFlow.emit("cancelEdit");

    console.log(`Render ClientForm. ID - ${props.clientInfo.id}`);
    return (
        <tr className="table__tr-form">
            <td> 
                <label htmlFor="input-f">
                    <input type="text" id="input-f" ref={fElem} defaultValue={props.clientInfo.f}></input>
                </label>
            </td>
            <td>
                <label htmlFor="input-i">
                    <input type="text" id="input-i" ref={iElem} defaultValue={props.clientInfo.i}></input>
                </label>
            </td>
            <td>                    
                <label htmlFor="input-o">
                    <input type="text" id="input-o" ref={oElem} defaultValue={props.clientInfo.o}></input>
                </label>
            </td>
            <td>
                <label htmlFor="input-balance">
                    <input type="text" id="input-balance" ref={balanceElem} defaultValue={props.clientInfo.balance}></input>
                </label>
            </td>
            <td className="table__td_null"></td>
            <td>
                <label htmlFor="btn-edit">
                    <input type="button" id="btn-edit" value="Сохранить" onClick={() => saveClient()}></input>
                </label>
            </td>
            <td>
                <label htmlFor="btn-cancel">
                    <input type="button" id="btn-cancel" value="Отмена" onClick={() => cancelEdit()}></input>
                </label>
            </td>
        </tr>
    );
}

export default memo(ClientForm);