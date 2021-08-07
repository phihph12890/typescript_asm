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
import { Product } from "../../Models/Product.js";
import { ProductApi } from "../../api/ProductApi.js";
import { CategoryApi } from "../../api/CategoryApi.js";
import { footer } from "../admin/footer.js";
import { header } from "../admin/header.js";
import { sidebar } from "../admin/sidebar.js";
var ProductCreate = /** @class */ (function (_super) {
    __extends(ProductCreate, _super);
    function ProductCreate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProductCreate.prototype.template = function () {
        return "\n        <div class=\"wrapper\">\n        <!-- Navbar -->\n            " + header.render() + "\n            " + sidebar.render() + "\n            <!-- Content Wrapper. Contains page content -->\n            <div id=\"root\" class=\"content-wrapper\">\n            <div class=\"col-10 offset-1 pt-5 \">\n                    <h3 class=\"text-center text-3xl font-semibold\">TH\u00CAM S\u1EA2N PH\u1EA8M</h3>\n                    <form action=\"\" method= \"POST\"  id=\"form_create\">\n                        <div class=\"grid grid-cols-2 gap-12\">\n                            <div>\n                                <div class=\" mt-4\">\n                                    <label class=\"\">T\u00EAn s\u1EA3n ph\u1EA9m</label>\n                                    <input type=\"text\" name=\"name\" id=\"name\" class=\"form-control\">\n                                </div>\n                                <div class=\" mt-4\">\n                                    <label class=\"\">Danh m\u1EE5c</label>\n                                    <select class=\"form-control\" name=\"\" id=\"category\"></select>\n                                </div>\n                                <div class=\" mt-4\">\n                                    <div><label class=\"\">\u1EA2nh</label></div>\n                                    <input type=\"text\" name=\"image\" id=\"image\" class=\"form-control\">\n                                </div>\n                            </div>\n                            <div>\n                                <div class=\" mt-4\">\n                                    <label class=\"\">Gi\u00E1 ti\u1EC1n</label>\n                                    <input type=\"number\" name=\"price\" id=\"price\" class=\"form-control\">\n                                </div>\n                                <div class=\" mt-4\">\n                                    <label class=\"\">Gi\u00E1 khuy\u1EBFn m\u00E3i</label>\n                                    <input type=\"number\" name=\"priceSale\" id=\"priceSale\" class=\"form-control\">\n                                </div>\n                            </div>\n                        </div>\n                        \n                        <div class=\" mt-8 text-center\">\n                            <div>\n                                <button class=\"btn btn-primary px-5\">TH\u00CAM</button>\n                            </div>\n                            <button class=\"btn btn-default mt-2 px-5\">\n                                <a href=\"#/products/index\" data-navigo>Cancel</a>\n                            </button>\n                        </div>\n                    </form>\n                </div>\n            </div>\n            " + footer.render() + "\n        </div>\n            ";
    };
    ProductCreate.prototype.afterRender = function () {
        return __awaiter(this, void 0, void 0, function () {
            var responseCate, dataCate, resultCate;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, CategoryApi.all()];
                    case 1:
                        responseCate = _a.sent();
                        return [4 /*yield*/, responseCate.json()];
                    case 2:
                        dataCate = _a.sent();
                        console.log(dataCate);
                        resultCate = dataCate.map(function (cate) {
                            return "\n                <option value=\"" + cate.id + "\">" + cate.name + "</option>\n            ";
                        });
                        document.getElementById("category").innerHTML = resultCate;
                        document.querySelector("#form_create").addEventListener("submit", function (e) { return __awaiter(_this, void 0, void 0, function () {
                            var inputName, name, inputCategory, category, inputPrice, price, inputPriceSale, priceSale, inputImage, image, product;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        e.preventDefault();
                                        inputName = document.querySelector("#name");
                                        name = inputName.value;
                                        inputCategory = document.querySelector("#category");
                                        category = inputCategory.value;
                                        inputPrice = document.querySelector("#price");
                                        price = inputPrice.value;
                                        inputPriceSale = document.querySelector("#priceSale");
                                        priceSale = inputPriceSale.value;
                                        inputImage = document.querySelector("#image");
                                        image = inputImage.value;
                                        product = new Product(0, name, category, price, priceSale, image);
                                        console.log(product);
                                        return [4 /*yield*/, ProductApi.create(product)];
                                    case 1:
                                        _a.sent();
                                        window.location.hash = "#/products/index";
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    return ProductCreate;
}(Component));
export { ProductCreate };
