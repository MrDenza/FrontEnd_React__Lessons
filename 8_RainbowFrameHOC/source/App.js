import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import "./style.css";

import Frame from "./components/Frame";

ReactDOM.render(
    <Fragment>
        <div className = "body__container">
            <Frame/>
        </div>
    </Fragment>,
    document.getElementById('container') 
);
