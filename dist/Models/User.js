var User = /** @class */ (function () {
    function User(_id, _name, _email, _password, _permission) {
        this._id = _id;
        this._name = _name;
        this._email = _email;
        this._password = _password;
        this._permission = _permission;
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
    Object.defineProperty(User.prototype, "permission", {
        get: function () {
            return this._permission;
        },
        set: function (_permission) {
            this._permission = _permission;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
export { User };
