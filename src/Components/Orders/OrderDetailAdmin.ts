import { Component } from "../Component.js";
import { Order } from "../../Models/Order.js";
import { OrderApi } from "../../api/OrderApi.js";
import { footer } from "../adminComponent/footer.js";
import { header } from "../adminComponent/header.js";
import { sidebar } from "../adminComponent/sidebar.js";
import { prices, $$ } from "../../ultis.js";

export class OrderDetailAdmin extends Component {
    private _id: string | undefined;
    public constructor(id: string | undefined) {
        super();
        this._id = id;
    }

    public template(): string {
        return `
        <div class="wrapper">
        <!-- Navbar -->
            ${header.render()}
            ${sidebar.render()}
            <!-- Content Wrapper. Contains page content -->
            <div class="content-wrapper">
                <div class="py-5">
                    <h2 class="text-center font-bold text-xl">THÔNG TIN ĐƠN HÀNG</h2>
                </div>
                <div class="text-center mx-auto" id="order-in4">
                    <div class="grid grid-cols-7 gap-5" >
                        <div class="col-span-2 text-left" id="personal_in4">
                            
                        </div>
                        <div class="col-span-5 ">
                            <h4 class="text-center text-2xl font-semibold py-2">Thông tin sản phẩm</h4>
                            <table class="mx-auto text-center table table-hover">
                                <thead>
                                    <tr class="text-center">
                                        <th style="width: 50px">STT</td>
                                        <th style="width: 300px">Tên sản phẩm</td>
                                        <th style="width: 150px">Đơn giá</td>
                                        <th style="width: 100px">Số lượng</td>
                                        <th style="width: 150px">Thành tiền</td>
                                    </tr>
                                </thead>
                                <tbody id="product_in4">

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            ${footer.render()}
        </div>
        `;
    }
    public async afterRender() {
        if (typeof this._id != "undefined") {
            const response = await OrderApi.read(this._id);
            const data = await response.json();
            console.log(data);

            const personalIn4 = () => {
                return `
                    <h4 class="text-center text-2xl font-semibold border-b py-2">Thông tin người mua hàng</h4>
                    <div class="px-4 mt-4">
                        <div class="">
                            <p class="mt-3"><span class="font-semibold">Họ và tên:</span> <span>${data.name}</span></p>
                            <p class="mt-3"><span class="font-semibold">Địa chỉ:</span> <span>${data.address}</span></p>
                            <p class="mt-3"><span class="font-semibold">SĐT:</span> <span>${data.phoneNumber}</span></p>
                            <p class="mt-3"><span class="font-semibold">Email:</span> <span>${data.email}</span></p>
                            <p class="mt-3"><span class="font-semibold">Ngày đặt:</span> <span>${data.create_at}</span></p>
                            <p class="mt-3"><span class="font-semibold">Số sản phẩm:</span> <span>${data.cartNumber}</span></p>
                            <p class="mt-3"><span class="font-semibold">Tổng tiền:</span> <span class="font-semibold text-red-500">${prices(data.totalPrice).replace("VND", "Đ")}</span></p>
                            <p class="mt-3"><span class="font-semibold">Trạng thái:</span> <span>${data.status}</span></p>
                            <p class="mt-3"><span class="font-semibold">Ghi chú: </span> ${data.note}</p>
                        </div>
                    </div>
                `;
            };
            document.querySelector("#personal_in4")!.innerHTML = personalIn4();


            const productIn4 = data.cart.map((item: any, index: number) => {
                return `
                    <tr class="text-center">
                        <td>${index + 1}</td>
                        <td class=" grid grid-cols-4">
                            <img class="col-span-1" src="${item.image}" alt="" width="90">
                            <p class="col-span-3">${item.name}</p>
                        </td>   
                        <td>
                            <span class="cart_price_show">${prices(Number(item.price)).replace("VND", "Đ")}</span>
                            <span class="cart_price hidden">${Number(item.price)}</span>
                        </td>
                        <td>${item.quantity}</td>
                        <td>
                            <span class="cart_cost_show text-red-500 font-semibold">${prices(Number(item.price) * Number(item.quantity)).replace("VND", "Đ")}</span>
                            <span class="cart_cost hidden ">${Number(item.price) * Number(item.quantity)}</span>
                        </td>
                    </tr>
                `;
            }).join("");
            document.querySelector("#product_in4")!.innerHTML = productIn4;
        }

        // const listBtnDel: NodeListOf<HTMLButtonElement> = document.querySelectorAll(".btn-danger");
        // console.log(listBtnDel);
        // listBtnDel.forEach((btn) => {
        //     const id = btn.dataset.id;
        //     console.log(id);
        //     btn.addEventListener("click", async (e) => {
        //         e.preventDefault();
        //         const Confirm = confirm("Bạn có thật sự muốn xoá?");
        //         if (Confirm) {
        //             await ProductApi.remove(id);
        //             window.location.hash = "#/products/index";
        //         }
        //     });
        // });
    }
}
