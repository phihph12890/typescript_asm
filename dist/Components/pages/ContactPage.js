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
import { productSearch } from "../../ultis.js";
var ContactPage = /** @class */ (function (_super) {
    __extends(ContactPage, _super);
    function ContactPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContactPage.prototype.template = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = " \n            ";
                        return [4 /*yield*/, header.render()];
                    case 1: return [2 /*return*/, _a + (_b.sent()) + "\n            <div class=\"div-content bg-gray-100 pb-8\">\n                <div class=\"content bg-white mx-auto pb-5 px-3 pt-4\" style=\"max-width: 1200px\">\n                    <div>\n                        <h2 class=\"text-3xl uppercase font-semibold\">Li\u00EAn h\u1EC7</h2>\n                        <div class=\"mx-auto mt-4\">\n                            <iframe\n                                src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.863981044334!2d105.74459841475554!3d21.038127785993286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b991d80fd5%3A0x53cefc99d6b0bf6f!2sFPT%20Polytechnic%20Hanoi!5e0!3m2!1sen!2s!4v1622259329215!5m2!1sen!2s\"\n                                width=\"100%s\"\n                                height=\"500\"\n                                style=\"border: 0\"\n                                allowfullscreen=\"\"\n                                loading=\"lazy\"\n                            ></iframe>\n                        </div>\n                    </div>\n                    <div>\n                        <h2 class=\"text-2xl uppercase font-semibold text-center mt-4 mb-4\">Li\u00EAn h\u1EC7 v\u1EDBi ch\u00FAng t\u00F4i</h2>\n                        <div class=\"grid grid-cols-2 gap-8 px-20\">\n                            <div>\n                                <div class=\"shadow-sm\">\n                                    <img src=\"https://laptopaz.vn/media/about/2912_IMG_E2367.JPG\" alt=\"\" />\n                                </div>\n                                <h4 class=\"font-semibold mt-8\">C\u00D4NG TY TNHH TIN H\u1ECCC C\u00D4NG NGH\u1EC6 AZ VI\u1EC6T NAM - <span class=\"text-blue-500\">LAPTOP</span><span class=\"text-red-500\">AZ</span></h4>\n                                <p class=\"mt-4\">\uD83C\uDFEA \u0110\u1ECBa ch\u1EC9: S\u1ED1 18, ng\u00F5 121, Th\u00E1i H\u00E0, \u0110\u1ED1ng \u0110a, TP H\u00E0 N\u1ED9i</p>\n                                <p class=\"mt-4\">\uD83D\uDCF2 Kinh doanh: 09865.02468 - 08586.02468</p>\n                                <p class=\"mt-4\">\uD83D\uDCF2 K\u1EF9 thu\u1EADt: 08289.02468 - 0989.52.4004</p>\n                                <p class=\"mt-4\">\uD83C\uDF10 Website: <a class=\"hover:text-blue-500\" href=\"\">https://laptopaz.vn/</a></p>\n                                <p class=\"mt-4\">\n                                    <span style=\"margin-left: 2px\"><i class=\"fas fa-envelope\"></i></span><span> Email: </span\n                                    ><a href=\"#\" class=\"text-blue-700 hover:text-blue-500\"> hotrolaptopaz@gmail.com</a>\n                                </p>\n                                <p class=\"mt-4\">\uD83D\uDD34 Th\u01A1\u0300i gian la\u0300m vi\u00EA\u0323c: 8h30h - 21h30 t\u00E2\u0301t ca\u0309 ca\u0301c nga\u0300y trong tu\u00E2\u0300n</p>\n                            </div>\n                            <div class=\"ml-16\">\n                                <form action=\"\">\n                                    <p class=\"font-semibold\">T\u00EAn c\u1EE7a b\u1EA1n</p>\n                                    <input class=\"border mt-2 bg-gray-100 form-control\" type=\"text\" style=\"width: 400px; height: 30px\" />\n                                    <p class=\"font-semibold mt-4\">Email</p>\n                                    <input class=\"border mt-2 bg-gray-100 form-control\" type=\"email\" style=\"width: 400px; height: 30px\" />\n                                    <p class=\"font-semibold mt-4\">S\u1ED1 \u0111i\u1EC7n tho\u1EA1i</p>\n                                    <input class=\"border mt-2 bg-gray-100 form-control\" type=\"number\" style=\"width: 400px; height: 30px\" />\n                                    <p class=\"font-semibold mt-4\">Ti\u00EAu \u0111\u1EC1</p>\n                                    <input class=\"border mt-2 bg-gray-100 form-control\" type=\"text\" style=\"width: 400px; height: 30px\" />\n                                    <p class=\"font-semibold mt-4\">Your message (optional)</p>\n                                    <textarea class=\"border bg-gray-100 form-control\" name=\"\" id=\"\" cols=\"53\" rows=\"4\"></textarea>\n                                    <button class=\"bg-blue-600 text-white px-6 py-2 rounded-md mt-3 hover:bg-blue-800\">G\u1EECI</button>\n                                </form>\n                                <div>\n                                    <h2 class=\"font-semibold mt-8\">K\u1EBET N\u1ED0I V\u1EDAI CH\u00DANG T\u00D4I</h2>\n                                    <div class=\"mt-3\">\n                                        <a href=\"\"><i class=\"text-3xl fab fa-facebook-square\"></i></a>\n                                        <a href=\"\"><i class=\"text-3xl ml-2 fab fa-instagram-square\"></i></a>\n                                        <a href=\"\"><i class=\"text-3xl ml-2 fab fa-facebook-messenger\"></i></a>\n                                        <a href=\"\"><i class=\"text-3xl ml-2 fab fa-twitter-square\"></i></a>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            " + footer.render() + "\n        "];
                }
            });
        });
    };
    ContactPage.prototype.afterRender = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                productSearch();
                return [2 /*return*/];
            });
        });
    };
    return ContactPage;
}(Component));
export { ContactPage };
