import React, { Fragment } from "react";

import "./ProductInfo.css";

class ProductInfo extends React.Component {
    
    enterDeletePos = (eo) => {
        eo.stopPropagation();
        this.props.cbDeletePos(this.props.objInfo.code);
    }

    enterEditPos = (eo) => {
        eo.stopPropagation();
        this.props.cbEditPos(this.props.objInfo.code);
    }

    render() {

        return (
            <Fragment>
                <h2 className="product-info__big-title">Информация о товаре:</h2>
                <span className="product-info__title"><b>Название:</b> {this.props.objInfo.title}</span>
                <b>Внешний вид:</b>
                <div className="product-info__box-photo">
                    <img className="product-info__photo" src={this.props.objInfo.photo} alt={`Внешний вид ${this.props.objInfo.title}`} onError={(e) => e.target.src='img/0.jpeg'}></img>
                </div>
                <span className="product-info__price"><b>Стоимость: </b>{`${this.props.objInfo.sum} BYN`}</span>
                <span className="product-info__lot"><b>Остаток на складе:</b> {`${this.props.objInfo.lot} шт.`}</span>
                <span className="product-info__text"><b>Параметры:</b> {this.props.objInfo.text}</span>
                <div className="product-info__pos-box-btn">
                    <label htmlFor="dop-btn-del" className="product-info__pos-box-btn-del">
                        <input type="button" id="dop-btn-del" className="product-info__pos-btn-del" value="Удалить" onClick={this.enterDeletePos}></input>
                    </label>
                    <label htmlFor="dop-btn-edit" className="product-info__pos-box-btn-edit">
                        <input type="button" id="dop-btn-edit" className="product-info__pos-btn-edit" value="Редактировать" onClick={this.enterEditPos}></input>
                    </label>
                </div>
            </Fragment>
        );  
    }
}

export default ProductInfo;
