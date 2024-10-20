import React from "react";

import "./ProductInfo.css";

class ProductInfo extends React.Component {
    
    enterDeletePos = (eo) => {
        eo.stopPropagation();
        this.props.cbDeletePos(this.props.code);
    }

    render() {

        return (
            <div className="product-info">
                <div className="product-info__container">
                    <h2 className="product-info__big-title">Информация о товаре:</h2>
                    <span className="product-info__title"><b>Название:</b> {this.props.title}</span>
                    <b>Внешний вид:</b>
                    <div className="product-info__box-photo">
                        <img className="product-info__photo" src={this.props.photo} alt={`Внешний вид ${this.props.title}`}></img>
                    </div>
                    <span className="product-info__price"><b>Стоимость: </b>{`${this.props.sum} BYN`}</span>
                    <span className="product-info__lot"><b>Остаток на складе:</b> {`${this.props.lot} шт.`}</span>
                    <span className="product-info__text"><b>Характеристики:</b> {this.props.text}</span>
                    <div className="product-info__pos-box-btn">
                        <label htmlFor="dop-btn-del" className="product-info__pos-box-btn-del">
                            <input type="button" id="dop-btn-del" className="product-info__pos-btn-del" value="Удалить" onClick={this.enterDeletePos}></input>
                        </label>
                        {/* <label htmlFor="dop-btn-edit" className="product-info__pos-box-btn-edit">
                            <input type="button" id="dop-btn-edit" className="product-info__pos-btn-edit" value="Редактировать" onClick={this.enterDeletePos}></input>
                        </label> */}
                    </div>
                </div>

            </div>
        );  
    }
}

export default ProductInfo;
