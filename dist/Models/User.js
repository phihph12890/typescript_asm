var User = /** @class */ (function () {
    function User(_id, _name, _email, _password, _birthday) {
        this._id = _id;
        this._name = _name;
        this._email = _email;
        this._password = _password;
        this._birthday = _birthday;
    }
    Object.defineProperty(User.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (_id) {
            this._id = _id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (_name) {
            this._name = _name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (_email) {
            this._email = _email;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "password", {
        get: function () {
            return this._password;
        },
        set: function (_password) {
            this._password = _password;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "birthday", {
        get: function () {
            return this._birthday;
        },
        set: function (_birthday) {
            this._birthday = _birthday;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
export { User };
