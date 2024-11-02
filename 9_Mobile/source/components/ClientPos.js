import React from "react";
import { eventFlow } from "./module/eventEmitter";

import "./ClientPos.css"

class ClientPos extends React.PureComponent {

    editPos = () => eventFlow.emit("editPos", this.props.clientInfo.id);
    delPos = () => confirm("Подтверждаете удаление клиента?") && eventFlow.emit("delPos", this.props.clientInfo.id);

    render() {
        console.log(`Render ClientForm. ID - ${this.props.clientInfo.id}`);

        return (
            <tr>
                <td>{this.props.clientInfo.f}</td>
                <td>{this.props.clientInfo.i}</td>
                <td>{this.props.clientInfo.o}</td>
                <td>{this.props.clientInfo.balance}</td>
                <td className={`${(this.props.clientInfo.balance >= 0) ? "table__td_active" : "table__td_blocked"} table__td_bolder`}>
                    {(this.props.clientInfo.balance >= 0) ? "active" : "blocked"}
                </td>
                <td>
                    <label htmlFor="btn-edit">
                        <input type="button" id="btn-edit" value="Редактировать" onClick={() => this.editPos()}></input>
                    </label>
                </td>
                <td>
                    <label htmlFor="btn-del">
                        <input type="button" id="btn-del" value="Удалить" onClick={() => this.delPos()}></input>
                    </label>
                </td>
            </tr>
        );
    }
}

export default ClientPos;