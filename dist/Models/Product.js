var Product = /** @class */ (function () {
    function Product(_id, _name, _categoryId, _price, _priceSale, _image) {
        this._id = _id;
        this._name = _name;
        this._categoryId = _categoryId;
        this._price = _price;
        this._priceSale = _priceSale;
        this._image = _image;
    }
    Object.defineProperty(Product.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (_id) {
            this._id = _id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (_name) {
            this._name = _name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "categoryId", {
        get: function () {
            return this._categoryId;
        },
        set: function (_categoryId) {
            this._categoryId = _categoryId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (_price) {
            this._price = _price;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "priceSale", {
        get: function () {
            return this._priceSale;
        },
        set: function (_priceSale) {
            this._priceSale = _priceSale;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "image", {
        get: function () {
            return this._image;
        },
        set: function (_image) {
            this._image = _image;
        },
        enumerable: false,
        configurable: true
    });
    return Product;
}());
export { Product };
