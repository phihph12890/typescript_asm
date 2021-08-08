import { Component } from "../Component.js";
import { Product } from "../../Models/Product.js";
import { ProductApi } from "../../api/ProductApi.js";
import { footer } from "../adminComponent/footer.js";
import { header } from "../adminComponent/header.js";
import { sidebar } from "../adminComponent/sidebar.js";
import { prices, $$ } from "../../ultis.js";

export class ProductIndex extends Component {
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
            <h2 class="text-center font-bold text-xl mb-3">QUẢN TRỊ SẢN PHẨM</h2>
                <div class="py-3">
                    <a href="#/products/create"><button class="btn btn-success" type="button">Thêm sản phẩm</button></a>
                </div>
                <table class="table table-hover ">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Tên sản phẩm</th>
                            <th>Danh mục</th>
                            <th>Ảnh</th>
                            <th>Giá tiền</th>
                            <th>Giá khuyến mãi</th>
                            <th colspan="2" style="width: 200px">Thao tác</th>
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
        const response = await ProductApi.list();
        const data = await response.json();
        console.log(data);

        const tbodyContents: string = data
            .map((value: any, key: number) => {
                const showCate = () => {
                    if (value.categoryId == 1) {
                        return `
                            LAPTOP ACER
                        `;
                    } else if (value.categoryId == 2) {
                        return `
                            LAPTOP ASUS
                        `;
                    } else if (value.categoryId == 3) {
                        return `
                            LAPTOP DELL
                        `;
                    } else if (value.categoryId == 4) {
                        return `
                            LAPTOP MSI
                        `;
                    } else if (value.categoryId == 5) {
                        return `
                            LAPTOP LENOVO
                        `;
                    } else if (value.categoryId == 6) {
                        return `
                            MACBOOK
                        `;
                    }
                };
                return `
                    <tr>
                        <td class="w-16">${value.id}</td>
                        <td style="width:450px">${value.name}</td>
                        <td class="w-40">${value.category.name}</td>
                        <td><img class="w-64" src="${value.image}" alt=""></td>
                        <td class="w-32 text-red-500 font-semibold">${prices(Number(value.price)).replace("VND", "Đ")}</td>
                        <td class="w-40 text-red-500 font-semibold">${prices(Number(value.priceSale)).replace("VND", "Đ")}</td>
                        <td>
                            <a class="btn btn-primary" href="#/products/edit/${value.id}" data-navigo>Update</a>
                        </td>
                        <td>
                            <a class="btn btn-danger" href="#/products/delete/${value.id}" data-navigo data-id="${value.id}">Delete</a>
                        </td>
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
        listBtnDel.forEach((btn) => {
            const id = btn.dataset.id;
            console.log(id);
            btn.addEventListener("click", async (e) => {
                e.preventDefault();
                const Confirm = confirm("Bạn có thật sự muốn xoá?");
                if (Confirm) {
                    await ProductApi.remove(id);
                    window.location.hash = "#/products/index";
                }
            });
        });
    }
}
