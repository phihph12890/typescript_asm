import { Component } from "../Component.js";
import { Order } from "../../Models/Order.js";
import { OrderApi } from "../../api/OrderApi.js";
import { footer } from "../adminComponent/footer.js";
import { header } from "../adminComponent/header.js";
import { sidebar } from "../adminComponent/sidebar.js";
import { prices, $$ } from "../../ultis.js";

export class OrderIndex extends Component {
    public constructor() {
        super();
    }

    public template(): string {
        return `
        <div class="wrapper">
        <!-- Navbar -->
            ${header.render()}
            ${sidebar.render()}
            <!-- Content Wrapper. Contains page content -->
            <div id="root" class="content-wrapper">
            <div class=" pt-5 text-center">
                <h2 class="text-center font-bold text-xl mb-3">QUẢN TRỊ ĐƠN HÀNG</h2>
                <table class="table table-hover mt-5 text-center mx-auto" style="max-width:1200px;">
                    <thead>
                        <tr>
                            <th scope="col">STT</th>
                            <th scope="col">Họ Và Tên</th>
                            <th scope="col">Số điện thoại</th>
                            <th scope="col">Tổng tiền</th>
                            <th scope="col">Ngày đặt hàng</th>
                            <th scope="col">Trạng Thái</th>
                            <th colspan="2" style="width: 100px">Thao tác</th>
                        </tr>
                    </thead>
                    <tbody id="tbl_products"></tbody>
                </table>
            </div>
            </div>
            ${footer.render()}
        </div>
        `;
    }
    public async afterRender() {
        const response = await OrderApi.list();
        const data = await response.json();
        console.log(data);

        const tbodyContents: string = data
            .map((value: any, key: number) => {
                return `
                    <tr>
                        <td>${key + 1}</td>
                        <td>${value.name}</td>
                        <td>${value.phoneNumber}</td>
                        <td class="text-red-500 font-semibold">${prices(Number(value.totalPrice)).replace("VND", "Đ")}</td>
                        <td>${value.create_at}</td>
                        <td>
                            <span>${value.status}</span> <span class="checkStatus"></span>
                            <a href="/#/orders/edit/${value.id}">
                            <button class="text-sm px-2 border border-gray-600 rounded-lg text-white btn btn-dark" data-id="${value.id}">
                                <i class="fas fa-edit"></i>
                            </button></a>
                        </td>
                        
                        <td>
                        <a href = "/#/orders/detailadmin/${value.id}">
                            <button class="text-sm px-2 border border-gray-600 rounded-lg text-white btn btn-primary btn-in4" data-id="${value.id}">
                                <i class="fas fa-info-circle"></i>
                            </button>
                        </a>
                    </td>
                    <td><div><button class="text-sm px-1 border border-gray-600 rounded-lg text-white btn btn-danger btn-remove" data-id="${
                        value.id
                    }"><i class="px-1 fas fa-trash-alt"></i></button></div></td>
                    </tr>
                `;
            })
            .join("");
        document.querySelector("#tbl_products")!.innerHTML = tbodyContents;

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

        const listBtnDel: NodeListOf<HTMLButtonElement> = $$(".btn-danger");
        console.log(listBtnDel);
        if (listBtnDel.length > 1) {
            listBtnDel.forEach((btn) => {
                const id = btn.dataset.id;
                console.log(id);
                btn.addEventListener("click", async (e: any) => {
                    e.preventDefault();
                    const responseOrder = await OrderApi.read(id!);
                    const order = await responseOrder.json();
                    console.log(order);
                    if (order.status == "ĐÃ HOÀN THÀNH" || order.status == "ĐÃ DUYỆT") {
                        alert("Không thể xoá đơn hàng ĐÃ DUYỆT hoặc ĐÃ HOÀN THÀNH!");
                    } else {
                        const Confirm = confirm("Bạn có thật sự muốn xoá?");
                        if (Confirm) {
                            await OrderApi.remove(id);
                            window.location.hash = "#/orders/index";
                        }
                    }
                });
            });
        } else {
            $$(".btn-danger").addEventListener("click", async (e: any) => {
                e.preventDefault();
                const id = $$(".btn-danger").dataset.id;
                const responseOrder = await OrderApi.read(id!);
                const order = await responseOrder.json();
                console.log(order);
                if (order.status == "ĐÃ HOÀN THÀNH" || order.status == "ĐÃ DUYỆT") {
                    alert("Không thể xoá đơn hàng ĐÃ DUYỆT hoặc ĐÃ HOÀN THÀNH!");
                } else {
                    const Confirm = confirm("Bạn có thật sự muốn xoá?");
                    if (Confirm) {
                        await OrderApi.remove(id);
                        window.location.hash = "#/orders/index";
                    }
                }
            });
        }
        const btn_edit = $$(".btn-dark");
        console.log(btn_edit);
        if (btn_edit.length > 1) {
            btn_edit.forEach(async (btn_edit: any) => {
                const id = btn_edit.dataset.id;
                const responsetheOrder = await OrderApi.read(id!);
                const theorder = await responsetheOrder.json();
                if (theorder.status == "ĐÃ HOÀN THÀNH") {
                    btn_edit.style.display = "none";
                }
            });
        } else {
            const id = $$(".btn-dark").dataset.id;
            const responsetheOrder = await OrderApi.read(id!);
            const theorder = await responsetheOrder.json();
            if (theorder.status == "ĐÃ HOÀN THÀNH") {
                $$(".btn-dark").style.display = "none";
            }
        }
    }
}
