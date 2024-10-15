import React from "react";
import ReactDOM from "react-dom";

import "./style.css";

let text = "первый<br>второй<br/>третий<br />последний";

import BR2JSX from "./components/BR2JSX";

ReactDOM.render(
    <div className = "body__container">
        <BR2JSX text = {text}/>
    </div>
    ,document.getElementById('container') 
);
