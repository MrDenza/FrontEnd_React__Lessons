import React from "react";

import "./ProductPos.css"

class ProductPos extends React.Component {
    
    enterPos = () => {
        if (this.props.keyStatus === false) {
            this.props.cbEnterPos(this.props.code);
        }
    }
    
    enterDeletePos = (eo) => {
        eo.stopPropagation();
        this.props.cbDeletePos(this.props.code);
    }

    enterEditPos = (eo) => {
        eo.stopPropagation();
        this.props.cbEditPos(this.props.code);
    }
    
    render() {
        return (
            <li className={`product-list__pos ${(this.props.selectPos === this.props.code) && "product-list__pos_select"}`} onClick={this.enterPos}>
                <span className="product-list__pos-title">{this.props.title}</span>
                <div className="product-list__pos-box-photo">
                    <img className="product-list__pos-photo" src={this.props.photo} alt={`Внешний вид ${this.props.title}`} onError={(e) => e.target.src='img/0.jpeg'}></img>
                </div>
                <span className="product-list__pos-price">{`${this.props.sum} BYN`}</span>
                <span className="product-list__pos-lot">{`Остаток на складе: ${this.props.lot} шт.`}</span>
                <span className="product-list__pos-subtitle">Параметры:</span>
                <span className="product-list__pos-text">{this.props.text}</span>
                <div className="product-list__pos-box-btn">
                    <label htmlFor="btn-del" className="product-list__pos-box-btn-del">
                        <input type="button" id="btn-del" className="product-list__pos-btn-del" value="Удалить" onClick={this.enterDeletePos} disabled={this.props.keyStatus}></input>
                    </label>
                    <label htmlFor="btn-edit" className="product-list__pos-box-btn-edit">
                        <input type="button" id="btn-edit" className="product-list__pos-btn-edit" value="Редактировать" onClick={this.enterEditPos} disabled={this.props.keyStatus}></input>
                    </label>
                </div>
            </li>
        );
    }
}

export default ProductPos;