import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import "./style.css";

let words = ['california', 'everything', 'aboveboard', 'washington', 'basketball', 'weathering', 'characters', 'literature', 'contraband', 'appreciate'];

import Filter from "./components/Filter";

ReactDOM.render(
    <Fragment>
        <div className = "body__container">
            <Filter words = {words}/>
        </div>
    </Fragment>,
    document.getElementById('container') 
);
