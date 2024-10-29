import React from "react";

import "./Controls.css";

const Controls = (props) => {

    return (
        <div className="filter__control">
            <label htmlFor="filter-check">
                <input type="checkbox" className="filter__control-check" id="filter-check" onChange={props.setSorting} checked={props.statusSort}></input>
            </label>

            <label htmlFor="filter-text">
                <input type="text" className="filter__control-text" id="filter-text" value={props.searchWord} onChange={props.searchElem}></input>
            </label>

            <label htmlFor="filter-btn">
                <input type="button" className="filter__control-btn" id="filter-btn" value="Сброс" onClick={props.resetFilter}></input>
            </label>
        </div>
    );
};

export default Controls;






{/* <div className="filter__control">
                    <label htmlFor="filter-check">
                        <input type="checkbox" className="filter__control-check" id="filter-check" onChange={this.setSorting} checked={this.state.statusSort}></input>
                    </label>

                    <label htmlFor="filter-text">
                        <input type="text" className="filter__control-text" id="filter-text" value={this.state.searchWord} onChange={this.searchElem}></input>
                    </label>

                    <label htmlFor="filter-btn">
                        <input type="button" className="filter__control-btn" id="filter-btn" value="Сброс" onClick={this.resetFilter}></input>
                    </label>
                </div> */}