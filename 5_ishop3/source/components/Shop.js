import React, {Fragment} from "react";

import "./Shop.css";
import ProductPos from "./ProductPos";
import RightBox from "./RightBox";

class Shop extends React.Component {

    state = {
        db: this.props.db, // массив объектов - база данных
        selectPos: null, // выделенная позиция
        selectPosInfo: null, // объект информации выделенной позиции
        mode: 0, // 0 - ничего, 1 - создание, 2 - редактирование, 3 - отображение
        keyStatus: false, // отключать кнопки когда изменяется информация
    };

    updateSelectPos = (code) => {
        console.log("Выбрана позиция: " + code);
        this.setState({selectPos: code, selectPosInfo: this.findInfoPos(code), mode: 3, keyStatus: false});
    }
    
    findInfoPos = (code) => {
        return this.state.db.find( (pos, i) => { return pos.code === code } );
    }

    getListCode = () => {
        return this.state.db.reduce( (codeList, elem) => {
            codeList.push(elem.code);
            return codeList;
        }, []) 
    }

    deletePos = (code) => {
        if (confirm(`Удалить выбранный элемент (позиция: ${code})?`)) {
            console.log(`Позиция ${code} удалена!`);   
            let newDB = this.state.db.filter((elem) => elem.code !== code);
            (this.state.selectPos === code) 
                ? this.setState({db: newDB, selectPos: null, selectPosInfo: null, mode: 0, keyStatus: false}) 
                : this.setState({db: newDB});
        }
    }

    editPos = (code) => {
        console.log("Редактирование позиции: " + code);
        this.setState({selectPos: code, selectPosInfo: this.findInfoPos(code), mode: 2});
    }

    editModeOn = () => {
        this.setState({keyStatus: true});
    }

    editModeOff = (code) => {
        this.state.mode === 2 && this.updateSelectPos(code);
        this.state.mode === 1 && this.setState({mode: 0, keyStatus: false, selectPos: null, selectPosInfo: null});
    }

    addNewPos = (elem, oldCode) => {
        let dbCopy = JSON.parse(JSON.stringify(this.state.db));
        let indexPos = dbCopy.findIndex(pos => pos.code == oldCode);
        if (oldCode === elem.code) {
            dbCopy[indexPos] = elem;
        } else {
            (indexPos > -1) && dbCopy.splice(indexPos, 1);
            dbCopy.push(elem);
        }      
        this.setState({db: dbCopy, mode: 0, keyStatus: false, selectPos: null, selectPosInfo: null}, console.log(`Добавлена новая позиция! Код: ${elem.code}`));   
    }

    createNewPos = () => {
        console.log("Создание новой позиции.");
        this.setState({selectPos: null, selectPosInfo: null, mode: 1});
    }

    componentDidMount() { // тест
        //this.updateSelectPos(101);
        //this.editPos(101);
        //this.createNewPos(); 
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
                        keyStatus = {this.state.keyStatus}
                        cbEnterPos = {this.updateSelectPos}
                        cbDeletePos = {this.deletePos}
                        cbEditPos = {this.editPos}
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
                            <label htmlFor="btn-add-pos" className="product-list__btn-add-pos">
                                <input type="button" id="btn-add-pos" value="Добавить новый товар" disabled={this.state.keyStatus} onClick={this.createNewPos}></input>
                            </label>
                            <ul className="product-list__box">
                                {productList}
                            </ul>
                        </div>
                        {  
                            (this.state.mode > 0) && 
                                <RightBox mode = {this.state.mode}
                                        objInfo = {this.state.selectPosInfo}
                                        cbGetListCode = {this.getListCode} 
                                        cbDeletePos = {this.deletePos}
                                        cbEditPos = {this.editPos}
                                        cbEditModeOn = {this.editModeOn}
                                        cbEditModeOff = {this.editModeOff}
                                        cbAddNewPos = {this.addNewPos}
                                />        
                        }
                    </article>
                </main>
            </Fragment>
        );
    }
}

export default Shop;