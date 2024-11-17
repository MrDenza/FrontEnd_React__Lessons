
class Scales {

    private _productList:Product[] = [];

    add(product:Product):void {
        this._productList.push(product);
    }

    getNameList(): string[] | [] {
        return this._productList.reduce( (nameList: string[], pos: Product): string[] => {
                nameList.push(pos.getName());
                return nameList;
            }
        , []);
    }

    getSumScale(): number {
        return this._productList.reduce( (sumScale: number, pos: Product): number => {
                sumScale += pos.getScale();
                return sumScale;
            }
        , 0);
    }

}

class Product {

    private _nameProduct:string = '';
    private _scaleProduct:number = 0;

    constructor(nameProduct:string, scaleProduct:number) {
        this._nameProduct = nameProduct;
        this._scaleProduct = scaleProduct;        
    }
    
    getName():string {
        return this._nameProduct;
    }

    getScale():number {
        return this._scaleProduct;
    }

}

class Apple extends Product {

    constructor(scaleProduct:number) {
        super('Apple', scaleProduct);    
    }
}

class Tomato extends Product {

    constructor(scaleProduct:number) {
        super('Tomato', scaleProduct);    
    }
}

class Lime extends Product {

    constructor(scaleProduct:number) {
        super('Lime', scaleProduct);    
    }
}

let scales:Scales = new Scales();

let apple:Product = new Apple(100);
let tomato:Tomato = new Tomato(120);
let lime:Lime | Product = new Lime(101);

scales.add(apple);
scales.add(tomato);
scales.add(lime);

console.log(scales.getNameList()); 
console.log(scales.getSumScale());

// run: tsc -t es6 app.ts