import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import "./style.css";

let colors = [
    'red',
    'orange',
    'yellow',
    'green',
    '#00BFFF',
    'blue',
    'purple',
    // '#8b8b8b', 
    // '#7f1594',
    // '#09ff00', 
    // 'orange', 
    // '#003cff', 
    // '#ff0000',
    // 'darksalmon',
    // 'yellow',
];

import RainbowFrame from "./components/RainbowFrame";

ReactDOM.render(
    <Fragment>
        <div className = "body__container">
            <RainbowFrame colors = {colors}>Hello, world!</RainbowFrame>
        </div>
    </Fragment>,
    document.getElementById('container') 
);
