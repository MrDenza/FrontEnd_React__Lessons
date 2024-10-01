import React, {Fragment} from "react";

import "./TitleShop.css";

class TitleShop extends React.Component {
    render() {
        const titleList = "Список товаров:";
        let productList = this.props.db.map( p =>
            <li className="product-list__pos" key = {p.code}>
                <span className="product-list__pos-title">{p.title}</span>
                <img className="product-list__pos-photo" src={p.photo} alt={`Внешний вид ${p.title}`}></img>
                <span className="product-list__pos-price">{`${p.sum} BYN`}</span>
                <span className="product-list__pos-lot">{`Остаток на складе: ${p.lot} шт.`}</span>
                <span className="product-list__pos-subtitle">Характеристики:</span>
                <span className="product-list__pos-text">{p.text}</span>
            </li>
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

export default TitleShop;