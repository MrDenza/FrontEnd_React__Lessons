﻿import React, {Fragment} from "react";

import "./Filter.css";

class Filter extends React.Component {

    state = {
        wordsList: Array.from(this.props.words),
        noSortWordsList: [],
        statusSort: false,
        searchWord: "",
    };

    setSorting = (eo) => {
        this.setState({statusSort: eo.target.checked}, () => {
                console.log("Статус сортировки: " + this.state.statusSort);
                this.state.statusSort ? this.sortingWordsTrue() : this.sortingWordsFalse();
            }
        )
    };
    sortingWordsFalse = () => {
        this.setState({wordsList: this.state.noSortWordsList, noSortWordsList: []},
            console.log("Статус сортировки: отменена!")
        ) 
    };
    sortingWordsTrue = () => {
        this.state.statusSort && this.setState({noSortWordsList: Array.from(this.state.wordsList), wordsList: this.state.wordsList.sort()});
        console.log("Статус сортировки: выполнена!");
    };
    searchElem = (eo) => {
        console.log("Поиск: " + eo.target.value);
        this.setState({searchWord: eo.target.value}, this.filterByElem)
    };
    filterByElem = () => {
        let newUseList = this.state.wordsList.filter( (word) => {
			return word.includes(this.state.searchWord);
		    }
        );
		this.setState({wordsList: newUseList}, this.filterList); //!Функция фильтра
    }
    resetFilter = () => {
        console.log("Сброс фильтра!");
        this.setState({
            wordsList: Array.from(this.props.words),
            noSortWordsList: [],
            statusSort: false,
            searchWord: ""
        })
    };
    render() {
        let newWordsList = this.state.wordsList.map( (word, index) => {
                return (
                    <li key={index}>{word}</li>
                );
            }
        );

        return (
            <Fragment>
                <div className="filter_control">
                    <label htmlFor="filter-check">
                        <input type="checkbox" className="filter_control-check" id="filter-check" onChange={this.setSorting} checked={this.state.statusSort}></input>
                    </label>

                    <label htmlFor="filter-text">
                        <input type="text" className="filter_control-text" id="filter-text" defaultValue={this.state.searchWord}onChange={this.searchElem}></input>
                    </label>

                    <label htmlFor="filter-btn">
                        <input type="button" className="filter_control-btn" id="filter-btn" value="Сброс" onClick={this.resetFilter}></input>
                    </label>
                </div>
                <ul className="filter_list-box">
                    {newWordsList}
                </ul>
            </Fragment>
        );
    }
}

export default Filter;