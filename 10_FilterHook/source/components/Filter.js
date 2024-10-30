import React, { Fragment, useEffect, useRef, useState } from "react";

import "./Filter.css";
import Controls from "./Controls";
import List from "./List";

function sortReturnNewArr(wordsList) { 
    return [...wordsList].sort();
}

function filterArrByWord(arrWords, keyWord) { 
    return arrWords.filter( (word) => { return word.includes(keyWord) } );
}
// нет необходимости при рендере каждый раз описывать чистые функции выше

function Filter(props) {
    const [wordsList, setWordsList] = useState([...props.words]);
    const [statusSort, setStatusSort] = useState(false);
    const [searchWord, setSearchWord] = useState("");
    const didMount = useRef(false);

    const setSorting = (eo) => {
        setStatusSort(eo.target.checked);
    };

    useEffect( () => {
        if (!didMount.current) { return didMount.current = true }
        updateList();
        }, [statusSort]
    );

    const updateList = (searchElem = searchWord) => {
        let newListWords = filterArrByWord(props.words, searchElem);
        statusSort && (newListWords = sortReturnNewArr(newListWords));
        setWordsList(newListWords);
    };

    const searchElem = (eo) => {
        updateList(eo.target.value); 
        setSearchWord(eo.target.value);
    };

    const resetFilter = () => {
        setWordsList([...props.words]);
        setStatusSort(false);
        setSearchWord("");
    };
    
    return (
        <Fragment>
            <Controls setSorting={ (eo) => setSorting(eo) }
                      statusSort={statusSort}
                      searchElem={ (eo) => searchElem(eo) } 
                      searchWord={searchWord}
                      resetFilter={ () => resetFilter()}
            />
            <List wordsList={wordsList}/>
        </Fragment>
    );
}

export default Filter;