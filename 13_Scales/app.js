class Scales {
    constructor() {
        this._productList = [];
    }
    add(product) {
        this._productList.push(product);
    }
    getNameList() {
        return this._productList.reduce((nameList, pos) => {
            nameList.push(pos.getName());
            return nameList;
        }, []);
    }
    getSumScale() {
        return this._productList.reduce((sumScale, pos) => {
            sumScale += pos.getScale();
            return sumScale;
        }, 0);
    }
}
class Product {
    constructor(nameProduct, scaleProduct) {
        this._nameProduct = '';
        this._scaleProduct = 0;
        this._nameProduct = nameProduct;
        this._scaleProduct = scaleProduct;
    }
    getName() {
        return this._nameProduct;
    }
    getScale() {
        return this._scaleProduct;
    }
}
class Apple extends Product {
    constructor(scaleProduct) {
        super('Apple', scaleProduct);
    }
}
class Tomato extends Product {
    constructor(scaleProduct) {
        super('Tomato', scaleProduct);
    }
}
class Lime extends Product {
    constructor(scaleProduct) {
        super('Lime', scaleProduct);
    }
}
let scales = new Scales();
let apple = new Apple(100);
let tomato = new Tomato(120);
let lime = new Lime(101);
scales.add(apple);
scales.add(tomato);
scales.add(lime);
console.log(scales.getNameList());
console.log(scales.getSumScale());
// run: tsc -t es6 app.ts
