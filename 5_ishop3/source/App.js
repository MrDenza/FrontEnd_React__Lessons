import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import {EventEmitter} from 'events';

import "./style.css";
import productDB from "../public/productDatabase.json";

window.myEvents = new EventEmitter();
let titleShop = "Интернет-магазин \"НотеБук\"";
let addressShop = "Беларусь, г. Минск, просп. Победителей, д. 9";

import Shop from "./components/Shop";

ReactDOM.render(
    <Fragment>
        <div className = "body__container">
            <Shop title = {titleShop} address = {addressShop} db = {productDB}/>
        </div>
    </Fragment>,
    document.getElementById('container') 
);
