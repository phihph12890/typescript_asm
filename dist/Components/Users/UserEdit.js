var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { Component } from "../Component.js";
import { User } from "../../Models/User.js";
import { UserApi } from "../../api/UserApi.js";
import { footer } from "../adminComponent/footer.js";
import { header } from "../adminComponent/header.js";
import { sidebar } from "../adminComponent/sidebar.js";
var UserEdit = /** @class */ (function (_super) {
    __extends(UserEdit, _super);
    function UserEdit(id) {
        var _this = _super.call(this) || this;
        _this._id = id;
        return _this;
    }
    UserEdit.prototype.template = function () {
        return "\n        <div class=\"wrapper\">\n        <!-- Navbar -->\n            " + header.render() + "\n            " + sidebar.render() + "\n            <!-- Content Wrapper. Contains page content -->\n            <div id=\"root\" class=\"content-wrapper pb-5\">\n                <div class=\"col-10 offset-1 pt-5 \">\n                    <h3 class=\"text-center font-bold pb-5 pt-4 text-xl\">C\u1EACP NH\u1EACT USER</h3>\n                    <form id=\"form_editUser\" class=\"text-center\">\n                        <div class=\"\">\n                            <p class=\"mb-3 font-semibold\"><i class=\"fas fa-user-tag mr-2\"></i>Full Name</p><input class=\"px-3 py-1 rounded-md checkValidate\" style=\"width:330px;\" type=\"text\" id=\"name\">\n                            <p class=\"error text-red-500 text-sm font-semibold\"></p>\n                            <p class=\"mb-3 mt-5 font-semibold\"><i class=\"fas fa-user-circle mr-2\"></i>Email</p><input class=\"px-3 py-1 rounded-md checkValidate border\" style=\"width:330px;\" type=\"email\" id=\"email\" disabled>\n                            <p class=\"error text-red-500 text-sm font-semibold\"></p>\n                        </div>\n                        <div class=\"text-center mt-3\">\n                            <p class=\" mt-5 font-semibold\"><i class=\"fas fa-user-shield mr-2\"></i>Quy\u1EC1n h\u1EA1n</p>\n                            <select id=\"permission\" class=\"w-64 mt-3 h-8 rounded-md px-2\">\n                                <option value=\"KH\u00C1CH H\u00C0NG\">Kh\u00E1ch h\u00E0ng</option>\n                                <option value=\"ADMIN\">Qu\u1EA3n tr\u1ECB</option>\n                            </select>\n                        </div>\n                        <div id=\"alert\" class=\"mt-3 text-center mx-auto\" style=\"width: 350px;\" role=\"alert\"></div>\n                        <div class=\"text-center mt-3\">\n                            <input class=\"mb-4 px-5 py-1 rounded-lg font-semibold bg-blue-500 btn btn-primary\" type=\"submit\" value=\"C\u1EACP NH\u1EACT\" id=\"btn_signup\" style=\"margin-top: 20px;\">\n                        </div>\n                    </form>\n                </div>\n            </div>\n            " + footer.render() + "\n        </div>\n            ";
    };
    UserEdit.prototype.afterRender = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, data_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(typeof this._id != "undefined")) return [3 /*break*/, 3];
                        console.log("this._id", this._id);
                        return [4 /*yield*/, UserApi.read(this._id)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data_1 = _a.sent();
                        console.log(data_1);
                        document.querySelector("#name").value = data_1.name;
                        document.querySelector("#email").value = data_1.email;
                        document.querySelector("#form_editUser").addEventListener("submit", function (e) { return __awaiter(_this, void 0, void 0, function () {
                            var inputName, name, inputPermission, permission, user;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        e.preventDefault();
                                        //Cách 1: Type Casting: < >
                                        // const inputName = <HTMLInputElement>document.querySelector("#name");
                                        //Cách 2: as
                                        if (typeof this._id === "undefined") {
                                            return [2 /*return*/];
                                        }
                                        inputName = document.querySelector("#name");
                                        name = inputName.value;
                                        inputPermission = document.querySelector("#permission");
                                        permission = inputPermission.value;
                                        user = new User(+this._id, name, data_1.email, data_1.password, permission);
                                        console.log(user);
                                        return [4 /*yield*/, UserApi.update(this._id, user)];
                                    case 1:
                                        _a.sent();
                                        window.location.hash = "#/users/index";
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return UserEdit;
}(Component));
export { UserEdit };
