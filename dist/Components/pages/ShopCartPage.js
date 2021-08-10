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
import { OrderApi } from "../../api/OrderApi.js";
import { prices, $$, productSearch, onLoadCartNumber, isAuthenticated } from "../../ultis.js";
import { Order } from "../../Models/Order.js";
var ShopCartPage = /** @class */ (function (_super) {
    __extends(ShopCartPage, _super);
    function ShopCartPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ShopCartPage.prototype.template = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, "\n            " + header.render() + "\n            <div class=\"div-content bg-gray-100 pb-8\">\n                <div class=\"content1 mx-auto\" style=\"max-width: 1200px;\">\n                    <div class=\"flex justify-between items-center py-2\">\n                        <h5 class=\"py-3\"><a href=\"/\">Trang ch\u1EE7</a> <i class=\"fas fa-angle-double-right text-xs px-1\"></i> <a href=\"/#/shopcart\">Gi\u1ECF h\u00E0ng<i class=\"fas fa-shopping-cart\"></i></a></h5>\n                    </div>\n                    <div id=\"list_cart\">\n                    </div>\n                </div>\n            </div>\n            <div class=\"bg-gray-100 hidden\" id=\"oderPage\">\n                        <div class=\"mx-auto\" style=\"max-width: 1230px;\">\n                            <div class=\" px-3 pb-5\">\n                                <form class=\"grid grid-cols-5 gap-3\" id=\"form_addOder\">\n                                    <div class=\"col-span-3 border\">\n                                        <div class=\"border-b pt-1 px-3\">\n                                            <h3 class=\"text-lg pb-1 font-semibold\">1. Kh\u00E1ch h\u00E0ng khai b\u00E1o th\u00F4ng tin</h3>\n                                        </div>\n                                        <div class=\"ml-5\">\n                                            <h4 class=\"text-base mt-4 font-semibold\">Th\u00F4ng tin ng\u01B0\u1EDDi mua</h4>\n                                            <p class=\"text-sm mt-1\">Nh\u1EEFng ph\u1EA7n \u0111\u00E1nh d\u1EA5u * l\u00E0 b\u1EAFt bu\u1ED9c</p>\n                                            <div class=\"flex  mt-4\">\n                                            <p style=\"min-width: 120px;\">H\u1ECD t\u00EAn *</p>\n                                            <input type=\"text\" class=\"form-control checkValidate\" id=\"fullname\" placeholder=\"Nguy\u1EC5n V\u0103n A\" style=\"width:420px; height:30px;\"> \n                                            </div>\n                                            <div class=\"flex mt-4\">\n                                                <p style=\"min-width: 120px;\">\u0110\u1ECBa ch\u1EC9*</p>\n                                                <input type=\"text\" class=\"form-control checkValidate\" id=\"address\" placeholder=\"S\u1ED1 165 - C\u1EA7u Gi\u1EA5y - Qu\u1EADn C\u1EA7u Gi\u1EA5y - H\u00E0 N\u1ED9i\" style=\"width:420px; height:30px;\"> \n                                            </div>\n                                            <div class=\"flex mt-4\">\n                                                <p style=\"min-width: 120px;\">S\u1ED1 \u0111i\u1EC7n tho\u1EA1i*</p>\n                                                <input type=\"text\" class=\"form-control checkValidate\" id=\"phoneNumber\" placeholder=\"+84 xxx xxx xxx\" style=\"width:420px; height:30px;\"> \n                                            </div>\n                                            <div class=\"flex mt-4\">\n                                                <p style=\"min-width: 120px;\">Email</p>\n                                                <input type=\"text\" class=\"form-control checkValidate\" id=\"email\" placeholder=\"abc@xyz.com\" style=\"width:420px; height:30px;\">\n                                            </div>\n                                            <div><p class=\"errorEmail text-red-500 text-sm font-semibold mt-1\" style=\"margin-left: 120px\"></p></div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-span-2 \">\n                                        <div class=\"\">\n                                            <div class=\"border-t border-l border-r pt-1 px-3\">\n                                                <h3 class=\"text-lg pb-1 font-semibold\">2. Ghi ch\u00FA cho \u0111\u01A1n h\u00E0ng</h3>\n                                            </div>\n                                            <div class=\"p-2 border\">\n                                                <textarea name=\"\" id=\"note\" rows=\"3\" class=\"w-full form-control checkValidate\"></textarea>\n                                            </div>\n                                        </div>\n                                        <div class=\"mt-4 \">\n                                            <div class=\"border-t border-l border-r pt-1 px-3\">\n                                                <h3 class=\"text-lg pb-1 font-semibold\">3. Ch\u1ECDn ph\u01B0\u01A1ng th\u1EE9c thanh to\u00E1n</h3>\n                                            </div>\n                                            <div class=\"p-3 border\">\n                                                <form class=\"text-sm\" id=\"form\">\n                                                    <div><input name=\"checkPay\" type=\"radio\"> Thanh to\u00E1n t\u1EA1i c\u1EEDa h\u00E0ng</div>\n                                                    <div class=\"mt-1\"><input name=\"checkPay\" type=\"radio\" checked> Thanh to\u00E1n khi nh\u1EADn h\u00E0ng (COD)</div>\n                                                    <div class=\"mt-1\"><input name=\"checkPay\" type=\"radio\" id=\"radio3\" disabled> Thanh to\u00E1n tr\u1EF1c tuy\u1EBFn b\u1EB1ng th\u1EBB ATM, IB, QR Code </div>\n                                                    <div class=\"mt-1\"><input name=\"checkPay\" type=\"radio\" id=\"radio4\" disabled> Thanh to\u00E1n tr\u1EA3 g\u00F3p online</div>\n                                                </form>\n                                            </div>\n                                        </div>\n                                        <div class=\"text-center mt-3\">\n                                            <input type=\"submit\" class=\"btn btn-primary py-2\" value=\"G\u1EECI \u0110\u01A0N H\u00C0NG\">\n                                        </div>\n                                    </div>\n                                </form>\n                            </div>\n                        </div>\n            </div>\n            " + footer.render() + "\n        "];
            });
        });
    };
    ShopCartPage.prototype.afterRender = function () {
        return __awaiter(this, void 0, void 0, function () {
            function totalPrices() {
                if (listProductsOnCart.length == 1) {
                    cart_cost.innerHTML = Number(cart_quantity.value) * Number(cart_price.innerHTML);
                    cart_cost_show.innerHTML = "" + prices(Number(cart_quantity.value) * Number(cart_price.innerHTML));
                }
                else {
                    for (var i = 0; i < cart_cost.length; i++) {
                        cart_cost[i].innerHTML = Number(cart_quantity[i].value) * Number(cart_price[i].innerHTML);
                        cart_cost_show[i].innerHTML = "" + prices(Number(cart_quantity[i].value) * Number(cart_price[i].innerHTML));
                    }
                }
                var totalPrice = 0;
                if (listProductsOnCart.length == 1) {
                    totalPrice = Number(cart_cost.innerHTML);
                    var totalPrices_1 = String(totalPrice);
                    localStorage.setItem("totalPrice", totalPrices_1);
                }
                else {
                    for (var i = 0; i < cart_cost.length; i++) {
                        totalPrice += Number(cart_cost[i].innerHTML);
                        var totalPrices_2 = String(totalPrice);
                        localStorage.setItem("totalPrice", totalPrices_2);
                    }
                }
                $$("#totalCost").innerHTML = "" + prices(totalPrice);
                var del_btns = document.querySelectorAll(".btn-remove");
                del_btns.forEach(function (btn) {
                    var del_id = btn.dataset.id;
                    btn.addEventListener("click", function () {
                        var confirmDelete = confirm("Bạn có chắc chắn muốn xoá sản phẩm này khỏi giỏ hàng?");
                        if (confirmDelete) {
                            for (var i = 0; i < listProductsOnCart.length; i++) {
                                if (listProductsOnCart[i].id == del_id) {
                                    cartNumbers -= listProductsOnCart[i].quantity;
                                    console.log(listProductsOnCart);
                                    listProductsOnCart.splice(i, 1);
                                    console.log(listProductsOnCart);
                                    var setCartNumber = String(cartNumbers);
                                    localStorage.setItem("cartNumber", setCartNumber);
                                    localStorage.setItem("cart", JSON.stringify(listProductsOnCart));
                                    // reRender(listShopCart, '#list_cart');
                                    onLoadCartNumber();
                                    if (listProductsOnCart.length === 0) {
                                        localStorage.removeItem("cart");
                                        localStorage.removeItem("cartNumber");
                                        localStorage.removeItem("totalPrice");
                                        onLoadCartNumber();
                                        // reRender(listShopCart, '#list_cart');
                                        $$("#oderPage").style.display = "none";
                                    }
                                }
                            }
                        }
                        location.reload();
                    });
                });
                $$("#removeCart").addEventListener("click", function () {
                    var confirmDeleteCart = confirm("Bạn có chắc chắn muốn xoá giỏ hàng?");
                    if (confirmDeleteCart) {
                        localStorage.removeItem("cart");
                        localStorage.removeItem("cartNumber");
                        localStorage.removeItem("totalPrice");
                        // reRender(listShopCart, "#list_cart");
                        onLoadCartNumber();
                        location.reload();
                    }
                });
                $$("#btn_order").addEventListener("click", function () {
                    $$("#oderPage").classList.toggle("hidden");
                });
            }
            function Minus() {
                var btn_minus = $$(".btn_minus");
                console.log(btn_minus);
                if (btn_minus.length > 1) {
                    btn_minus.forEach(function (btn_minus) {
                        var minus_id = btn_minus.dataset.id;
                        btn_minus.addEventListener("click", function () {
                            for (var i = 0; i < listProductsOnCart.length; i++) {
                                if (listProductsOnCart[i].id == minus_id) {
                                    if (listProductsOnCart[i].quantity > 1) {
                                        listProductsOnCart[i].quantity--;
                                        cartNumbers--;
                                    }
                                    else {
                                        listProductsOnCart[i].quantity = 1;
                                    }
                                    console.log(listProductsOnCart[i]);
                                    var setCartNumber = String(cartNumbers);
                                    localStorage.setItem("cartNumber", setCartNumber);
                                    localStorage.setItem("cart", JSON.stringify(listProductsOnCart));
                                    // reRender(listShopCart, "#list_cart");
                                    location.reload();
                                }
                            }
                        });
                    });
                }
                else {
                    var minus_id_1 = btn_minus.dataset.id;
                    btn_minus.addEventListener("click", function () {
                        for (var i = 0; i < listProductsOnCart.length; i++) {
                            if (listProductsOnCart[i].id == minus_id_1) {
                                if (listProductsOnCart[i].quantity > 1) {
                                    listProductsOnCart[i].quantity--;
                                    cartNumbers--;
                                }
                                else {
                                    listProductsOnCart[i].quantity = 1;
                                }
                                console.log(listProductsOnCart[i]);
                                var setCartNumber = String(cartNumbers);
                                localStorage.setItem("cartNumber", setCartNumber);
                                localStorage.setItem("cart", JSON.stringify(listProductsOnCart));
                                // reRender(listShopCart, "#list_cart");
                                location.reload();
                            }
                        }
                    });
                }
            }
            function Plus() {
                var btn_plus = $$(".btn_plus");
                if (btn_plus.length > 1) {
                    btn_plus.forEach(function (btn_plus) {
                        var minus_id = btn_plus.dataset.id;
                        btn_plus.addEventListener("click", function () {
                            for (var i = 0; i < listProductsOnCart.length; i++) {
                                if (listProductsOnCart[i].id == minus_id) {
                                    listProductsOnCart[i].quantity++;
                                    cartNumbers++;
                                    console.log(listProductsOnCart[i]);
                                    var setCartNumber = String(cartNumbers);
                                    localStorage.setItem("cartNumber", setCartNumber);
                                    localStorage.setItem("cart", JSON.stringify(listProductsOnCart));
                                    // reRender(listShopCart, "#list_cart");
                                    location.reload();
                                }
                            }
                        });
                    });
                }
                else {
                    var minus_id_2 = btn_plus.dataset.id;
                    btn_plus.addEventListener("click", function () {
                        for (var i = 0; i < listProductsOnCart.length; i++) {
                            if (listProductsOnCart[i].id == minus_id_2) {
                                listProductsOnCart[i].quantity++;
                                cartNumbers++;
                                console.log(listProductsOnCart[i]);
                                var setCartNumber = String(cartNumbers);
                                localStorage.setItem("cartNumber", setCartNumber);
                                localStorage.setItem("cart", JSON.stringify(listProductsOnCart));
                                // reRender(listShopCart, "#list_cart");
                                location.reload();
                            }
                        }
                    });
                }
            }
            var ProductOnCart, listProductsOnCart, isCartProduct, cart_quantity, cart_cost, cart_cost_show, cart_price, cartNumber, cartNumbers, i, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        productSearch();
                        onLoadCartNumber();
                        ProductOnCart = localStorage.getItem("cart");
                        listProductsOnCart = JSON.parse(ProductOnCart);
                        console.log(listProductsOnCart);
                        isCartProduct = function () {
                            if (listProductsOnCart == null) {
                                return "\n                    <div class=\"text-center text-4xl font-semibold pt-32 pb-4\">B\u1EA1n ch\u01B0a th\u00EAm s\u1EA3n ph\u1EA9m n\u00E0o v\u00E0o gi\u1ECF h\u00E0ng <i class=\"far fa-frown\"></i></div>\n                    <div class=\"text-center mb-32\"><a href=\"/\" class=\"btn btn-primary\">Mua ngay</a></div>\n                ";
                            }
                            else {
                                var sessionUser = function () {
                                    if (isAuthenticated() == false) {
                                        return "\n                            <a href=\"/#/signin\" id=\"alertOder\" class=\"btn btn-danger text-white\">\u0110\u0103ng nh\u1EADp \u0111\u1EC3 \u0111\u1EB7t h\u00E0ng</a>\n                        ";
                                    }
                                    else {
                                        return "\n                            <button id=\"btn_order\" class=\"btn btn-primary\">\u0110\u1EB7t h\u00E0ng</button>\n                        ";
                                    }
                                };
                                var result = listProductsOnCart
                                    .map(function (item, index) {
                                    return "\n                        <tr class=\"text-center\">\n                            <td class=\"border border-gray-300\">" + (index + 1) + "</td>\n                            <td class=\"border border-gray-300 flex\"><img src=\"" + item.image + "\" alt=\"\" width=\"70\">\n                                <p class=\"px-2\">" + item.name + "</p>\n                            </td>   \n                            <td class=\"border border-gray-300\"><span class=\"cart_price_show\">" + prices(Number(item.price)) + "</span><span class=\"cart_price hidden\">" + Number(item.price) + "</span></td>\n                            <td class=\"border border-gray-300\">\n                                <button class=\"text-sm px-1 border border-gray-600 rounded-lg px-2 text-white btn btn-primary btn_minus\" data-id=\"" + item.id + "\">-</button>\n                                <input type=\"number\" class=\"w-16 pl-4 border border-gray-200 rounded-md cart_quantity\" disabled  value=\"" + item.quantity + "\" />\n                                <button class=\"text-sm px-1 border border-gray-600 rounded-lg px-2 text-white btn btn-primary btn_plus\" data-id=\"" + item.id + "\">+</button>\n                            </td>\n                            <td class=\"border border-gray-300\"><span class=\"cart_cost_show\">" + prices(Number(item.price) * Number(item.quantity)).replace("VND", "Đ") + "</span><span class=\"cart_cost hidden \">" + Number(item.price) * Number(item.quantity) + "</span></td>\n                            <td class=\"border border-gray-300\"><div><button class=\"text-sm px-1 border border-gray-600 rounded-lg bg-red-500 hover:bg-red-700 text-white btn btn-danger btn-remove\" data-id=\"" + item.id + "\"><i class=\"px-1 fas fa-trash-alt\"></i></button></div></td>\n                        </tr>\n                    ";
                                })
                                    .join("");
                                return "\n                    <div class=\"text-right mb-2\"><button id=\"removeCart\" class=\"btn btn-danger\">Xo\u00E1 gi\u1ECF h\u00E0ng</button></div>\n                    <table>\n                        <thead>\n                            <tr class=\"text-center\">\n                                <th class=\"border border-gray-300\" style=\"width: 50px\">STT</td>\n                                <th class=\"border border-gray-300\" style=\"width: 500px\">T\u00EAn s\u1EA3n ph\u1EA9m</td>\n                                <th class=\"border border-gray-300\" style=\"width: 150px\">\u0110\u01A1n gi\u00E1</td>\n                                <th class=\"border border-gray-300\" style=\"width: 150px\">S\u1ED1 l\u01B0\u1EE3ng</td>\n                                <th class=\"border border-gray-300\" style=\"width: 150px\">Th\u00E0nh ti\u1EC1n</td>\n                                <th class=\"border border-gray-300\" style=\"width: 50px\">Xo\u00E1</td>\n                            </tr>\n                        </thead>\n                        <tbody id=\"showListCart\">\n                            " + result + "\n                            <tr>\n                                <td colspan=\"2\" class=\"border border-gray-400\"></td>\n                                <td colspan=\"4\" class=\"border border-gray-400\">\n                                    <p class=\"text-red-500 font-bold my-3 ml-3 text-lg\">T\u1ED5ng ti\u1EC1n: <span id=\"totalCost\"></span></p> \n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                    <div class=\"flex justify-end mt-4 pb-4\">\n                        <a href=\"/#/\"><button class=\"btn btn-primary mr-4\">Ti\u1EBFp t\u1EE5c mua h\u00E0ng</button></a>\n                        " + sessionUser() + "\n                    </div>\n                ";
                            }
                        };
                        document.querySelector("#list_cart").innerHTML = isCartProduct();
                        cart_quantity = $$(".cart_quantity");
                        cart_cost = $$(".cart_cost");
                        cart_cost_show = $$(".cart_cost_show");
                        cart_price = $$(".cart_price");
                        cartNumber = localStorage.getItem("cartNumber");
                        cartNumbers = Number(cartNumber);
                        if (listProductsOnCart.length == 1) {
                            cart_quantity.addEventListener("change", function () {
                                totalPrices();
                            });
                        }
                        else {
                            for (i = 0; i < cart_price.length; i++) {
                                cart_quantity[i].addEventListener("change", function () {
                                    totalPrices();
                                });
                            }
                        }
                        totalPrices();
                        Minus();
                        Plus();
                        $$("#form_addOder").addEventListener("submit", function (e) {
                            e.preventDefault();
                            var sumCheck = 0;
                            var checkValidate = $$(".checkValidate");
                            for (var i = 0; i < checkValidate.length; i++) {
                                if (checkValidate[i].value.trim() == "") {
                                    sumCheck += 1;
                                    checkValidate[i].style.border = "2px solid red";
                                }
                                else {
                                    checkValidate[i].style.border = "none";
                                }
                            }
                            var checkEmail = 0;
                            var checkValidateEmail = $$("#email");
                            console.log(checkValidateEmail);
                            var errorEmail = $$(".errorEmail");
                            var validateEmail = /^[A-Za-z0-9_.]{4,32}@([a-zA-Z0-9]{2,12})(.[a-zA-Z]{2,12})+$/;
                            if (!validateEmail.test(checkValidateEmail.value)) {
                                checkEmail += 1;
                            }
                            if (sumCheck === 0) {
                                if (checkEmail === 0) {
                                    var totalPriceStorage = localStorage.getItem("totalPrice");
                                    var totalPrice = Number(totalPriceStorage); //
                                    var cartStorage = JSON.parse(localStorage.getItem("cart"));
                                    var userId = isAuthenticated().id;
                                    var name_1 = $$("#fullname").value;
                                    var address = $$("#address").value;
                                    var phoneNumber = $$("#phoneNumber").value;
                                    var email = $$("#email").value;
                                    var note = $$("#note").value;
                                    var cart = cartStorage;
                                    var cartNumber_1 = cartNumbers;
                                    var create_at = window.moment(new Date()).format("DD-MM-YYYY");
                                    var status_1 = "CHƯA DUYỆT";
                                    var order = new Order(0, userId, name_1, email, address, phoneNumber, note, totalPrice, cartNumber_1, cart, status_1, create_at);
                                    console.log(order);
                                    OrderApi.add(order);
                                    alert("Thêm đơn hàng thành công!");
                                }
                                else {
                                    errorEmail.innerHTML = "Email sai định dạng!";
                                }
                            }
                            else {
                                alert("Hãy điền đầy đủ thông tin!");
                            }
                        });
                        _a = "";
                        return [4 /*yield*/, header.afterRender()];
                    case 1: return [2 /*return*/, _a + (_b.sent())];
                }
            });
        });
    };
    return ShopCartPage;
}(Component));
export { ShopCartPage };
