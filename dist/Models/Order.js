var Order = /** @class */ (function () {
    function Order(_id, _userId, _name, _email, _address, _phoneNumber, _note, _totalPrice, _cartNumber, _cart, _status, _create_at) {
        this._id = _id;
        this._userId = _userId;
        this._name = _name;
        this._email = _email;
        this._address = _address;
        this._phoneNumber = _phoneNumber;
        this._note = _note;
        this._totalPrice = _totalPrice;
        this._cartNumber = _cartNumber;
        this._cart = _cart;
        this._status = _status;
        this._create_at = _create_at;
    }
    Object.defineProperty(Order.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (_id) {
            this._id = _id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Order.prototype, "userId", {
        get: function () {
            return this._userId;
        },
        set: function (_userId) {
            this._userId = _userId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Order.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (_name) {
            this._name = _name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Order.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (_email) {
            this._email = _email;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Order.prototype, "address", {
        get: function () {
            return this._address;
        },
        set: function (_address) {
            this._address = _address;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Order.prototype, "phoneNumber", {
        get: function () {
            return this._phoneNumber;
        },
        set: function (_phoneNumber) {
            this._phoneNumber = _phoneNumber;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Order.prototype, "note", {
        get: function () {
            return this._note;
        },
        set: function (_note) {
            this._note = _note;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Order.prototype, "totalPrice", {
        get: function () {
            return this._totalPrice;
        },
        set: function (_totalPrice) {
            this._totalPrice = _totalPrice;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Order.prototype, "cartNumber", {
        get: function () {
            return this._cartNumber;
        },
        set: function (_cartNumber) {
            this._cartNumber = _cartNumber;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Order.prototype, "cart", {
        get: function () {
            return this._cart;
        },
        set: function (_cart) {
            this._cart = _cart;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Order.prototype, "status", {
        get: function () {
            return this._status;
        },
        set: function (_status) {
            this._status = _status;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Order.prototype, "create_at", {
        get: function () {
            return this._create_at;
        },
        set: function (_create_at) {
            this._create_at = _create_at;
        },
        enumerable: false,
        configurable: true
    });
    return Order;
}());
export { Order };
