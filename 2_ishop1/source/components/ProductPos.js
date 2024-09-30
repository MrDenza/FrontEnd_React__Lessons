import React from "react";

import "./ProductPos.css";

// <ProductPos key = {p.code} title = {p.title} photo = {p.photo} price = {p.sum} text = {p.text} lot = {p.lot} />
class ProductPos extends React.Component {
    render() {
        return (
            <div className="product-list__pos">
                <span className="product-list__pos-title">{this.props.title}</span>
                <img className="product-list__pos-photo" src={this.props.photo} alt={`Внешний вид ${this.props.title}`}></img>
                <span className="product-list__pos-price">{`${this.props.price} BYN`}</span>
                <span className="product-list__pos-lot">{`Остаток на складе: ${this.props.lot} шт.`}</span>
                <span className="product-list__pos-subtitle">Характеристики:</span>
                <span className="product-list__pos-text">{this.props.text}</span>
            </div>
        );
    }
}

export default ProductPos;