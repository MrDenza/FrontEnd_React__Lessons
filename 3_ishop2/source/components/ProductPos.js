import React from "react";

import "./ProductPos.css"

class ProductPos extends React.Component {

    enterPos = (eo) => {
        this.props.cbEnterPos(this.props.code);
    }
    
    enterDeletePos = (eo) => {
        eo.stopPropagation();
        this.props.cbDeletePos(this.props.code);
    }
    
    render() {
        return (
           <li className={`product-list__pos ${(this.props.selectPos === this.props.code) && "product-list__pos_select"}`} onClick={this.enterPos}>
                <span className="product-list__pos-title">{this.props.title}</span>
                <div className="product-list__pos-box-photo">
                    <img className="product-list__pos-photo" src={this.props.photo} alt={`Внешний вид ${this.props.title}`}></img>
                </div>
                <span className="product-list__pos-price">{`${this.props.sum} BYN`}</span>
                <span className="product-list__pos-lot">{`Остаток на складе: ${this.props.lot} шт.`}</span>
                <span className="product-list__pos-subtitle">Характеристики:</span>
                <span className="product-list__pos-text">{this.props.text}</span>
                <label htmlFor="btn-del" className="product-list__pos-box-btn">
                    <input type="button" id="btn-del" className="product-list__pos-btn-del" value="Удалить" onClick={this.enterDeletePos}></input>
                </label>
            </li>
        );
    }
}

export default ProductPos;