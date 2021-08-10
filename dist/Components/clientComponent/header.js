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
import { isAuthenticated } from "../../ultis.js";
export var header = {
    render: function () {
        return /*html */ "\n            <div class=\"header bg-gray-100\">\n            <div class=\" container mx-auto flex py-1 justify-between items-center \" style=\"max-width: 1200px;\">\n                <div class=\"\">\n                    <a href=\"/\"><img class=\"h-24 w-40\" src=\"https://laptopaz.vn/media/banner/logo_laptopaz%20(2).jpg\" alt=\"\"></a>\n                </div>\n                <div class=\"\">\n                    <form>\n                        <input class=\"search-input py-2 px-3 border border-blue-500 text-sm outline-none\" id=\"inputSearch\" type=\"text\" placeholder=\"B\u1EA1n mu\u1ED1n t\u00ECm s\u1EA3n ph\u1EA9m g\u00EC?\" style=\"width:370px;\">\n                        <input class=\"-ml-2 bg-blue-500 border border-blue-500 text-white text-sm px-2 py-2 cursor-pointer\" id=\"btn_search\" type=\"submit\" value=\"Search\">\n                    </form>\n                </div>\n                <div class=\"text-center text-black text-base font-semibold\">\n                    <p class=\"text-red-600 text-sm\"><span><i class=\"fas fa-phone-alt\"></i></span> HOTLINE</p> \n                    <p class=\"text-sm \">09865.02468 - 08586.02468</p>\n                    \n                    <p class=\"text-sm\">\u0110\u1ECBa ch\u1EC9: S\u1ED1 18, ng\u00F5 121, Th\u00E1i H\u00E0, \u0110\u1ED1ng \u0110a, H\u00E0 N\u1ED9i</p>\n                    <div class=\"bg-blue-500 rounded-md text-white mt-1\">\n                        <a class=\"mr-8 \" href=\"/#/about\">Gi\u1EDBi thi\u1EC7u</a>\n                        <a class=\"\" href=\"/#/contact\">Li\u00EAn h\u1EC7</a>\n                    </div>\n                </div>\n                <div class=\"items-center\">\n                    <div class=\"flex\">\n                        <div class=\"text-center\">\n                            <a href=\"/#/shopcart\">\n                                <span class=\"text-red-600 text-lg cursor-pointer\"><i class=\"fas fa-cart-plus\"></i></span>\n                                <p id=\"cart\" class=\"text-sm font-medium cursor-pointer\">Gi\u1ECF h\u00E0ng</p>\n                                <span class=\"absolute rounded-full px-1.5 bg-red-600 text-sm text-white\" id=\"totalCart\" style=\"top:20px;margin-left:3px\"></span>\n                            </a>\n                        </div>\n                        <div id=\"user\"></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"marquee bg-blue-500 \">\n            <div class=\"mx-auto pt-1\" style=\"width:1200px;\">\n                <marquee scrollamount = 10 class=\"text-white font-semibold\">\n                    <span>\u0110\u1ECBa ch\u1EC9: S\u1ED1 18, ng\u00F5 121, Th\u00E1i H\u00E0, \u0110\u1ED1ng \u0110a, H\u00E0 N\u1ED9i.</span> \n                    <span class=\"ml-8\">Hotline: 09865.02468 - 08586.02468.</span>\n                    <span class=\"ml-8\">Email: hotrolaptopaz@gmail.com.</span>\n                    <span class=\"ml-8\">H\u1ED7 tr\u1EE3 k\u1EF9 thu\u1EADt: 0989.52.4004</span>\n                </marquee>\n            </div>\n        </div>\n        ";
    },
    afterRender: function () {
        return __awaiter(this, void 0, void 0, function () {
            var user, sessionUser;
            return __generator(this, function (_a) {
                user = isAuthenticated();
                console.log("usersssssssss", user);
                sessionUser = function () {
                    if (isAuthenticated() == false) {
                        return "\n                    <div class=\"ml-5\">\n                        <a  class=\"ml-2\" href=\"/#/signin\">\n                            <span class=\"text-red-600 text-lg\"><i class=\"fas fa-user\"></i></span>\n                            <p id=\"login\" class=\"text-sm font-medium\">Login</p>\n                        </a>\n                    </div>\n                ";
                    }
                    else {
                        if (isAuthenticated().permission == "ADMIN") {
                            return "\n                    <div class=\"ml-3 group cursor-pointer \">\n                        <span class=\"text-red-600 text-lg\" style=\"margin-left:20px;\"><i class=\"fas fa-user\"></i></span>\n                        <p class=\"text-sm font-medium ml-2 relative\">Hi <span class=\"text-blue-600\">" + user.name + "</span></p>\n                        <div class=\"hidden group-hover:block absolute z-50 bg-white rounded-md border border-blue-600\" style=\"top:75px; \">\n                            <a href=\"/#/products/index\"><button class=\"hover:bg-gray-200 rounded-t-md py-3 text-sm font-semibold text-black hover:text-gray-700\" style=\"padding: 0 55.6px;\">Qu\u1EA3n tr\u1ECB </button></a><br>\n                            <a href=\"/#/order\"><button class=\"hover:bg-gray-200 border-b border-t rounded-t-md py-3 text-sm font-semibold text-black hover:text-gray-700\" style=\"padding: 0 50.2px;\">\u0110\u01A1n h\u00E0ng</button></a><br>\n                            <button class=\"cursor-pointer hover:bg-gray-200 rounded-b-md px-10 text-sm py-3 font-semibold text-black hover:text-gray-700\" style=\"padding: 0 49px;\" id=\"logout\">\u0110\u0103ng xu\u1EA5t</button>\n                        </div>\n                    </div>\n                    ";
                        }
                        else {
                            return "\n                    <div class=\"ml-3 text-center cursor-pointer group\">\n                        <span class=\"mr-4 text-red-600 text-lg text-center\" style=\"margin-left:30px;\"><i class=\"fas fa-user\"></i></span>\n                        <p class=\"text-sm font-medium ml-2\">Hi <span class=\"text-blue-600\">" + user.name + "</span></p>\n                        <div class=\"hidden group-hover:block absolute z-50 bg-white rounded-md border border-black\"style=\"top:75px\">\n                        <a href=\"/#/order\"><button class=\"hover:bg-gray-200 rounded-t-md py-3 text-sm font-semibold text-black hover:text-gray-700\" style=\"padding: 0 50.2px;\">\u0110\u01A1n h\u00E0ng</button></a><br>\n                            <button class=\"cursor-pointer hover:bg-gray-200 rounded-b-md px-10 text-sm py-3 font-semibold text-black hover:text-gray-700\" style=\"padding: 0 49px;\" id=\"logout\">\u0110\u0103ng xu\u1EA5t</button>\n                        </div>\n                    </div>\n                    ";
                        }
                    }
                };
                document.querySelector("#user").innerHTML = sessionUser();
                document.querySelector("#logout").addEventListener("click", function () {
                    localStorage.removeItem('user');
                    localStorage.removeItem('token');
                    localStorage.removeItem('cartNumber');
                    localStorage.removeItem('cart');
                    localStorage.removeItem('totalPrice');
                    window.location.hash = '/signin';
                });
                return [2 /*return*/];
            });
        });
    }
};
