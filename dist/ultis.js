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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
export var $$ = function (selector) {
    var elements = document.querySelectorAll(selector);
    return elements.length == 1 ? elements[0] : __spreadArray([], elements);
};
export var prices = function (x) {
    return (x = x.toLocaleString("it-IT", {
        style: "currency",
        currency: "VND",
    }));
};
export var reRender = function (component, position) {
    if (position === void 0) { position = ""; }
    return __awaiter(void 0, void 0, void 0, function () {
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    if (!position) return [3 /*break*/, 2];
                    console.log(component);
                    _a = $$(position);
                    return [4 /*yield*/, component.render()];
                case 1:
                    _a.innerHTML = _c.sent();
                    console.log(position);
                    return [3 /*break*/, 4];
                case 2:
                    _b = $$("#content");
                    return [4 /*yield*/, component.render()];
                case 3:
                    _b.innerHTML = _c.sent();
                    _c.label = 4;
                case 4: return [4 /*yield*/, component.afterRender()];
                case 5:
                    _c.sent();
                    return [2 /*return*/];
            }
        });
    });
};
// export const authenticated = (accessToken:any) => {
//     const user = jwt_decode(accessToken);
//     if (typeof window !== 'undefined') {
//         return localStorage.setItem('user', JSON.stringify(user));
//     }
// }
export var isAuthenticated = function () {
    if (typeof window == "undefined") {
        return false;
    }
    if (localStorage.getItem("user")) {
        return JSON.parse(localStorage.getItem("user"));
    }
    else {
        return false;
    }
};
export var logout = function () {
    if (localStorage.getItem("user")) {
        return localStorage.removeItem("user");
    }
};
export var clickLogout = function () {
    if (document.querySelector("#logout") != undefined) {
        document.querySelector("#logout").onclick = function () {
            logout();
            localStorage.removeItem("cartNumber");
            localStorage.removeItem("cart");
            localStorage.removeItem("totalPrice");
            window.location.hash = "/signin";
        };
    }
};
export var productSearch = function () {
    if ($$("#btn_search")) {
        $$("#btn_search").addEventListener("click", function (e) {
            e.preventDefault();
            var textSearch = $$("#inputSearch").value;
            window.location.hash = "/search/" + textSearch;
        });
    }
};
export var addToCart = function (id, name, image, price, cateId) {
    var cartStorage = localStorage.getItem("cart");
    var screenCart = null;
    if (cartStorage == null) {
        screenCart = [];
    }
    else {
        screenCart = JSON.parse(cartStorage);
        console.log(screenCart);
    }
    var item = {
        id: id,
        name: name,
        image: image,
        price: price,
        cateId: cateId,
        quantity: 1,
    };
    var existed = screenCart.findIndex(function (ele) { return ele.id == item.id; });
    if (existed == -1) {
        item.quantity = 1;
        screenCart.push(item);
    }
    else {
        console.log(screenCart);
        screenCart[existed].quantity++;
    }
    console.log(item);
    localStorage.setItem("cart", JSON.stringify(screenCart));
    alert("Thêm giỏ hàng thành công");
};
export var getTotalItemOnCart = function () {
    var cartStorage = localStorage.getItem("cart");
    var screenCart = null;
    if (cartStorage == null) {
        screenCart = [];
    }
    else {
        screenCart = JSON.parse(cartStorage);
    }
    var totalItems = 0;
    screenCart.forEach(function (element) {
        totalItems += element.quantity;
    });
    var totalItemss = String(totalItems);
    localStorage.setItem("cartNumber", totalItemss);
    return totalItems;
};
export var onLoadCartNumber = function () {
    var cartNumber = localStorage.getItem("cartNumber");
    $$("#totalCart").textContent = cartNumber;
};
export var addToOrder = function (id, userId, name, email, address, phoneNumber, note, totalPrice, cartNumber, cart, status, create_at) {
};
