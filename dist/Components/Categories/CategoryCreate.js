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
import { Category } from "../../Models/Category.js";
import { CategoryApi } from "../../api/CategoryApi.js";
import { footer } from "../adminComponent/footer.js";
import { header } from "../adminComponent/header.js";
import { sidebar } from "../adminComponent/sidebar.js";
var CategoryCreate = /** @class */ (function (_super) {
    __extends(CategoryCreate, _super);
    function CategoryCreate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CategoryCreate.prototype.template = function () {
        return "\n        <div class=\"wrapper\">\n        <!-- Navbar -->\n            " + header.render() + "\n            " + sidebar.render() + "\n            <!-- Content Wrapper. Contains page content -->\n            <div id=\"root\" class=\"content-wrapper\">\n                <div class=\"col-10 offset-1 pt-5 \">\n                    <h3 class=\"text-center text-3xl font-semibold\">TH\u00CAM DANH M\u1EE4C</h3>\n                    <form action=\"\" method= \"POST\" class= \"text-center\" id=\"form_create\">\n                        <div class=\" mt-4\">\n                            <label class=\"col-2\">T\u00EAn danh m\u1EE5c</label>\n                            <input type=\"text\" name=\"name\" id=\"name\" class=\"form-control col-5 mx-auto checkValidate\">\n                            <p class=\"error text-red-500 text-sm font-semibold\"></p>\n                            <p class=\"errorName text-red-500 text-sm font-semibold\"></p>\n                        </div>\n                        <div class=\" mt-8\">\n                            <div>\n                                <button class=\"btn btn-primary px-5\">TH\u00CAM</button>\n                            </div>\n                            <button class=\"btn btn-default mt-2 px-5\">\n                                <a href=\"#/categories/index\" data-navigo>Cancel</a>\n                            </button>\n                        </div>\n                    </form>\n                </div>\n            </div>\n            " + footer.render() + "\n        </div>\n            ";
    };
    CategoryCreate.prototype.afterRender = function () {
        var _this = this;
        document.querySelector("#form_create").addEventListener("submit", function (e) { return __awaiter(_this, void 0, void 0, function () {
            var inputName, name, sumCheck, checkValidate, errorValidate, responseCate, dataCate, check, category;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        e.preventDefault();
                        inputName = document.querySelector("#name");
                        name = inputName.value;
                        sumCheck = 0;
                        checkValidate = document.querySelector(".checkValidate");
                        errorValidate = document.querySelector(".error");
                        console.log(checkValidate);
                        console.log(errorValidate);
                        if (checkValidate.value.trim() == "") {
                            sumCheck += 1;
                            errorValidate.innerHTML = "Không được để trống";
                        }
                        else {
                            errorValidate.innerHTML = "";
                        }
                        return [4 /*yield*/, CategoryApi.list()];
                    case 1:
                        responseCate = _a.sent();
                        return [4 /*yield*/, responseCate.json()];
                    case 2:
                        dataCate = _a.sent();
                        console.log(dataCate);
                        check = 0;
                        dataCate.forEach(function (element) {
                            if (checkValidate.value == element.name) {
                                check += 1;
                            }
                        });
                        console.log(check);
                        if (!(sumCheck === 0)) return [3 /*break*/, 5];
                        if (!(check === 0)) return [3 /*break*/, 4];
                        category = new Category(0, name);
                        console.log(category);
                        return [4 /*yield*/, CategoryApi.add(category)];
                    case 3:
                        _a.sent();
                        window.location.hash = "#/categories/index";
                        return [3 /*break*/, 5];
                    case 4:
                        document.querySelector(".errorName").innerHTML = "Tên danh mục đã tồn tại";
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        }); });
    };
    return CategoryCreate;
}(Component));
export { CategoryCreate };
