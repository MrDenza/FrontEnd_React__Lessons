import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import "./style.css";

let titleShop = "Интернет-магазин \"НотеБук\"";
let addressShop = "Беларусь, г. Минск, просп. Победителей, д. 9";
import productDB from "../public/productDatabase.json";

import TitleShop from "./components/TitleShop";
import ProductListBox from "./components/ProductListBox";

ReactDOM.render(
    <Fragment>
        <header className = "body__container">
            <TitleShop title = {titleShop} address = {addressShop}/>
        </header>
        <main className = "body__container">
            <article>
                <ProductListBox db = {productDB}/>
            </article>
        </main>
    </Fragment>,
    document.getElementById('container') 
);
