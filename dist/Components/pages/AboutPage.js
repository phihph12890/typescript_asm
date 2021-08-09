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
import { productSearch, onLoadCartNumber } from "../../ultis.js";
var AboutPage = /** @class */ (function (_super) {
    __extends(AboutPage, _super);
    function AboutPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AboutPage.prototype.template = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = " \n            ";
                        return [4 /*yield*/, header.render()];
                    case 1: return [2 /*return*/, _a + (_b.sent()) + "\n            <div class=\"div-content bg-gray-100 pb-8\">\n                <div class=\"content bg-white mx-auto pb-3 px-3 pt-4\" style=\"max-width: 1200px\">\n                    <div class=\"content1\">\n                        <h2 class=\"text-3xl font-semibold uppercase \">Gi\u1EDBi thi\u1EC7u</h2>\n                        <h4 class=\"text-lg font-semibold mt-3\">C\u00D4NG TY TNHH TIN H\u1ECCC C\u00D4NG NGH\u1EC6 AZ VI\u1EC6T NAM - <span class=\"text-blue-500\">LAPTOP</span><span class=\"text-red-500\">AZ</span></h4>\n                        <p class=\"mt-4\">LaptopAZ th\u01B0\u01A1ng hi\u1EC7u b\u00E1n laptop, linh ki\u1EC7n laptop ch\u00EDnh h\u00E3ng \u0111\u01B0\u1EE3c th\u00E0nh l\u1EADp v\u00E0 \u0111i v\u00E0o ho\u1EA1t \u0111\u1ED9ng b\u00E1n l\u1EBB t\u1EEB n\u0103m 2008.</p>\n                        <p class=\"mt-4\">\n                            T\u1EF1 h\u00E0o l\u00E0 m\u1ED9t trong nh\u1EEFng \u0111\u01A1n v\u1ECB h\u00E0ng \u0111\u1EA7u trong l\u0129nh v\u1EF1c kinh doanh laptop, linh ki\u1EC7n laptop t\u1EA1i H\u00E0 N\u1ED9i, V\u1EDBi 12 n\u0103m kinh nghi\u1EC7m, theo ph\u01B0\u01A1ng ch\u00E2m \"Uy t\u00EDn tr\u00EAn t\u1EEBng s\u1EA3n\n                            ph\u1EA9m\" c\u00F9ng h\u01A1n 30.000 Kh\u00E1ch H\u00E0ng th\u00E2n thi\u1EBFt, ch\u00FAng t\u00F4i cam k\u1EBFt t\u1EA5t c\u1EA3 c\u00E1c s\u1EA3n ph\u1EA9m laptop b\u00E1n ra \u0111\u1EC1u c\u00F3 ch\u1EA5t l\u01B0\u1EE3ng t\u1ED1t nh\u1EA5t tr\u00EAn th\u1ECB tr\u01B0\u1EDDng hi\u1EC7n nay. T\u1EA5t c\u1EA3 laptop t\u1EA1i\n                            showroom \u0111\u1EC1u \u0111\u01B0\u1EE3c b\u1EA3o h\u00E0nh chu\u1EA9n ch\u1EC9 theo quy ch\u1EBF c\u1EE7a c\u00E1c h\u00E3ng.\n                        </p>\n                        <p class=\"mt-4\">\n                            V\u1EDBi s\u1EF1 \u0111a d\u1EA1ng v\u1EC1 c\u00E1c h\u00E3ng laptop \u0111\u01B0\u1EE3c ng\u01B0\u1EDDi ti\u00EAu d\u00F9ng l\u1EF1a ch\u1ECDn nhi\u1EC1u nh\u1EA5t, \u0111a d\u1EA1ng nhi\u1EC1u m\u1EABu m\u00E3 s\u1EA3n ph\u1EA9m. Laptop Dell, HP, Lenovo, Thinjkpad, Asus, MSI, Acer, Macbook...\n                            Laptop Gaming, Laptop \u0111\u1ED3 h\u1ECDa, Laptop doanh nh\u00E2n cao c\u1EA5p m\u1ECFng nhe, laptop v\u0103n ph\u00F2ng gi\u00E1 r\u1EBB, linh ki\u1EC7n laptop ch\u00EDnh h\u00E3ng...\n                        </p>\n                        <p class=\"mt-4\">\n                            V\u1EDBi kinh nghi\u1EC7m nhi\u1EC1u n\u0103m trong ngh\u1EC1 c\u00F9ng v\u1EDBi \u0111\u1ED9i ng\u0169 k\u1EF9 s\u01B0 chuy\u00EAn ghi\u1EC7p t\u1EADn t\u00E2m LaptopAZ lu\u00F4n lu\u00F4n n\u1ED7 l\u1EF1c \u0111\u1EC3 \u0111em t\u1EDBi kh\u00E1ch h\u00E0ng nh\u1EEFng s\u1EA3n ph\u1EA9m c\u00F3 ch\u1EA5t l\u01B0\u1EE3ng t\u1ED1t nh\u1EA5t, ch\u1EBF\n                            \u0111\u1ED9 b\u1EA3o h\u00E0nh v\u00E0 h\u1ED7 tr\u1EE3 t\u1ED1t nh\u1EA5t, m\u1EE9c gi\u00E1 th\u00E0nh c\u1EA1nh tranh ph\u00F9 h\u1EE3p nh\u1EA5t, x\u1EE9ng \u0111\u00E1ng v\u1EDBi t\u1EEBng s\u1ED1 ti\u1EC1n m\u00E0 kh\u00E1ch h\u00E0ng b\u1ECF ra.\n                        </p>\n                        <p class=\"mt-4\">\n                            N\u1EBFu b\u1EA1n c\u00F2n \u0111ang g\u1EB7p kh\u00F3 kh\u0103n trong vi\u1EC7c l\u1EF1a ch\u1ECDn cho m\u00ECnh 1 chi\u1EBFc laptop ph\u00F9 h\u1EE3p v\u1EDBi nhu c\u1EA7u s\u1EED d\u1EE5ng th\u00EC h\u00E3y t\u1EDBi ngay s\u1ED1 18, ng\u00F5 121, Th\u00E1i H\u00E0, \u0110\u1ED1ng \u0110a, showroom LaptopAZ\n                            \u0111\u1EC3 tr\u1EA3i nghi\u1EC7m s\u1EA3n ph\u1EA9m v\u00E0 l\u1EF1c ch\u1ECDn cho m\u00ECnh nh\u1EEFng s\u1EA3n ph\u1EA9m ph\u00F9 h\u1EE3p nh\u1EA5t \u0111\u00E1p \u1EE9ng t\u1ED1t nhu c\u1EA7u s\u1EED d\u1EE5ng v\u00E0 x\u1EE9ng \u0111\u00E1ng v\u1EDBi s\u1ED1 ti\u1EC1n m\u00ECnh b\u1ECF ra \uD83D\uDCAF\n                        </p>\n                        <h5 class=\"font-bold mt-3\">C\u00E1c d\u1ECBch v\u1EE5 hi\u1EC7n t\u1EA1i LaptopAZ cung c\u1EA5p:</h5>\n                        <p class=\"mt-2\">- B\u00E1n bu\u00F4n, b\u00E1n l\u1EBB c\u00E1c s\u1EA3n ph\u1EA9m laptop c\u0169, laptop m\u1EDBi (nh\u1EADp kh\u1EA9u, ch\u00EDnh h\u00E3ng)</p>\n                        <p>- B\u00E1n bu\u00F4n, b\u1EA3n l\u1EBB linh ki\u1EC7n, ph\u1EE5 ki\u1EC7n laptop ch\u00EDnh h\u00E3ng b\u1EA3o h\u00E0nh 12 \u0111\u1EBFn 36 th\u00E1ng nh\u01B0 RAM, \u1ED4 c\u1EE9ng, m\u00E0n h\u00ECnh, Pin, s\u1EA1c, b\u00E0n ph\u00EDm...</p>\n\n                        <h5 class=\"font-bold mt-3\">Cam k\u1EBFt c\u1EE7a LaptopAZ v\u1EDBi kh\u00E1ch h\u00E0ng:</h5>\n                        <p class=\"mt-2\">- \u0110\u1EB7t kh\u00E1ch h\u00E0ng l\u00E0m trung t\u00E2m c\u1EE7a m\u1ECDi suy ngh\u0129 v\u00E0 h\u00E0nh \u0111\u1ED9ng</p>\n                        <p>- B\u1EA3o \u0111\u1EA3m c\u00E1c s\u1EA3n ph\u1EA9m nguy\u00EAn b\u1EA3n 100%, ch\u1EA5t l\u01B0\u1EE3ng ho\u00E0n h\u1EA3o nh\u1EA5t, cam k\u1EBFt kh\u00F4ng b\u00E1n m\u00E1y \u0111\u00E3 qua s\u1EEDa ch\u1EEFa.</p>\n                        <p>\n                            - Ch\u1EC9 mang \u0111\u1EBFn cho qu\u00FD kh\u00E1ch h\u00E0ng nh\u1EEFng s\u1EA3n ph\u1EA9m ch\u00EDnh h\u00E3ng theo \u0111\u00FAng ti\u00EAu chu\u1EA9n c\u1EE7a nh\u00E0 s\u1EA3n xu\u1EA5t, kh\u00F4ng b\u00E1n h\u00E0ng k\u00E9m ch\u1EA5t l\u01B0\u1EE3ng, kh\u00F4ng b\u00E1n h\u00E0ng gi\u1EA3/ h\u00E0ng nh\u00E1i, kh\u00F4ng b\u00E1n\n                            h\u00E0ng kh\u00F4ng r\u00F5 ngu\u1ED3n g\u1ED1c xu\u1EA5t x\u1EE9.\n                        </p>\n                        <p>- Gi\u00E1 b\u00E1n s\u1EA3n ph\u1EA9m \u0111\u00FAng v\u1EDBi ch\u1EA5t l\u01B0\u1EE3ng, gi\u00E1 c\u1EA3 c\u1EA1nh tranh</p>\n                        <p>- Cam k\u1EBFt mang \u0111\u1EBFn nh\u1EEFng ch\u00EDnh s\u00E1ch, nh\u1EEFng ch\u00EDnh s\u00E1ch d\u1ECBch v\u1EE5 t\u1ED1t nh\u1EA5t.</p>\n                        <p class=\"mt-3\">LaptopAZ.vn h\u00E2n h\u1EA1nh \u0111\u01B0\u1EE3c ph\u1EE5c v\u1EE5 b\u1EA1n tr\u00EAn con \u0111\u01B0\u1EDDng kh\u00E1m ph\u00E1 c\u00E1c s\u1EA3n ph\u1EA9m c\u00F4ng ngh\u1EC7!</p>\n                        <p class=\"font-semibold\">=============</p>\n                        <h4 class=\"text-lg font-semibold mt-3\">C\u00D4NG TY TNHH TIN H\u1ECCC C\u00D4NG NGH\u1EC6 AZ VI\u1EC6T NAM - <span class=\"text-blue-500\">LAPTOP</span><span class=\"text-red-500\">AZ</span></h4>\n                        <p><span class=\"font-semibold\">S\u1ED1 \u0110KKD:</span> 01008956087 - S\u1EDF KH&\u0110T H\u00E0 N\u1ED9i c\u1EA5p ng\u00E0y 23/10/2019</p>\n                        <p> \uD83C\uDFEA \u0110\u1ECBa ch\u1EC9: S\u1ED1 18, ng\u00F5 121, Th\u00E1i H\u00E0, \u0110\u1ED1ng \u0110a, TP H\u00E0 N\u1ED9i</p>\n                        <p>\uD83D\uDCF2 Kinh doanh: 09865.02468 - 08586.02468</p>\n                        <p>\uD83D\uDCF2 K\u1EF9 thu\u1EADt: 08289.02468 - 0989.52.4004</p>\n                        <p>\uD83C\uDF10 Website: <a class=\"hover:text-blue-500\" href=\"\">https://laptopaz.vn/</a></p>\n                        <p> <span  class=\"text-lg\" style=\"margin-left: 2px;\"><i class=\"fab fa-facebook-square\"></i></span> <a class=\"hover:text-blue-500\" href=\"\">Facebook.com/LaptopAZ.vn</a></p>\n                        <p> <span style=\"margin-left: 2px;\"><i class=\"fas fa-envelope\"></i></span><span> Email: </span><a href=\"#\" class=\"text-blue-700 hover:text-blue-500\"> hotrolaptopaz@gmail.com</a></p>\n                        <p>\uD83D\uDD34 Th\u01A1\u0300i gian la\u0300m vi\u00EA\u0323c: 8h30h - 21h30 t\u00E2\u0301t ca\u0309 ca\u0301c nga\u0300y trong tu\u00E2\u0300n</p>\n                        <h2 class=\"font-bold ml-3 mt-5\">H\u00CCNH \u1EA2NH KH\u00C1CH H\u00C0NG V\u00C0 C\u00C1C HO\u1EA0T \u0110\u1ED8NG C\u1EE6A CH\u00DANG T\u00D4I</h2>\n                        <div class=\"grid grid-cols-2 gap-4 mt-2\">\n                            <img src=\"https://laptopaz.vn/media/about/2912_1d238043c6ee21b078ff.jpg\" alt=\"\">\n                            <img src=\"https://laptopaz.vn/media/about/2912_91581b2d5d80badee391.jpg\" alt=\"\">\n                            <img src=\"https://laptopaz.vn/media/about/2912_31b86fae51d4b68aefc5.jpg\" alt=\"\">\n                            <img src=\"https://laptopaz.vn/media/about/2912_75247427_2634429743344519_6336878715129036800_o.jpg\" alt=\"\">\n                        </div>\n                        \n                    </div>\n                    <div class=\"content2\"></div>\n                    <div class=\"content3\"></div>\n                </div>\n            </div>\n            " + footer.render() + "\n        "];
                }
            });
        });
    };
    AboutPage.prototype.afterRender = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                productSearch();
                onLoadCartNumber();
                return [2 /*return*/];
            });
        });
    };
    return AboutPage;
}(Component));
export { AboutPage };
