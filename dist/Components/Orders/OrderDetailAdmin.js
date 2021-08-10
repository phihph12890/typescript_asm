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
import { OrderApi } from "../../api/OrderApi.js";
import { footer } from "../adminComponent/footer.js";
import { header } from "../adminComponent/header.js";
import { sidebar } from "../adminComponent/sidebar.js";
import { prices } from "../../ultis.js";
var OrderDetailAdmin = /** @class */ (function (_super) {
    __extends(OrderDetailAdmin, _super);
    function OrderDetailAdmin(id) {
        var _this = _super.call(this) || this;
        _this._id = id;
        return _this;
    }
    OrderDetailAdmin.prototype.template = function () {
        return "\n        <div class=\"wrapper\">\n        <!-- Navbar -->\n            " + header.render() + "\n            " + sidebar.render() + "\n            <!-- Content Wrapper. Contains page content -->\n            <div class=\"content-wrapper\">\n                <div class=\"py-5\">\n                    <h2 class=\"text-center font-bold text-xl\">TH\u00D4NG TIN \u0110\u01A0N H\u00C0NG</h2>\n                </div>\n                <div class=\"text-center mx-auto\" id=\"order-in4\">\n                    <div class=\"grid grid-cols-7 gap-5\" >\n                        <div class=\"col-span-2 text-left\" id=\"personal_in4\">\n                            \n                        </div>\n                        <div class=\"col-span-5 \">\n                            <h4 class=\"text-center text-2xl font-semibold py-2\">Th\u00F4ng tin s\u1EA3n ph\u1EA9m</h4>\n                            <table class=\"mx-auto text-center table table-hover\">\n                                <thead>\n                                    <tr class=\"text-center\">\n                                        <th style=\"width: 50px\">STT</td>\n                                        <th style=\"width: 300px\">T\u00EAn s\u1EA3n ph\u1EA9m</td>\n                                        <th style=\"width: 150px\">\u0110\u01A1n gi\u00E1</td>\n                                        <th style=\"width: 100px\">S\u1ED1 l\u01B0\u1EE3ng</td>\n                                        <th style=\"width: 150px\">Th\u00E0nh ti\u1EC1n</td>\n                                    </tr>\n                                </thead>\n                                <tbody id=\"product_in4\">\n\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            " + footer.render() + "\n        </div>\n        ";
    };
    OrderDetailAdmin.prototype.afterRender = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, data_1, personalIn4, productIn4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(typeof this._id != "undefined")) return [3 /*break*/, 3];
                        return [4 /*yield*/, OrderApi.read(this._id)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data_1 = _a.sent();
                        console.log(data_1);
                        personalIn4 = function () {
                            return "\n                    <h4 class=\"text-center text-2xl font-semibold border-b py-2\">Th\u00F4ng tin ng\u01B0\u1EDDi mua h\u00E0ng</h4>\n                    <div class=\"px-4 mt-4\">\n                        <div class=\"\">\n                            <p class=\"mt-3\"><span class=\"font-semibold\">H\u1ECD v\u00E0 t\u00EAn:</span> <span>" + data_1.name + "</span></p>\n                            <p class=\"mt-3\"><span class=\"font-semibold\">\u0110\u1ECBa ch\u1EC9:</span> <span>" + data_1.address + "</span></p>\n                            <p class=\"mt-3\"><span class=\"font-semibold\">S\u0110T:</span> <span>" + data_1.phoneNumber + "</span></p>\n                            <p class=\"mt-3\"><span class=\"font-semibold\">Email:</span> <span>" + data_1.email + "</span></p>\n                            <p class=\"mt-3\"><span class=\"font-semibold\">Ng\u00E0y \u0111\u1EB7t:</span> <span>" + data_1.create_at + "</span></p>\n                            <p class=\"mt-3\"><span class=\"font-semibold\">S\u1ED1 s\u1EA3n ph\u1EA9m:</span> <span>" + data_1.cartNumber + "</span></p>\n                            <p class=\"mt-3\"><span class=\"font-semibold\">T\u1ED5ng ti\u1EC1n:</span> <span class=\"font-semibold text-red-500\">" + prices(data_1.totalPrice).replace("VND", "Đ") + "</span></p>\n                            <p class=\"mt-3\"><span class=\"font-semibold\">Tr\u1EA1ng th\u00E1i:</span> <span>" + data_1.status + "</span></p>\n                            <p class=\"mt-3\"><span class=\"font-semibold\">Ghi ch\u00FA: </span> " + data_1.note + "</p>\n                        </div>\n                    </div>\n                ";
                        };
                        document.querySelector("#personal_in4").innerHTML = personalIn4();
                        productIn4 = data_1.cart.map(function (item, index) {
                            return "\n                    <tr class=\"text-center\">\n                        <td>" + (index + 1) + "</td>\n                        <td class=\" grid grid-cols-4\">\n                            <img class=\"col-span-1\" src=\"" + item.image + "\" alt=\"\" width=\"90\">\n                            <p class=\"col-span-3\">" + item.name + "</p>\n                        </td>   \n                        <td>\n                            <span class=\"cart_price_show\">" + prices(Number(item.price)).replace("VND", "Đ") + "</span>\n                            <span class=\"cart_price hidden\">" + Number(item.price) + "</span>\n                        </td>\n                        <td>" + item.quantity + "</td>\n                        <td>\n                            <span class=\"cart_cost_show text-red-500 font-semibold\">" + prices(Number(item.price) * Number(item.quantity)).replace("VND", "Đ") + "</span>\n                            <span class=\"cart_cost hidden \">" + Number(item.price) * Number(item.quantity) + "</span>\n                        </td>\n                    </tr>\n                ";
                        }).join("");
                        document.querySelector("#product_in4").innerHTML = productIn4;
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return OrderDetailAdmin;
}(Component));
export { OrderDetailAdmin };
