import React, { memo, useRef } from 'react';
import { eventFlow } from './js-modules/eventEmitter';

import './ClientForm.css';

function ClientForm(props) {
    const famElem = useRef(null);
    const imElem = useRef(null);
    const otchElem = useRef(null);
    const balanceElem = useRef(null);

    const saveClient = () => {
        let objInfo = {
            id: props.clientInfo.id,
            fam: famElem.current ? famElem.current.value : props.clientInfo.fam,
            im: imElem.current ? imElem.current.value : props.clientInfo.im,
            otch: otchElem.current ? otchElem.current.value : props.clientInfo.otch,
            balance: balanceElem.current
                ? +balanceElem.current.value
                : props.clientInfo.balance,
        };
        eventFlow.emit('savePos', objInfo);
    };

    const cancelEdit = () => eventFlow.emit('cancelEdit');

    console.log(`Render ClientForm. ID - ${props.clientInfo.id}`);
    return (
        <tr className="table__tr-form">
            <td>
                <label htmlFor="input-fam">
                    <input
                        type="text"
                        id="input-fam"
                        ref={famElem}
                        defaultValue={props.clientInfo.fam}
                    ></input>
                </label>
            </td>
            <td>
                <label htmlFor="input-im">
                    <input
                        type="text"
                        id="input-im"
                        ref={imElem}
                        defaultValue={props.clientInfo.im}
                    ></input>
                </label>
            </td>
            <td>
                <label htmlFor="input-otch">
                    <input
                        type="text"
                        id="input-otch"
                        ref={otchElem}
                        defaultValue={props.clientInfo.otch}
                    ></input>
                </label>
            </td>
            <td>
                <label htmlFor="input-balance">
                    <input
                        type="text"
                        id="input-balance"
                        ref={balanceElem}
                        defaultValue={props.clientInfo.balance}
                    ></input>
                </label>
            </td>
            <td className="table__td_zero"></td>
            <td>
                <label htmlFor="btn-edit">
                    <input
                        type="button"
                        id="btn-edit"
                        value="Сохранить"
                        onClick={() => saveClient()}
                    ></input>
                </label>
            </td>
            <td>
                <label htmlFor="btn-cancel">
                    <input
                        type="button"
                        id="btn-cancel"
                        value="Отмена"
                        onClick={() => cancelEdit()}
                    ></input>
                </label>
            </td>
        </tr>
    );
}

export default memo(ClientForm);
