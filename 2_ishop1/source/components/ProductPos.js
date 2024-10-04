import React from "react";

import "./ProductPos.css"

class ProductPos extends React.Component {
    render() {
        return (
           <li className="product-list__pos" key = {this.props.code}>
                <span className="product-list__pos-title">{this.props.title}</span>
                <img className="product-list__pos-photo" src={this.props.photo} alt={`Внешний вид ${this.props.title}`}></img>
                <span className="product-list__pos-price">{`${this.props.sum} BYN`}</span>
                <span className="product-list__pos-lot">{`Остаток на складе: ${this.props.lot} шт.`}</span>
                <span className="product-list__pos-subtitle">Характеристики:</span>
                <span className="product-list__pos-text">{this.props.text}</span>
            </li>
        );
    }
}

export default ProductPos;