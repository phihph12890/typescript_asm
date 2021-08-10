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
import { header } from "../clientComponent/header.js";
import { footer } from "../clientComponent/footer.js";
import { OrderApi } from "../../api/OrderApi.js";
import { prices, $$, productSearch, onLoadCartNumber, isAuthenticated } from "../../ultis.js";
var OrderPage = /** @class */ (function (_super) {
    __extends(OrderPage, _super);
    function OrderPage() {
        return _super.call(this) || this;
    }
    OrderPage.prototype.template = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = "\n            ";
                        return [4 /*yield*/, header.render()];
                    case 1: return [2 /*return*/, _a + (_b.sent()) + "\n            <div class=\"div-content bg-gray-100 pb-8\">\n                <div class=\"content1 mx-auto\" style=\"max-width: 1200px;\">\n                    <div class=\"\">\n                        <h5 class=\"py-3\"><a href=\"\">Trang ch\u1EE7</a> <i class=\"fas fa-angle-double-right text-xs px-1\"></i> <a href=\"\">\u0110\u01A1n h\u00E0ng \u0111\u00E3 \u0111\u1EB7t</a></h5>\n                    </div>\n                    <div id=\"list_order\">\n                        \n                    </div>\n                </div>\n            </div>\n            " + footer.render() + "\n        "];
                }
            });
        });
    };
    OrderPage.prototype.afterRender = function () {
        return __awaiter(this, void 0, void 0, function () {
            var userId, responseOrder, orders, listOrder, checkStatus, i, btns, _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        productSearch();
                        onLoadCartNumber();
                        userId = isAuthenticated().id;
                        return [4 /*yield*/, OrderApi.getByUser(userId)];
                    case 1:
                        responseOrder = _b.sent();
                        return [4 /*yield*/, responseOrder.json()];
                    case 2:
                        orders = _b.sent();
                        console.log("orderssssss", orders);
                        listOrder = function () {
                            var result = orders
                                .map(function (item, index) {
                                return "\n                        <tr class=\"text-center\">\n                            <td>" + (index + 1) + "</td>\n                            <td><span class=\"px-2\">" + item.name + "</span></td>   \n                            <td><span>" + item.phoneNumber + "</span></td>\n                            <td><span>" + prices(item.totalPrice).replace("VND", "Đ") + "</span></td>\n                            <td><span>" + item.create_at + "</span></td>\n                            <td><span>" + item.status + "</span><span class=\"checkStatus\"></span></td>\n                            <td>\n                                <a href=\"/#/orderdetail/" + item.id + "\">\n                                    <button class=\"text-sm px-2 border border-gray-600 rounded-lg text-white btn btn-primary\" data-id=\"" + item.id + "\">\n                                        <i class=\"fas fa-info-circle\"></i>\n                                    </button>\n                                </a>\n                            </td>\n                            <td><div><button class=\"text-sm px-1 border border-gray-600 rounded-lg text-white btn btn-danger btn-remove\" data-id=\"" + item.id + "\">Del</button></div></td>\n                        </tr>\n                    ";
                            })
                                .join("");
                            if (orders.length == 0) {
                                return "\n                    <div class=\"text-center text-4xl font-semibold pt-32 pb-4\">B\u1EA1n ch\u01B0a c\u00F3 \u0111\u01A1n h\u00E0ng n\u00E0o <i class=\"far fa-frown\"></i></div>\n                    <div class=\"text-center mb-32\"><a href=\"/\" class=\"btn btn-primary\">Mua ngay</a></div>\n                ";
                            }
                            else {
                                return "\n                    <div>\n                        <table class=\"table table-hover\">\n                            <thead>\n                                <tr class=\"text-center\">\n                                    <th style=\"width: 50px\">STT</td>\n                                    <th style=\"width: 300px\">H\u1ECD v\u00E0 t\u00EAn</td>\n                                    <th style=\"width: 175px\">S\u1ED1 \u0111i\u1EC7n tho\u1EA1i</td>\n                                    <th style=\"width: 175px\">T\u1ED5ng ti\u1EC1n</td>\n                                    <th style=\"width: 170px\">Ng\u00E0y \u0111\u1EB7t h\u00E0ng</td>\n                                    <th style=\"width: 200px\">Tr\u1EA1ng th\u00E1i</td>\n                                    <th colspan=\"2\" style=\"width: 100px\">Tu\u1EF3 ch\u1ECDn</td>\n                                </tr>\n                            </thead>\n                            <tbody id=\"showListOrder\">\n                                " + result + "\n                            </tbody>\n                        </table>\n                    </div>\n                ";
                            }
                        };
                        document.querySelector("#list_order").innerHTML = listOrder();
                        checkStatus = $$(".checkStatus");
                        if (checkStatus.length > 1) {
                            for (i = 0; i < orders.length; i++) {
                                if (orders[i].status == "ĐÃ HOÀN THÀNH") {
                                    checkStatus[i].innerHTML = " <i class=\"text-green-500 text-lg fas fa-check\"></i>";
                                }
                                else if (orders[i].status == "ĐÃ DUYỆT") {
                                    checkStatus[i].innerHTML = " <i class=\" text-blue-500 text-lg fas fa-smile\"></i>";
                                }
                                else {
                                    checkStatus[i].innerHTML = " <i class=\"text-red-500 text-lg fas fa-frown\"></i></i>";
                                }
                            }
                        }
                        else {
                            if (orders[0].status == "ĐÃ HOÀN THÀNH") {
                                checkStatus.innerHTML = " <i class=\"text-green-500 text-lg fas fa-check\"></i>";
                            }
                            else if (orders[0].status == "ĐÃ DUYỆT") {
                                checkStatus.innerHTML = " <i class=\" text-blue-500 text-lg fas fa-smile\"></i>";
                            }
                            else {
                                checkStatus.innerHTML = " <i class=\"text-red-500 text-lg fas fa-frown\"></i></i>";
                            }
                        }
                        btns = document.querySelectorAll(".btn-remove");
                        console.log(btns);
                        btns.forEach(function (btn) {
                            var id = btn.dataset.id;
                            btn.addEventListener("click", function () { return __awaiter(_this, void 0, void 0, function () {
                                var responseTheOrder, theOrder, Confirm;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, OrderApi.read(id)];
                                        case 1:
                                            responseTheOrder = _a.sent();
                                            return [4 /*yield*/, responseTheOrder.json()];
                                        case 2:
                                            theOrder = _a.sent();
                                            if (!(theOrder.status == "ĐÃ DUYỆT" || theOrder.status == "ĐÃ HOÀN THÀNH")) return [3 /*break*/, 3];
                                            alert("Không thể xoá đơn hàng ĐÃ DUYỆT hoặc ĐÃ HOÀN THÀNH");
                                            return [3 /*break*/, 5];
                                        case 3:
                                            Confirm = confirm("Bạn có thật sự muốn xoá?");
                                            if (!Confirm) return [3 /*break*/, 5];
                                            return [4 /*yield*/, OrderApi.remove(id)];
                                        case 4:
                                            _a.sent();
                                            location.reload();
                                            _a.label = 5;
                                        case 5: return [2 /*return*/];
                                    }
                                });
                            }); });
                        });
                        _a = "";
                        return [4 /*yield*/, header.afterRender()];
                    case 3: return [2 /*return*/, _a + (_b.sent())];
                }
            });
        });
    };
    return OrderPage;
}(Component));
export { OrderPage };
