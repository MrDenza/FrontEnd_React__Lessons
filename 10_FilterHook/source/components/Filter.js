import React, { Fragment, useEffect, useState } from "react";

import "./Filter.css";
import Controls from "./Controls";
import List from "./List";

function Filter(props) {
    const [wordsList, setWordsList] = useState(Array.from(props.words));
    const [noSortWordsList, setNoSortWordsList] = useState([]);
    const [statusSort, setStatusSort] = useState(false);
    const [searchWord, setSearchWord] = useState("");

    const setSorting = (eo) => {
        setStatusSort(eo.target.checked);
    }

    useEffect( () => {
            console.log('test');
            statusSort ? sortingWordsTrue() : sortingWordsFalse();
        },
        [statusSort]
    );

    const sortingWordsTrue = () => {
        if (statusSort) {
            setNoSortWordsList(Array.from(wordsList));
            setWordsList(Array.from(wordsList).sort());
        }
    };

    const sortingWordsFalse = () => {

    };



    
    return (
        <Fragment>
            <Controls 
            setSorting={ (eo) => setSorting(eo) }
            statusSort={statusSort} 

            
            ></Controls>
            <List
            newWordsList={wordsList}
            ></List>
        </Fragment>
    );
}

export default Filter;

