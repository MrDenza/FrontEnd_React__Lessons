import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import TableClients from "./components/TableClients";

import "./style.css";

let clientsArr = [
    {id: 100, f: "Иванов", i: "Иван", o: "Иванович", balance: 200},
    {id: 101, f: "Петров", i: "Пётр", o: "Петрович", balance: 180},
    {id: 102, f: "Сидоров", i: "Сидор", o: "Сидорович", balance: 250},
    {id: 103, f: "Григорьев", i: "Григорий", o: "Григорьевич", balance: -220},
];

ReactDOM.render(
    <Fragment>
        <div className = "body__container">
            <TableClients clientsArray={clientsArr}/>
        </div>
    </Fragment>,
    document.getElementById('container') 
);
