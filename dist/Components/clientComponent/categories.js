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
import { CategoryApi } from "../../api/CategoryApi.js";
export var categories = {
    render: function () {
        return __awaiter(this, void 0, void 0, function () {
            var responseCategories, dataCategories, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, CategoryApi.list()];
                    case 1:
                        responseCategories = _a.sent();
                        return [4 /*yield*/, responseCategories.json()];
                    case 2:
                        dataCategories = _a.sent();
                        result = dataCategories.map(function (category) {
                            return "\n                <li class=\"screenCategory\" data-id=\"" + category.id + "\">\n                    <a href=\"/#/category/" + category.id + "\"  class=\"block text-sm font-semibold px-8 py-3 border-b border-l border-r border-gray-300 hover:bg-blue-300 hover:text-white\">" + category.name + "</a>\n                </li>\n            ";
                        }).join('');
                        return [2 /*return*/, /*html */ "\n            <div class=\" shadow-lg\">\n                <h2 class=\"bg-blue-500 text-white text-base uppercase py-3 px-3 rounded-t-md \">\n                    <span><i class=\"fas fa-bars px-4\"></i></span>\n                    <span class=\"ml-3 font-semibold\">Danh m\u1EE5c</span>\n                </h2>\n                <ul>\n                    " + result + "\n                </ul>\n            </div>\n        "];
                }
            });
        });
    }
};
