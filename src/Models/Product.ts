export class Product {
    private _id: number;
    private _name: string;
    private _categoryId: string;
    private _price : string;
    private _priceSale : string;
    private _image : string;

    public constructor(_id: number, _name: string, _categoryId: string, _price : string, _priceSale : string, _image : string) {
        this._id = _id;
        this._name = _name;
        this._categoryId = _categoryId;
        this._price = _price;
        this._priceSale = _priceSale;
        this._image = _image;

    }

    get id(): number {
        return this._id;
    }
    set id(_id: number) {
        this._id = _id;
    }

    get name(): string {
        return this._name;
    }
    set name(_name: string) {
        this._name = _name;
    }

    get categoryId(): string {
        return this._categoryId;
    }
    set categoryId(_categoryId: string) {
        this._categoryId = _categoryId;
    }

    get price(): string {
        return this._price;
    }
    set price(_price: string) {
        this._price = _price;
    }

    get priceSale(): string {
        return this._priceSale;
    }
    set priceSale(_priceSale: string) {
        this._priceSale = _priceSale;
    }

    get image(): string {
        return this._image;
    }
    set image(_image: string) {
        this._image = _image;
    }
}
