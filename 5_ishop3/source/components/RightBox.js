import React from "react";

import "./RightBox.css"
import ProductInfo from "./ProductInfo";
import NewProduct from "./NewProduct";

let nullObj = {"code": "", "title": "", "photo": "", "sum": "", "text": "", "lot": ""};

class RightBox extends React.Component {
    
    modeRender = (mode) => {
        if (mode === 1 || mode === 2) {
            return <NewProduct mode = {this.props.mode}
                                objInfo = {(mode === 2) ? this.props.objInfo : nullObj} 
                                cbGetListCode = {this.props.cbGetListCode} // получение массива кодов товаров
                                cbEditModeOn = {this.props.cbEditModeOn} // режим редактирования включен
                                cbEditModeOff = {this.props.cbEditModeOff} // режим редактирования выключен
                                cbAddNewPos = {this.props.cbAddNewPos} // добавление нового элемента в БД
                                />     
        }
        if (mode === 3) {
            return <ProductInfo objInfo = {this.props.objInfo} 
                                cbDeletePos = {this.props.cbDeletePos} // кнопка "Удалить"
                                cbEditPos = {this.props.cbEditPos} // кнопка "Редактировать"
                                />
        }
    }

    render() {
        return (
            <div className="product-r-box">
                <div className="product-r-box__container">
                    { this.modeRender(this.props.mode) }
                </div>
            </div>
        );
    }
}

export default RightBox;