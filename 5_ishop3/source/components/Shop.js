import React, {Fragment} from "react";

import "./Shop.css";
import ProductPos from "./ProductPos";
import ProductInfo from "./ProductInfo";

class Shop extends React.Component {

    state = {
        db: this.props.db,
        selectPos: null,
        selectPosInfo: null,
        mode: 0,
    };

    updateSelectPos = (code) => {
        console.log("Выбрана позиция: " + code);
        this.setState({selectPos: code, selectPosInfo: this.findInfoPos(code), mode: 3});
    }
    
    findInfoPos = (code) => {
        return this.state.db.find( (pos, i) => { return pos.code === code } );
    }

    deletePos = (code) => {
        if (confirm(`Удалить выбранный элемент (позиция: ${code})?`)) {
            console.log(`Позиция ${code} удалена!`);   
            let newDB = this.state.db.filter((elem) => elem.code !== code);
            (this.state.selectPos === code) 
                ? this.setState({db: newDB, selectPos: null, selectPosInfo: null, mode: 0}) 
                : this.setState({db: newDB});
        }
    }

   //componentDidMount() { this.updateSelectPos(101) }

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
                        <div className="product-list__box-left">
                            <h2 className="product-list__title">{titleList}</h2>
                            <ul className="product-list__box">
                                {productList}
                            </ul>
                        </div>
                        <div className="product-list__box-right">
                            {
                                (this.state.mode === 3) && <ProductInfo code = {this.state.selectPosInfo.code} 
                                                                        title = {this.state.selectPosInfo.title} 
                                                                        photo = {this.state.selectPosInfo.photo} 
                                                                        sum = {this.state.selectPosInfo.sum} 
                                                                        text = {this.state.selectPosInfo.text} 
                                                                        lot = {this.state.selectPosInfo.lot}
                                                                        cbDeletePos = {this.deletePos}
                                                                         />
                                
                            }
                        </div>
                    </article>
                </main>
            </Fragment>
        );
    }
}

export default Shop;