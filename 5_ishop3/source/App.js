import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import "./style.css";

let titleShop = "Интернет-магазин \"НотеБук\"";
let addressShop = "Беларусь, г. Минск, просп. Победителей, д. 9";
import productDB from "../public/productDatabase.json";

import Shop from "./components/Shop";

ReactDOM.render(
    <Fragment>
        <div className = "body__container">
            <Shop title = {titleShop} address = {addressShop} db = {productDB}/>
        </div>
    </Fragment>,
    document.getElementById('container') 
);
