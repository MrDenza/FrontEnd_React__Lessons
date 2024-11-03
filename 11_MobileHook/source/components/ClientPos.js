import React, { memo } from "react";
import { eventFlow } from "./module/eventEmitter";

import "./ClientPos.css";

function ClientPos(props) {

    const editPos = () => eventFlow.emit("editPos", props.clientInfo.id);
    const delPos = () => confirm("Подтверждаете удаление клиента?") && eventFlow.emit("delPos", props.clientInfo.id);

    console.log(`Render ClientPos. ID - ${props.clientInfo.id}`);
    return (
        <tr>
            <td>{props.clientInfo.f}</td>
            <td>{props.clientInfo.i}</td>
            <td>{props.clientInfo.o}</td>
            <td>{props.clientInfo.balance}</td>
            <td className={`${(props.clientInfo.balance >= 0) ? "table__td_active" : "table__td_blocked"} table__td_bolder`}>
                {(props.clientInfo.balance >= 0) ? "active" : "blocked"}
            </td>
            <td>
                <label htmlFor="btn-edit">
                    <input type="button" id="btn-edit" value="Редактировать" onClick={() => editPos()}></input>
                </label>
            </td>
            <td>
                <label htmlFor="btn-del">
                    <input type="button" id="btn-del" value="Удалить" onClick={() => delPos()}></input>
                </label>
            </td>
        </tr>
    );
}

export default memo(ClientPos);