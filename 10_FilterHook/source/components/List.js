import React from "react";

import "./List.css";

const List = (props) => {
    console.log('list render');
    return (
        <ul className="filter__list-box">
            {props.newWordsList}
        </ul>
    );
};

export default List;


                // <ul className="filter__list-box">
                //     {newWordsList}
                // </ul>