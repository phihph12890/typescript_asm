var Category = /** @class */ (function () {
    function Category(_id, _name) {
        this._id = _id;
        this._name = _name;
    }
    Object.defineProperty(Category.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (_id) {
            this._id = _id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Category.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (_name) {
            this._name = _name;
        },
        enumerable: false,
        configurable: true
    });
    return Category;
}());
export { Category };
