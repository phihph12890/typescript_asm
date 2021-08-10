import { Component } from "../Component.js";
import { header } from "../clientComponent/header.js";
import { footer } from "../clientComponent/footer.js";
import { ProductApi } from "../../api/ProductApi.js";
import { OrderApi } from "../../api/OrderApi.js";
import { prices, $$, productSearch, onLoadCartNumber, isAuthenticated } from "../../ultis.js";
import { Order } from "../../Models/Order.js";
declare const window: any;

export class ShopCartPage extends Component {
    public async template() {
        return `
            ${header.render()}
            <div class="div-content bg-gray-100 pb-8">
                <div class="content1 mx-auto" style="max-width: 1200px;">
                    <div class="flex justify-between items-center py-2">
                        <h5 class="py-3"><a href="/">Trang chủ</a> <i class="fas fa-angle-double-right text-xs px-1"></i> <a href="/#/shopcart">Giỏ hàng<i class="fas fa-shopping-cart"></i></a></h5>
                    </div>
                    <div id="list_cart">
                    </div>
                </div>
            </div>
            <div class="bg-gray-100 hidden" id="oderPage">
                        <div class="mx-auto" style="max-width: 1230px;">
                            <div class=" px-3 pb-5">
                                <form class="grid grid-cols-5 gap-3" id="form_addOder">
                                    <div class="col-span-3 border">
                                        <div class="border-b pt-1 px-3">
                                            <h3 class="text-lg pb-1 font-semibold">1. Khách hàng khai báo thông tin</h3>
                                        </div>
                                        <div class="ml-5">
                                            <h4 class="text-base mt-4 font-semibold">Thông tin người mua</h4>
                                            <p class="text-sm mt-1">Những phần đánh dấu * là bắt buộc</p>
                                            <div class="flex  mt-4">
                                            <p style="min-width: 120px;">Họ tên *</p>
                                            <input type="text" class="form-control checkValidate" id="fullname" placeholder="Nguyễn Văn A" style="width:420px; height:30px;"> 
                                            </div>
                                            <div class="flex mt-4">
                                                <p style="min-width: 120px;">Địa chỉ*</p>
                                                <input type="text" class="form-control checkValidate" id="address" placeholder="Số 165 - Cầu Giấy - Quận Cầu Giấy - Hà Nội" style="width:420px; height:30px;"> 
                                            </div>
                                            <div class="flex mt-4">
                                                <p style="min-width: 120px;">Số điện thoại*</p>
                                                <input type="text" class="form-control checkValidate" id="phoneNumber" placeholder="+84 xxx xxx xxx" style="width:420px; height:30px;"> 
                                            </div>
                                            <div class="flex mt-4">
                                                <p style="min-width: 120px;">Email</p>
                                                <input type="text" class="form-control checkValidate" id="email" placeholder="abc@xyz.com" style="width:420px; height:30px;">
                                            </div>
                                            <div><p class="errorEmail text-red-500 text-sm font-semibold mt-1" style="margin-left: 120px"></p></div>
                                        </div>
                                    </div>
                                    <div class="col-span-2 ">
                                        <div class="">
                                            <div class="border-t border-l border-r pt-1 px-3">
                                                <h3 class="text-lg pb-1 font-semibold">2. Ghi chú cho đơn hàng</h3>
                                            </div>
                                            <div class="p-2 border">
                                                <textarea name="" id="note" rows="3" class="w-full form-control checkValidate"></textarea>
                                            </div>
                                        </div>
                                        <div class="mt-4 ">
                                            <div class="border-t border-l border-r pt-1 px-3">
                                                <h3 class="text-lg pb-1 font-semibold">3. Chọn phương thức thanh toán</h3>
                                            </div>
                                            <div class="p-3 border">
                                                <form class="text-sm" id="form">
                                                    <div><input name="checkPay" type="radio"> Thanh toán tại cửa hàng</div>
                                                    <div class="mt-1"><input name="checkPay" type="radio" checked> Thanh toán khi nhận hàng (COD)</div>
                                                    <div class="mt-1"><input name="checkPay" type="radio" id="radio3" disabled> Thanh toán trực tuyến bằng thẻ ATM, IB, QR Code </div>
                                                    <div class="mt-1"><input name="checkPay" type="radio" id="radio4" disabled> Thanh toán trả góp online</div>
                                                </form>
                                            </div>
                                        </div>
                                        <div class="text-center mt-3">
                                            <input type="submit" class="btn btn-primary py-2" value="GỬI ĐƠN HÀNG">
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
            </div>
            ${footer.render()}
        `;
    }
    public async afterRender() {
        productSearch();
        onLoadCartNumber();
        let ProductOnCart = localStorage.getItem("cart");
        let listProductsOnCart = JSON.parse(ProductOnCart!);
        console.log(listProductsOnCart);

        const isCartProduct = () => {
            if (listProductsOnCart == null) {
                return `
                    <div class="text-center text-4xl font-semibold pt-32 pb-4">Bạn chưa thêm sản phẩm nào vào giỏ hàng <i class="far fa-frown"></i></div>
                    <div class="text-center mb-32"><a href="/" class="btn btn-primary">Mua ngay</a></div>
                `;
            } else {
                const sessionUser = () => {
                    if (isAuthenticated() == false) {
                        return `
                            <a href="/#/signin" id="alertOder" class="btn btn-danger text-white">Đăng nhập để đặt hàng</a>
                        `;
                    } else {
                        return `
                            <button id="btn_order" class="btn btn-primary">Đặt hàng</button>
                        `;
                    }
                };
                let result = listProductsOnCart!
                    .map((item: any, index: number) => {
                        return `
                        <tr class="text-center">
                            <td class="border border-gray-300">${index + 1}</td>
                            <td class="border border-gray-300 flex"><img src="${item.image}" alt="" width="70">
                                <p class="px-2">${item.name}</p>
                            </td>   
                            <td class="border border-gray-300"><span class="cart_price_show">${prices(Number(item.price))}</span><span class="cart_price hidden">${Number(item.price)}</span></td>
                            <td class="border border-gray-300">
                                <button class="text-sm px-1 border border-gray-600 rounded-lg px-2 text-white btn btn-primary btn_minus" data-id="${item.id}">-</button>
                                <input type="number" class="w-16 pl-4 border border-gray-200 rounded-md cart_quantity" disabled  value="${item.quantity}" />
                                <button class="text-sm px-1 border border-gray-600 rounded-lg px-2 text-white btn btn-primary btn_plus" data-id="${item.id}">+</button>
                            </td>
                            <td class="border border-gray-300"><span class="cart_cost_show">${prices(Number(item.price) * Number(item.quantity)).replace(
                                "VND",
                                "Đ"
                            )}</span><span class="cart_cost hidden ">${Number(item.price) * Number(item.quantity)}</span></td>
                            <td class="border border-gray-300"><div><button class="text-sm px-1 border border-gray-600 rounded-lg bg-red-500 hover:bg-red-700 text-white btn btn-danger btn-remove" data-id="${
                                item.id
                            }"><i class="px-1 fas fa-trash-alt"></i></button></div></td>
                        </tr>
                    `;
                    })
                    .join("");
                return `
                    <div class="text-right mb-2"><button id="removeCart" class="btn btn-danger">Xoá giỏ hàng</button></div>
                    <table>
                        <thead>
                            <tr class="text-center">
                                <th class="border border-gray-300" style="width: 50px">STT</td>
                                <th class="border border-gray-300" style="width: 500px">Tên sản phẩm</td>
                                <th class="border border-gray-300" style="width: 150px">Đơn giá</td>
                                <th class="border border-gray-300" style="width: 150px">Số lượng</td>
                                <th class="border border-gray-300" style="width: 150px">Thành tiền</td>
                                <th class="border border-gray-300" style="width: 50px">Xoá</td>
                            </tr>
                        </thead>
                        <tbody id="showListCart">
                            ${result}
                            <tr>
                                <td colspan="2" class="border border-gray-400"></td>
                                <td colspan="4" class="border border-gray-400">
                                    <p class="text-red-500 font-bold my-3 ml-3 text-lg">Tổng tiền: <span id="totalCost"></span></p> 
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="flex justify-end mt-4 pb-4">
                        <a href="/#/"><button class="btn btn-primary mr-4">Tiếp tục mua hàng</button></a>
                        ${sessionUser()}
                    </div>
                `;
            }
        };
        document.querySelector("#list_cart")!.innerHTML = isCartProduct();

        var cart_quantity = $$(".cart_quantity");
        var cart_cost = $$(".cart_cost");
        var cart_cost_show = $$(".cart_cost_show");
        var cart_price = $$(".cart_price");
        let cartNumber = localStorage.getItem("cartNumber");
        let cartNumbers = Number(cartNumber);

        if (listProductsOnCart.length == 1) {
            cart_quantity.addEventListener("change", function () {
                totalPrices();
            });
        } else {
            for (let i = 0; i < cart_price.length; i++) {
                cart_quantity[i].addEventListener("change", function () {
                    totalPrices();
                });
            }
        }
        totalPrices();

        function totalPrices() {
            if (listProductsOnCart.length == 1) {
                cart_cost.innerHTML = Number(cart_quantity.value) * Number(cart_price.innerHTML);
                cart_cost_show.innerHTML = `${prices(Number(cart_quantity.value) * Number(cart_price.innerHTML))}`;
            } else {
                for (let i = 0; i < cart_cost.length; i++) {
                    cart_cost[i].innerHTML = Number(cart_quantity[i].value) * Number(cart_price[i].innerHTML);
                    cart_cost_show[i].innerHTML = `${prices(Number(cart_quantity[i].value) * Number(cart_price[i].innerHTML))}`;
                }
            }
            let totalPrice = 0;
            if (listProductsOnCart.length == 1) {
                totalPrice = Number(cart_cost.innerHTML);
                let totalPrices = String(totalPrice);
                localStorage.setItem("totalPrice", totalPrices);
            } else {
                for (let i = 0; i < cart_cost.length; i++) {
                    totalPrice += Number(cart_cost[i].innerHTML);
                    let totalPrices = String(totalPrice);
                    localStorage.setItem("totalPrice", totalPrices);
                }
            }
            $$("#totalCost").innerHTML = `${prices(totalPrice)}`;

            const del_btns: NodeListOf<HTMLButtonElement> = document.querySelectorAll(".btn-remove");
            del_btns.forEach((btn) => {
                const del_id = btn.dataset.id;
                btn.addEventListener("click", function () {
                    let confirmDelete = confirm("Bạn có chắc chắn muốn xoá sản phẩm này khỏi giỏ hàng?");
                    if (confirmDelete) {
                        for (let i = 0; i < listProductsOnCart.length; i++) {
                            if (listProductsOnCart[i].id == del_id) {
                                cartNumbers -= listProductsOnCart[i].quantity;
                                console.log(listProductsOnCart);
                                listProductsOnCart.splice(i, 1);
                                console.log(listProductsOnCart);
                                let setCartNumber = String(cartNumbers);
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
                let confirmDeleteCart = confirm("Bạn có chắc chắn muốn xoá giỏ hàng?");
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

        Minus();
        function Minus() {
            const btn_minus = $$(".btn_minus");
            console.log(btn_minus);
            if (btn_minus.length > 1) {
                btn_minus.forEach((btn_minus: any) => {
                    const minus_id = btn_minus.dataset.id;
                    btn_minus.addEventListener("click", function () {
                        for (let i = 0; i < listProductsOnCart.length; i++) {
                            if (listProductsOnCart[i].id == minus_id) {
                                if (listProductsOnCart[i].quantity > 1) {
                                    listProductsOnCart[i].quantity--;
                                    cartNumbers--;
                                } else {
                                    listProductsOnCart[i].quantity = 1;
                                }
                                console.log(listProductsOnCart[i]);
                                let setCartNumber = String(cartNumbers);
                                localStorage.setItem("cartNumber", setCartNumber);
                                localStorage.setItem("cart", JSON.stringify(listProductsOnCart));
                                // reRender(listShopCart, "#list_cart");
                                location.reload();
                            }
                        }
                    });
                });
            } else {
                const minus_id = btn_minus.dataset.id;
                btn_minus.addEventListener("click", function () {
                    for (let i = 0; i < listProductsOnCart.length; i++) {
                        if (listProductsOnCart[i].id == minus_id) {
                            if (listProductsOnCart[i].quantity > 1) {
                                listProductsOnCart[i].quantity--;
                                cartNumbers--;
                            } else {
                                listProductsOnCart[i].quantity = 1;
                            }
                            console.log(listProductsOnCart[i]);
                            let setCartNumber = String(cartNumbers);
                            localStorage.setItem("cartNumber", setCartNumber);
                            localStorage.setItem("cart", JSON.stringify(listProductsOnCart));
                            // reRender(listShopCart, "#list_cart");
                            location.reload();
                        }
                    }
                });
            }
        }
        Plus();
        function Plus() {
            const btn_plus = $$(".btn_plus");
            if (btn_plus.length > 1) {
                btn_plus.forEach((btn_plus: any) => {
                    const minus_id = btn_plus.dataset.id;
                    btn_plus.addEventListener("click", function () {
                        for (let i = 0; i < listProductsOnCart.length; i++) {
                            if (listProductsOnCart[i].id == minus_id) {
                                listProductsOnCart[i].quantity++;
                                cartNumbers++;
                                console.log(listProductsOnCart[i]);
                                let setCartNumber = String(cartNumbers);
                                localStorage.setItem("cartNumber", setCartNumber);
                                localStorage.setItem("cart", JSON.stringify(listProductsOnCart));
                                // reRender(listShopCart, "#list_cart");
                                location.reload();
                            }
                        }
                    });
                });
            } else {
                const minus_id = btn_plus.dataset.id;
                btn_plus.addEventListener("click", function () {
                    for (let i = 0; i < listProductsOnCart.length; i++) {
                        if (listProductsOnCart[i].id == minus_id) {
                            listProductsOnCart[i].quantity++;
                            cartNumbers++;
                            console.log(listProductsOnCart[i]);
                            let setCartNumber = String(cartNumbers);
                            localStorage.setItem("cartNumber", setCartNumber);
                            localStorage.setItem("cart", JSON.stringify(listProductsOnCart));
                            // reRender(listShopCart, "#list_cart");
                            location.reload();
                        }
                    }
                });
            }
        }

        $$("#form_addOder").addEventListener("submit", (e: any) => {
            e.preventDefault();

            var sumCheck = 0;
            var checkValidate = $$(".checkValidate");
            for (let i = 0; i < checkValidate.length; i++) {
                if (checkValidate[i].value.trim() == "") {
                    sumCheck += 1;
                    checkValidate[i].style.border = "2px solid red";
                } else {
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
                    var totalPriceStorage = localStorage.getItem("totalPrice")!;
                    let totalPrice: number = Number(totalPriceStorage); //
                    let cartStorage = JSON.parse(localStorage.getItem("cart")!);

                    const userId = isAuthenticated().id;
                    const name = $$("#fullname").value;
                    const address = $$("#address").value;
                    const phoneNumber = $$("#phoneNumber").value;
                    const email = $$("#email").value;
                    const note = $$("#note").value;
                    const cart = cartStorage;
                    const cartNumber = cartNumbers;
                    const create_at = window.moment(new Date()).format("DD-MM-YYYY");
                    const status = "CHƯA DUYỆT";

                    const order: Order = new Order(0, userId, name, email, address, phoneNumber, note, totalPrice, cartNumber, cart,status, create_at);
                    console.log(order);
                    OrderApi.add(order);
                    alert("Thêm đơn hàng thành công!");
                } else {
                    errorEmail.innerHTML = "Email sai định dạng!";
                }
            } else {
                alert("Hãy điền đầy đủ thông tin!");
            }
        });
        return `${await header.afterRender()}`;
    }
}
