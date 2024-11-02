import React from "react";
import { eventFlow } from "./module/eventEmitter";

import "./ControlBtn.css"

class ControlBtn extends React.PureComponent {

    render() {
        console.log("Render ControlBtn");
        
        return (
            <div>
                <label htmlFor="filter-all">
                    <input type="button" id="filter-all" className="control__btn" value="Все" onClick={() => eventFlow.emit("filterAll")}></input>                       
                </label>
                <label htmlFor="filter-active">
                    <input type="button" id="filter-active" className="control__btn" value="Активные" onClick={() => eventFlow.emit("filterActive")}></input>
                </label>
                <label htmlFor="filter-blocked">
                    <input type="button" id="filter-blocked" className="control__btn" value="Заблокированные" onClick={() => eventFlow.emit("filterBlocked")}></input>
                </label>
            </div>
        );
    }
}

export default ControlBtn;