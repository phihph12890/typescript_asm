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
import { prices, $$ } from "../../ultis.js";
var OrderIndex = /** @class */ (function (_super) {
    __extends(OrderIndex, _super);
    function OrderIndex() {
        return _super.call(this) || this;
    }
    OrderIndex.prototype.template = function () {
        return "\n        <div class=\"wrapper\">\n        <!-- Navbar -->\n            " + header.render() + "\n            " + sidebar.render() + "\n            <!-- Content Wrapper. Contains page content -->\n            <div id=\"root\" class=\"content-wrapper\">\n            <div class=\" pt-5 text-center\">\n                <h2 class=\"text-center font-bold text-xl mb-3\">QU\u1EA2N TR\u1ECA \u0110\u01A0N H\u00C0NG</h2>\n                <table class=\"table table-hover mt-5 text-center mx-auto\" style=\"max-width:1200px;\">\n                    <thead>\n                        <tr>\n                            <th scope=\"col\">STT</th>\n                            <th scope=\"col\">H\u1ECD V\u00E0 T\u00EAn</th>\n                            <th scope=\"col\">S\u1ED1 \u0111i\u1EC7n tho\u1EA1i</th>\n                            <th scope=\"col\">T\u1ED5ng ti\u1EC1n</th>\n                            <th scope=\"col\">Ng\u00E0y \u0111\u1EB7t h\u00E0ng</th>\n                            <th scope=\"col\">Tr\u1EA1ng Th\u00E1i</th>\n                            <th colspan=\"2\" style=\"width: 100px\">Thao t\u00E1c</th>\n                        </tr>\n                    </thead>\n                    <tbody id=\"tbl_products\"></tbody>\n                </table>\n            </div>\n            </div>\n            " + footer.render() + "\n        </div>\n        ";
    };
    OrderIndex.prototype.afterRender = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, tbodyContents, listBtnDel, btn_edit, id, responsetheOrder, theorder;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, OrderApi.list()];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        console.log(data);
                        tbodyContents = data
                            .map(function (value, key) {
                            return "\n                    <tr>\n                        <td>" + (key + 1) + "</td>\n                        <td>" + value.name + "</td>\n                        <td>" + value.phoneNumber + "</td>\n                        <td class=\"text-red-500 font-semibold\">" + prices(Number(value.totalPrice)).replace("VND", "Đ") + "</td>\n                        <td>" + value.create_at + "</td>\n                        <td>\n                            <span>" + value.status + "</span> <span class=\"checkStatus\"></span>\n                            <a href=\"/#/orders/edit/" + value.id + "\">\n                            <button class=\"text-sm px-2 border border-gray-600 rounded-lg text-white btn btn-dark\" data-id=\"" + value.id + "\">\n                                <i class=\"fas fa-edit\"></i>\n                            </button></a>\n                        </td>\n                        \n                        <td>\n                        <a href = \"/#/orders/detailadmin/" + value.id + "\">\n                            <button class=\"text-sm px-2 border border-gray-600 rounded-lg text-white btn btn-primary btn-in4\" data-id=\"" + value.id + "\">\n                                <i class=\"fas fa-info-circle\"></i>\n                            </button>\n                        </a>\n                    </td>\n                    <td><div><button class=\"text-sm px-1 border border-gray-600 rounded-lg text-white btn btn-danger btn-remove\" data-id=\"" + value.id + "\"><i class=\"px-1 fas fa-trash-alt\"></i></button></div></td>\n                    </tr>\n                ";
                        })
                            .join("");
                        document.querySelector("#tbl_products").innerHTML = tbodyContents;
                        listBtnDel = $$(".btn-danger");
                        console.log(listBtnDel);
                        if (listBtnDel.length > 1) {
                            listBtnDel.forEach(function (btn) {
                                var id = btn.dataset.id;
                                console.log(id);
                                btn.addEventListener("click", function (e) { return __awaiter(_this, void 0, void 0, function () {
                                    var responseOrder, order, Confirm;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                e.preventDefault();
                                                return [4 /*yield*/, OrderApi.read(id)];
                                            case 1:
                                                responseOrder = _a.sent();
                                                return [4 /*yield*/, responseOrder.json()];
                                            case 2:
                                                order = _a.sent();
                                                console.log(order);
                                                if (!(order.status == "ĐÃ HOÀN THÀNH" || order.status == "ĐÃ DUYỆT")) return [3 /*break*/, 3];
                                                alert("Không thể xoá đơn hàng ĐÃ DUYỆT hoặc ĐÃ HOÀN THÀNH!");
                                                return [3 /*break*/, 5];
                                            case 3:
                                                Confirm = confirm("Bạn có thật sự muốn xoá?");
                                                if (!Confirm) return [3 /*break*/, 5];
                                                return [4 /*yield*/, OrderApi.remove(id)];
                                            case 4:
                                                _a.sent();
                                                window.location.hash = "#/orders/index";
                                                _a.label = 5;
                                            case 5: return [2 /*return*/];
                                        }
                                    });
                                }); });
                            });
                        }
                        else {
                            $$(".btn-danger").addEventListener("click", function (e) { return __awaiter(_this, void 0, void 0, function () {
                                var id, responseOrder, order, Confirm;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            e.preventDefault();
                                            id = $$(".btn-danger").dataset.id;
                                            return [4 /*yield*/, OrderApi.read(id)];
                                        case 1:
                                            responseOrder = _a.sent();
                                            return [4 /*yield*/, responseOrder.json()];
                                        case 2:
                                            order = _a.sent();
                                            console.log(order);
                                            if (!(order.status == "ĐÃ HOÀN THÀNH" || order.status == "ĐÃ DUYỆT")) return [3 /*break*/, 3];
                                            alert("Không thể xoá đơn hàng ĐÃ DUYỆT hoặc ĐÃ HOÀN THÀNH!");
                                            return [3 /*break*/, 5];
                                        case 3:
                                            Confirm = confirm("Bạn có thật sự muốn xoá?");
                                            if (!Confirm) return [3 /*break*/, 5];
                                            return [4 /*yield*/, OrderApi.remove(id)];
                                        case 4:
                                            _a.sent();
                                            window.location.hash = "#/orders/index";
                                            _a.label = 5;
                                        case 5: return [2 /*return*/];
                                    }
                                });
                            }); });
                        }
                        btn_edit = $$(".btn-dark");
                        console.log(btn_edit);
                        if (!(btn_edit.length > 1)) return [3 /*break*/, 3];
                        btn_edit.forEach(function (btn_edit) { return __awaiter(_this, void 0, void 0, function () {
                            var id, responsetheOrder, theorder;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        id = btn_edit.dataset.id;
                                        return [4 /*yield*/, OrderApi.read(id)];
                                    case 1:
                                        responsetheOrder = _a.sent();
                                        return [4 /*yield*/, responsetheOrder.json()];
                                    case 2:
                                        theorder = _a.sent();
                                        if (theorder.status == "ĐÃ HOÀN THÀNH") {
                                            btn_edit.style.display = "none";
                                        }
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [3 /*break*/, 6];
                    case 3:
                        id = $$(".btn-dark").dataset.id;
                        return [4 /*yield*/, OrderApi.read(id)];
                    case 4:
                        responsetheOrder = _a.sent();
                        return [4 /*yield*/, responsetheOrder.json()];
                    case 5:
                        theorder = _a.sent();
                        if (theorder.status == "ĐÃ HOÀN THÀNH") {
                            $$(".btn-dark").style.display = "none";
                        }
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    return OrderIndex;
}(Component));
export { OrderIndex };
