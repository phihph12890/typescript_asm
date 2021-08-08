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
var ShopCartPage = /** @class */ (function (_super) {
    __extends(ShopCartPage, _super);
    function ShopCartPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ShopCartPage.prototype.template = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = "\n            ";
                        return [4 /*yield*/, header.render()];
                    case 1: return [2 /*return*/, _a + (_b.sent()) + "\n            <div class=\"div-content bg-gray-100 pb-8\">\n                <div class=\"content1 mx-auto\" style=\"max-width: 1200px;\">\n                    <div class=\"flex justify-between items-center py-2\">\n                        <h5 class=\"py-3\"><a href=\"\">Trang ch\u1EE7</a> <i class=\"fas fa-angle-double-right text-xs px-1\"></i> <a href=\"\">Gi\u1ECF h\u00E0ng<i class=\"fas fa-shopping-cart\"></i></a></h5>\n                    </div>\n                    <div id=\"list_cart\">\n                        \n                    </div>\n                </div>\n            </div>\n            <div class=\"bg-gray-100 hidden\" id=\"oderPage\">\n                        <div class=\"mx-auto\" style=\"max-width: 1230px;\">\n                            <div class=\" px-3 pb-5\">\n                                <form class=\"grid grid-cols-5 gap-3\" id=\"form_addOder\">\n                                    <div class=\"col-span-3 border\">\n                                        <div class=\"border-b pt-1 px-3\">\n                                            <h3 class=\"text-lg pb-1 font-semibold\">1. Kh\u00E1ch h\u00E0ng khai b\u00E1o th\u00F4ng tin</h3>\n                                        </div>\n                                        <div class=\"ml-5\">\n                                            <h4 class=\"text-base mt-4 font-semibold\">Th\u00F4ng tin ng\u01B0\u1EDDi mua</h4>\n                                            <p class=\"text-sm mt-1\">Nh\u1EEFng ph\u1EA7n \u0111\u00E1nh d\u1EA5u * l\u00E0 b\u1EAFt bu\u1ED9c</p>\n                                            <div class=\"flex  mt-4\">\n                                            <p style=\"min-width: 120px;\">H\u1ECD t\u00EAn *</p>\n                                            <input type=\"text\" class=\"form-control checkValidate\" id=\"fullname\" placeholder=\"Nguy\u1EC5n V\u0103n A\" style=\"width:420px; height:30px;\"> \n                                            </div>\n                                            <div class=\"flex mt-4\">\n                                                <p style=\"min-width: 120px;\">\u0110\u1ECBa ch\u1EC9*</p>\n                                                <input type=\"text\" class=\"form-control checkValidate\" id=\"address\" placeholder=\"S\u1ED1 165 - C\u1EA7u Gi\u1EA5y - Qu\u1EADn C\u1EA7u Gi\u1EA5y - H\u00E0 N\u1ED9i\" style=\"width:420px; height:30px;\"> \n                                            </div>\n                                            <div class=\"flex mt-4\">\n                                                <p style=\"min-width: 120px;\">S\u1ED1 \u0111i\u1EC7n tho\u1EA1i*</p>\n                                                <input type=\"text\" class=\"form-control checkValidate\" id=\"phoneNumber\" placeholder=\"+84 xxx xxx xxx\" style=\"width:420px; height:30px;\"> \n                                            </div>\n                                            <div class=\"flex mt-4\">\n                                                <p style=\"min-width: 120px;\">Email</p>\n                                                <input type=\"text\" class=\"form-control checkValidate\" id=\"email\" placeholder=\"abc@xyz.com\" style=\"width:420px; height:30px;\">\n                                            </div>\n                                            <div><p class=\"errorEmail text-red-500 text-sm font-semibold mt-1\" style=\"margin-left: 120px\"></p></div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-span-2 \">\n                                        <div class=\"\">\n                                            <div class=\"border-t border-l border-r pt-1 px-3\">\n                                                <h3 class=\"text-lg pb-1 font-semibold\">2. Ghi ch\u00FA cho \u0111\u01A1n h\u00E0ng</h3>\n                                            </div>\n                                            <div class=\"p-2 border\">\n                                                <textarea name=\"\" id=\"note\" rows=\"3\" class=\"w-full form-control checkValidate\"></textarea>\n                                            </div>\n                                        </div>\n                                        <div class=\"mt-4 \">\n                                            <div class=\"border-t border-l border-r pt-1 px-3\">\n                                                <h3 class=\"text-lg pb-1 font-semibold\">3. Ch\u1ECDn ph\u01B0\u01A1ng th\u1EE9c thanh to\u00E1n</h3>\n                                            </div>\n                                            <div class=\"p-3 border\">\n                                                <form class=\"text-sm\" id=\"form\">\n                                                    <div><input name=\"checkPay\" type=\"radio\"> Thanh to\u00E1n t\u1EA1i c\u1EEDa h\u00E0ng</div>\n                                                    <div class=\"mt-1\"><input name=\"checkPay\" type=\"radio\" checked> Thanh to\u00E1n khi nh\u1EADn h\u00E0ng (COD)</div>\n                                                    <div class=\"mt-1\"><input name=\"checkPay\" type=\"radio\" id=\"radio3\" disabled> Thanh to\u00E1n tr\u1EF1c tuy\u1EBFn b\u1EB1ng th\u1EBB ATM, IB, QR Code </div>\n                                                    <div class=\"mt-1\"><input name=\"checkPay\" type=\"radio\" id=\"radio4\" disabled> Thanh to\u00E1n tr\u1EA3 g\u00F3p online</div>\n                                                </form>\n                                            </div>\n                                        </div>\n                                        <div class=\"text-center mt-3\">\n                                            <input type=\"submit\" class=\"btn btn-primary py-2\" value=\"G\u1EECI \u0110\u01A0N H\u00C0NG\">\n                                        </div>\n                                    </div>\n                                </form>\n                            </div>\n                        </div>\n            </div>\n            " + footer.render() + "\n        "];
                }
            });
        });
    };
    ShopCartPage.prototype.afterRender = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    return ShopCartPage;
}(Component));
export { ShopCartPage };
