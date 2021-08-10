import { Component } from "../Component.js";
import { categories } from "../clientComponent/categories.js";
import { header } from "../clientComponent/header.js";
import { banner } from "../clientComponent/banner.js";
import { footer } from "../clientComponent/footer.js";
import { ProductApi } from "../../api/ProductApi.js";
import { OrderApi } from "../../api/OrderApi.js";
import { prices, $$, productSearch, onLoadCartNumber, getTotalItemOnCart, addToCart, isAuthenticated } from "../../ultis.js";

export class OrderPage extends Component {
    public constructor() {
        super(); // GỌi tới hàm khởi tạo lớp cha
    }

    public async template() {
        return `
            ${await header.render()}
            <div class="div-content bg-gray-100 pb-8">
                <div class="content1 mx-auto" style="max-width: 1200px;">
                    <div class="">
                        <h5 class="py-3"><a href="">Trang chủ</a> <i class="fas fa-angle-double-right text-xs px-1"></i> <a href="">Đơn hàng đã đặt</a></h5>
                    </div>
                    <div id="list_order">
                        
                    </div>
                </div>
            </div>
            ${footer.render()}
        `;
    }
    public async afterRender() {
        productSearch();
        onLoadCartNumber();

        const userId = isAuthenticated().id;
        const responseOrder = await OrderApi.getByUser(userId);
        const orders = await responseOrder.json();
        console.log("orderssssss", orders);

        const listOrder = () => {
            const result = orders
                .map((item: any, index: number) => {
                    return `
                        <tr class="text-center">
                            <td>${index + 1}</td>
                            <td><span class="px-2">${item.name}</span></td>   
                            <td><span>${item.phoneNumber}</span></td>
                            <td><span>${prices(item.totalPrice).replace("VND", "Đ")}</span></td>
                            <td><span>${item.create_at}</span></td>
                            <td><span>${item.status}</span><span class="checkStatus"></span></td>
                            <td>
                                <a href="/#/orderdetail/${item.id}">
                                    <button class="text-sm px-2 border border-gray-600 rounded-lg text-white btn btn-primary" data-id="${item.id}">
                                        <i class="fas fa-info-circle"></i>
                                    </button>
                                </a>
                            </td>
                            <td><div><button class="text-sm px-1 border border-gray-600 rounded-lg text-white btn btn-danger btn-remove" data-id="${item.id}">Del</button></div></td>
                        </tr>
                    `;
                })
                .join("");
            if (orders.length == 0) {
                return `
                    <div class="text-center text-4xl font-semibold pt-32 pb-4">Bạn chưa có đơn hàng nào <i class="far fa-frown"></i></div>
                    <div class="text-center mb-32"><a href="/" class="btn btn-primary">Mua ngay</a></div>
                `;
            } else {
                return `
                    <div>
                        <table class="table table-hover">
                            <thead>
                                <tr class="text-center">
                                    <th style="width: 50px">STT</td>
                                    <th style="width: 300px">Họ và tên</td>
                                    <th style="width: 175px">Số điện thoại</td>
                                    <th style="width: 175px">Tổng tiền</td>
                                    <th style="width: 170px">Ngày đặt hàng</td>
                                    <th style="width: 200px">Trạng thái</td>
                                    <th colspan="2" style="width: 100px">Tuỳ chọn</td>
                                </tr>
                            </thead>
                            <tbody id="showListOrder">
                                ${result}
                            </tbody>
                        </table>
                    </div>
                `;
            }
        };
        document.querySelector("#list_order")!.innerHTML = listOrder();

        const checkStatus = $$(".checkStatus");
        if (checkStatus.length > 1) {
            for (let i = 0; i < orders.length; i++) {
                if (orders[i].status == "ĐÃ HOÀN THÀNH") {
                    checkStatus[i].innerHTML = ` <i class="text-green-500 text-lg fas fa-check"></i>`;
                } else if (orders[i].status == "ĐÃ DUYỆT") {
                    checkStatus[i].innerHTML = ` <i class=" text-blue-500 text-lg fas fa-smile"></i>`;
                } else {
                    checkStatus[i].innerHTML = ` <i class="text-red-500 text-lg fas fa-frown"></i></i>`;
                }
            }
        } else {
            if (orders[0].status == "ĐÃ HOÀN THÀNH") {
                checkStatus.innerHTML = ` <i class="text-green-500 text-lg fas fa-check"></i>`;
            } else if (orders[0].status == "ĐÃ DUYỆT") {
                checkStatus.innerHTML = ` <i class=" text-blue-500 text-lg fas fa-smile"></i>`;
            } else {
                checkStatus.innerHTML = ` <i class="text-red-500 text-lg fas fa-frown"></i></i>`;
            }
        }



        // if (checkStatus.length < 2) {
        //     if (orders.status == "ĐÃ HOÀN THÀNH") {
        //         checkStatus.innerHTML = ` <i class="text-green-500 text-lg fas fa-check"></i>`;
        //     } else if (orders.status == "ĐÃ DUYỆT") {
        //         checkStatus.innerHTML = ` <i class=" text-blue-500 text-lg fas fa-smile"></i>`;
        //     } else {
        //         checkStatus.innerHTML = ` <i class="text-red-500 text-lg fas fa-frown"></i></i>`;
        //     }
        // } else {
        //     for (let i = 0; i < orders.length; i++) {
        //         if (orders[i].status == "ĐÃ HOÀN THÀNH") {
        //             checkStatus[i].innerHTML = ` <i class="text-green-500 text-lg fas fa-check"></i>`;
        //         } else if (orders[i].status == "ĐÃ DUYỆT") {
        //             checkStatus[i].innerHTML = ` <i class=" text-blue-500 text-lg fas fa-smile"></i>`;
        //         } else {
        //             checkStatus[i].innerHTML = ` <i class="text-red-500 text-lg fas fa-frown"></i></i>`;
        //         }
        //     }
        // }




        const btns: NodeListOf<HTMLButtonElement> = document.querySelectorAll(".btn-remove");
        console.log(btns);
        btns.forEach((btn) => {
            const id = btn.dataset.id;
            btn.addEventListener("click", async () => {
                const responseTheOrder = await OrderApi.read(id!);
                const theOrder = await responseTheOrder.json();
                if (theOrder.status == "ĐÃ DUYỆT" || theOrder.status == "ĐÃ HOÀN THÀNH") {
                    alert("Không thể xoá đơn hàng ĐÃ DUYỆT hoặc ĐÃ HOÀN THÀNH");
                } else {
                    const Confirm = confirm("Bạn có thật sự muốn xoá?");
                    if (Confirm) {
                        await OrderApi.remove(id);
                        location.reload();
                    }
                }
            });
        });

        return `${await header.afterRender()}`;
    }
}
