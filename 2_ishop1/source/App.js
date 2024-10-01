import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import "./style.css";

let titleShop = "Интернет-магазин \"НотеБук\"";
let addressShop = "Беларусь, г. Минск, просп. Победителей, д. 9";
import productDB from "../public/productDatabase.json";

import TitleShop from "./components/TitleShop";

ReactDOM.render(
    <Fragment>
        <div className = "body__container">
            <TitleShop title = {titleShop} address = {addressShop} db = {productDB}/>
        </div>
    </Fragment>,
    document.getElementById('container') 
);
