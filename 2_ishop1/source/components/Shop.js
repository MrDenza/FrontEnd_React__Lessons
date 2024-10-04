import React, {Fragment} from "react";

import "./Shop.css";
import ProductPos from "./ProductPos";

class Shop extends React.Component {
    render() {
        const titleList = "Список товаров:";
        let productList = this.props.db.map( p =>
            <ProductPos key = {p.code} title = {p.title} photo = {p.photo} sum = {p.sum} text = {p.text} lot = {p.lot}/>
        );

        return (
            <Fragment>
                <header className="title-box">
                    <h1 className="title-box__text">
                        {this.props.title}
                    </h1>
                    <address className="title-box__address">
                        {"Адрес: " + this.props.address}
                    </address>
                </header>
                <main>
                    <article className="product-list">
                        <h2 className="product-list__title">{titleList}</h2>
                        <ul className="product-list__box">
                            {productList}
                        </ul>
                    </article>
                </main>
            </Fragment>
        );
    }
}

export default Shop;