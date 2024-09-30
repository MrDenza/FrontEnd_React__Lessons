import React from "react";

import "./ProductListBox.css";

const titleList = "Список товаров:";

import ProductPos from "./ProductPos";

class ProductListBox extends React.Component {
    render() {
        let productList = this.props.db.map( p =>
            <ProductPos key = {p.code} title = {p.title} photo = {p.photo} price = {p.sum} text = {p.text} lot = {p.lot} />
        );

        return (
            <div className="product-list">
                <h2 className="product-list__title">{titleList}</h2>
                <div className="product-list__box">
                    {productList}
                </div>
            </div>
        );
    }
}

export default ProductListBox;

