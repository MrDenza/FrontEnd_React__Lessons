import React, {Fragment} from "react";

import "./NewProduct.css"

class NewProduct extends React.Component {

    state = {
        infoPosition: {},
        errorValidElem: {},
        keyDisableSave: false,
    }

    checkChange = (eo) => {
        this.props.cbEditModeOn();
        let validElem = this.validateElem(eo);
        let statusKeyDisableSave;
        let errorValidElemCopy = JSON.parse(JSON.stringify(this.state.errorValidElem));
        let infoPositionCopy = JSON.parse(JSON.stringify(this.state.infoPosition));
        infoPositionCopy[eo.target.name] = eo.target.value;
        if (typeof validElem == "boolean") {
            delete errorValidElemCopy[eo.target.name];
            statusKeyDisableSave = !(Object.keys(errorValidElemCopy).length === 0);
        } else {
            errorValidElemCopy[eo.target.name] = validElem;
            statusKeyDisableSave = true;
        }
        this.setState({infoPosition: infoPositionCopy, errorValidElem: errorValidElemCopy, keyDisableSave: statusKeyDisableSave});       
    }

    validateElem = (elem) => {      
        switch (elem.target.name) {
            case "title":
                return ((elem.target.value.length >= 3) && (elem.target.value.length <= 50)) ? true : "Длина названия 3 - 50 символов!";
            case "code":
                return ( ((elem.target.value.length >=1) && (elem.target.value.length <= 5))
                    ? (elem.target.value > 0)
                        ? ((+elem.target.value === this.props.objInfo.code) === (this.props.cbGetListCode().includes(+elem.target.value)))
                            ? true
                            : "Данный код существует!"
                        : "Код не может быть меньше 1!"
                    : "Длина кода товара 1 - 5 цифр!"
                );
            case "photo": 
                return (elem.target.value.length >= 3) ? true : "Используйте img/0.jpeg или URL!";
            case "lot":
                return ( ((elem.target.value.length >=0) && (elem.target.value.length <= 10))
                    ? (elem.target.value >= 0)
                        ? true
                        : "Укажите положительное количество!"
                    : "Количество товара 0 - <1 млрд!"
                );
            case "sum":
                return ( ((elem.target.value.length >=1) && (elem.target.value.length <= 10))
                    ? (elem.target.value >= 0)
                        ? true
                        : "Укажите положительную цену!"
                    : "Цена товара 0 - <1 млрд!"
                );
            case "text":
                return (((elem.target.value.length >=1) && (elem.target.value.length <= 250)) ? true : "Длина текста 1 - 250 символов");
            default:
                break;
        }
    }

    goSubmit = (eo) => {
        eo.preventDefault();
        let newInfoProduct = {...this.props.objInfo, ...this.state.infoPosition}
        this.props.cbAddNewPos(newInfoProduct, this.props.objInfo.code);
    }

    editCancel = () => {
        this.props.cbEditModeOff(this.props.objInfo.code);
    }

    render() {
        return (
            <Fragment>
                <h2 className="product-new__big-title">{(this.props.mode === 1) ? "Новый товар:" : "Редактировать товар:"}</h2>
                <form className="product-new__form" onSubmit={this.goSubmit} method="post" name="form">
                    {/* ---------- Название товара */}
                    <label htmlFor="pos-title">Название</label>
                    <input  type="text" 
                            id="pos-title" 
                            name="title" 
                            value={("title" in this.state.infoPosition) ? this.state.infoPosition["title"] : this.props.objInfo.title}
                            onChange={this.checkChange}
                    />
                    <div className="product-new__err-msg">{this.state.errorValidElem["title"]}</div>

                    {/* ---------- Код товара */}
                    <label htmlFor="pos-code">Код товара (NUM)</label>
                    <input  type="number" 
                            id="pos-code" 
                            name="code" 
                            value={("code" in this.state.infoPosition) ? this.state.infoPosition["code"] : this.props.objInfo.code} 
                            onChange={this.checkChange}
                    />
                    <div className="product-new__err-msg">{this.state.errorValidElem["code"]}</div>

                    {/* ---------- Фото товара */}
                    <label htmlFor="pos-photo">Фотография (URL)</label>
                    <input  type="text" 
                            id="pos-photo" 
                            name="photo" 
                            defaultValue={("photo" in this.state.infoPosition) ? this.state.infoPosition["photo"] : this.props.objInfo.photo} 
                            onBlur={this.checkChange}
                            key={Math.random()}
                    />
                     <div className="product-list__pos-box-photo product-new__pos-box-photo">
                        <img src={("photo" in this.state.infoPosition) ? this.state.infoPosition["photo"] : this.props.objInfo.photo} 
                            alt={`Внешний вид ${("title" in this.state.infoPosition) ? this.state.infoPosition["title"] : this.props.objInfo.title}`}
                            onError={(e) => e.target.src='img/0.jpeg'}
                            className="product-list__pos-photo product-new__pos-photo" >
                        </img>
                    </div>
                    <div className="product-new__err-msg">{this.state.errorValidElem["photo"]}</div>

                    {/* ---------- Количество товара */}
                    <label htmlFor="pos-lot">Количество</label>
                    <input  type="number" 
                            id="pos-lot" 
                            name="lot" 
                            value={("lot" in this.state.infoPosition) ? this.state.infoPosition["lot"] : this.props.objInfo.lot}
                            onChange={this.checkChange}
                    />
                    <div className="product-new__err-msg">{this.state.errorValidElem["lot"]}</div>

                    {/* ---------- Стоимость товара */}
                    <label htmlFor="pos-sum">Стоимость (BYN)</label>
                    <input  type="number" 
                            id="pos-sum" 
                            name="sum" 
                            value={("sum" in this.state.infoPosition) ? this.state.infoPosition["sum"] : this.props.objInfo.sum}
                            onChange={this.checkChange}
                    />
                    <div className="product-new__err-msg">{this.state.errorValidElem["sum"]}</div>

                    {/* ---------- Параметры товара */}
                    <label htmlFor="pos-text">Параметры</label>
                    <textarea id="pos-text" 
                            name="text" 
                            value={("text" in this.state.infoPosition) ? this.state.infoPosition["text"] : this.props.objInfo.text} 
                            onChange={this.checkChange}
                    />
                    <div className="product-new__err-msg">{this.state.errorValidElem["text"]}</div>

                    {/* ---------- Кнопки товара */}
                    <div className="product-info__pos-box-btn product-new__pos-box-btn">
                        <label htmlFor="btn-save" >
                            <input className="product-info__pos-box-btn-del" type="submit" id="btn-save" value="Сохранить" disabled={this.state.keyDisableSave}></input>
                        </label>
                        <label htmlFor="btn-cancel">
                            <input className="product-info__pos-box-btn-edit" type="button" id="btn-cancel" value="Отмена" onClick={this.editCancel}></input>
                        </label>
                    </div>
                </form>
            </Fragment>
        );
    }
}

export default NewProduct;