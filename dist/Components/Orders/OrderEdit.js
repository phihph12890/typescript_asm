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
import { Order } from "../../Models/Order.js";
import { OrderApi } from "../../api/OrderApi.js";
import { footer } from "../adminComponent/footer.js";
import { header } from "../adminComponent/header.js";
import { sidebar } from "../adminComponent/sidebar.js";
var OrderEdit = /** @class */ (function (_super) {
    __extends(OrderEdit, _super);
    function OrderEdit(id) {
        var _this = _super.call(this) || this;
        _this._id = id;
        return _this;
    }
    OrderEdit.prototype.template = function () {
        return "\n        <div class=\"wrapper\">\n        <!-- Navbar -->\n            " + header.render() + "\n            " + sidebar.render() + "\n            <!-- Content Wrapper. Contains page content -->\n            <div id=\"root\" class=\"content-wrapper\">\n                <div class=\"col-10 offset-1 pt-5 \">\n                    <h3 class=\"text-center text-3xl font-semibold\">C\u1EACP NH\u1EACT TR\u1EA0NG TH\u00C1I \u0110\u01A0N H\u00C0NG</h3>\n                    <form enctype=\"multipart/form-data\" class=\"text-center\" id=\"form_editOrder\">\n                        <p class=\"mt-10 font-semibold\">Tr\u1EA1ng th\u00E1i: </p> \n                        <select class=\"form-control mx-auto mt-2\" name=\"\" id=\"status\" style=\"width:200px;\">\n                            <option value=\"CH\u01AFA DUY\u1EC6T\">CH\u01AFA DUY\u1EC6T</option>\n                            <option value=\"\u0110\u00C3 DUY\u1EC6T\">\u0110\u00C3 DUY\u1EC6T</option>\n                            <option value=\"\u0110\u00C3 HO\u00C0N TH\u00C0NH\">\u0110\u00C3 HO\u00C0N TH\u00C0NH</option>\n                        </select>\n                        <p class=\"error text-red-500 text-sm font-semibold\"></p>\n                        <input type=\"submit\" value=\"S\u1EEDa tr\u1EA1ng th\u00E1i\" name=\"\" class=\"px-3 py-2 text-white bg-red-600 rounded-full mt-4 mb-5 font-semibold hover:bg-red-700\">\n                    </form>\n                </div>\n            </div>\n            " + footer.render() + "\n        </div>\n            ";
    };
    OrderEdit.prototype.afterRender = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, data;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(typeof this._id != "undefined")) return [3 /*break*/, 3];
                        return [4 /*yield*/, OrderApi.read(this._id)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        console.log(data);
                        _a.label = 3;
                    case 3:
                        document.querySelector("#form_editOrder").addEventListener("submit", function (e) { return __awaiter(_this, void 0, void 0, function () {
                            var inputStatus, status, response, data, ord;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        e.preventDefault();
                                        if (typeof this._id === "undefined") {
                                            return [2 /*return*/];
                                        }
                                        inputStatus = document.querySelector("#status");
                                        status = inputStatus.value;
                                        return [4 /*yield*/, OrderApi.read(this._id)];
                                    case 1:
                                        response = _a.sent();
                                        return [4 /*yield*/, response.json()];
                                    case 2:
                                        data = _a.sent();
                                        console.log(data);
                                        ord = new Order(+this._id, data.userId, data.name, data.email, data.address, data.phoneNumber, data.note, data.totalPrice, data.cartNumber, data.cart, status, data.create_at);
                                        console.log(ord);
                                        return [4 /*yield*/, OrderApi.update(this._id, ord)];
                                    case 3:
                                        _a.sent();
                                        window.location.hash = "/orders/index";
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    return OrderEdit;
}(Component));
export { OrderEdit };
