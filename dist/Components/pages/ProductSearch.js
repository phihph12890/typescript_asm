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
import { categories } from "../clientComponent/categories.js";
import { header } from "../clientComponent/header.js";
import { footer } from "../clientComponent/footer.js";
import { ProductApi } from "../../api/ProductApi.js";
import { prices, productSearch } from "../../ultis.js";
var ProductSearch = /** @class */ (function (_super) {
    __extends(ProductSearch, _super);
    function ProductSearch(id) {
        var _this = _super.call(this) || this;
        _this._id = id;
        return _this;
    }
    ProductSearch.prototype.template = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = "\n            " + header.render() + "\n            <div class=\"content bg-gray-100 pb-8\" id=\"content\">\n                <div class=\" mx-auto grid grid-cols-4 gap-8 pt-4\" style=\"width:1200px;\">\n                    <aside class=\"col-span-1 bg-gray-100\">\n                        ";
                        return [4 /*yield*/, categories.render()];
                    case 1: return [2 /*return*/, _a + (_b.sent()) + "\n                        <div id=\"sticky\" class=\"mt-8\">\n                            <img class=\"shadow-md transition duration-500 ease-in-out transform hover:scale-95\" src=\"https://laptopaz.vn/media/banner/23_Octce2f48fdc627f6f62b233347a2d4e707.jpg\" alt=\"\">\n                            <img class=\"shadow-md mt-10 transition duration-500 ease-in-out transform hover:scale-95\" src=\"https://laptopaz.vn/media/banner/11_Oct876d50f755e454ecda95d81a959c3685.jpg\" alt=\"\">\n                        </div>\n                    </aside>\n                    <div class=\"col-span-3\">\n                        <h5 class=\"mt-1\"><span><i class=\"fas fa-search\"></i> S\u1EA3n ph\u1EA9m t\u00ECm ki\u1EBFm: <span id=\"textSearch\"class=\"text-blue-600 font-semibold text-sm\"></span></h5>\n                        <div class=\"grid grid-cols-3 gap-6 gap-y-6 mt-3 text-center\" id=\"list_product\">\n                            \n                        </div>\n                    </div>\n                </div>\n            </div>\n            " + footer.render() + "\n        "];
                }
            });
        });
    };
    ProductSearch.prototype.afterRender = function () {
        return __awaiter(this, void 0, void 0, function () {
            var responseProductSearch, productSearch_1, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        productSearch();
                        document.querySelector("#sticky").style.position = "sticky";
                        document.querySelector("#sticky").style.top = "30px";
                        if (!(typeof this._id != "undefined")) return [3 /*break*/, 3];
                        document.querySelector("#textSearch").innerHTML = this._id;
                        console.log(this._id);
                        return [4 /*yield*/, ProductApi.search(this._id)];
                    case 1:
                        responseProductSearch = _a.sent();
                        return [4 /*yield*/, responseProductSearch.json()];
                    case 2:
                        productSearch_1 = _a.sent();
                        console.log(productSearch_1);
                        result = void 0;
                        if (productSearch_1.length == 0) {
                            result = "\n                    <div class=\" text-center absolute mx-48 mt-20\">\n                        <div class=\"text-4xl font-semibold\">Kh\u00F4ng t\u00ECm th\u1EA5y s\u1EA3n ph\u1EA9m <i class=\"far fa-sad-tear\"></i></div>\n                        <div><a href=\"/\"><button class=\"btn btn-primary mt-4\">Trang ch\u1EE7</button></a></div>\n                    </div>\n                ";
                        }
                        else {
                            result = productSearch_1.map(function (product) {
                                return "\n                        <div class=\"group overflow-hidden shadow-md bg-white \">\n                                <div class=\"bg-white overflow-hidden \">\n                                    <div class=\"py-2 transition duration-500 ease-in-out transform group-hover:scale-90\">\n                                        <a href=\"/#/product/" + product.id + "\"><img class=\"mx-auto\" src=\"" + product.image + "\" alt=\"\" width=\"80%\"></a>\n                                    </div>\n                                    <a href=\"/#/product/" + product.id + "\"><span class=\"text-center text-sm pt-1 group-hover:text-yellow-600 px-2\">" + product.name + "</span></a>\n                                    <p class=\"text-red-500 text-lg font-bold py-1\">" + prices(Number(product.priceSale)).replace("VND", "Đ") + "<span class=\"text-gray-500 text-base ml-2 font-bold pt-1italic line-through\">" + prices(Number(product.price)).replace("VND", "Đ") + "</span></p>\n                                    <div class=\"transition duration-300 ease-in-out transform translate-y-24 group-hover:-translate-y-0\" >\n                                        <button class=\"bg-blue-500 text-white bg-black text-base font-bold rounded-md btn_addCart\" \n                                                style=\"padding: 6px 50px;\" data-id=\"" + product.id + "\">\n                                            TH\u00CAM GI\u1ECE H\u00C0NG\n                                        </button>\n                                    </div>\n                                </div>\n                        </div>\n                            ";
                            })
                                .join("");
                        }
                        document.querySelector("#list_product").innerHTML = result;
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return ProductSearch;
}(Component));
export { ProductSearch };
