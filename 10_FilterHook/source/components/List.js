import React from "react";

import "./List.css";

const List = (props) => {

    let wordsListElem = props.wordsList.map( (word, index) => {
        return <li key={index} className="filter__list-pos">{word}</li>
    });

    return (
        <ul className="filter__list-box">
            {wordsListElem}
        </ul>
    );
};

export default List;