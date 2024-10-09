import React, {Fragment} from "react";

import "./Shop.css";
import ProductPos from "./ProductPos";

class Shop extends React.Component {

    state = {
        db: this.props.db,
        selectPos: null,
    };

    updateSelectPos = (code) => {
        console.log("Выбрана позиция: " + code);
        this.setState({selectPos: code});
    }
    
    deletePos = (code) => {
        if (confirm(`Удалить выбранный элемент (позиция: ${code})?`)) {
            console.log(`Позиция ${code} удалена!`);   
            let newDB = this.state.db.filter((elem) => elem.code !== code)
            this.setState({db: newDB});
        }
    }

    render() {
        const titleList = "Список товаров:";
        let productList = this.state.db.map( p =>
            <ProductPos key = {p.code}
                        code = {p.code} 
                        title = {p.title} 
                        photo = {p.photo} 
                        sum = {p.sum} 
                        text = {p.text} 
                        lot = {p.lot} 
                        selectPos = {this.state.selectPos}
                        cbEnterPos = {this.updateSelectPos}
                        cbDeletePos = {this.deletePos}
            />
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