import { Component } from "../Component.js";
import { Product } from "../../Models/Product.js";
import { UserApi } from "../../api/UserApi.js";
import { footer } from "../adminComponent/footer.js";
import { header } from "../adminComponent/header.js";
import { sidebar } from "../adminComponent/sidebar.js";
import { prices, $$ } from "../../ultis.js";

export class UserIndex extends Component {
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
            <h2 class="text-center font-bold text-xl mb-3">QUẢN TRỊ USER</h2>
                <div class="py-3">
                    <a href="#/users/create"><button class="btn btn-success" type="button">Thêm User</button></a>
                </div>
                <table class="table table-hover ">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>TÊN</th>
                            <th>EMAIL</th>
                            <th>QUYỀN HẠN</th>
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
        const response = await UserApi.list();
        const data = await response.json();
        console.log(data);

        const tbodyContents: string = data
            .map((value: any, key: number) => {
                return `
                    <tr>
                        <td class="">${value.id}</td>
                        <td style="width:300px">${value.name}</td>
                        <td class="">${value.email}</td>
                        <td class="font-semibold text-red-500">${value.permission}</td>
                        <td>
                            <a class="btn btn-primary" href="#/users/edit/${value.id}" data-navigo>Update</a>
                        </td>
                        <td>
                            <a class="btn btn-danger" href="#/users/delete/${value.id}" data-navigo data-id="${value.id}">Delete</a>
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
        listBtnDel.forEach(async (btn) => {
            const id = btn.dataset.id;
            console.log(id);
            btn.addEventListener("click", async (e) => {
                e.preventDefault();
                const responseUser = await UserApi.read(id!);
                const user = await responseUser.json();
                console.log(user);
                if (user.permission == "ADMIN") {
                    alert("Không thể xoá tài khoản ADMIN!");
                } else {
                    const Confirm = confirm("Bạn có thật sự muốn xoá tài khoản này?");
                    if (Confirm) {
                        await UserApi.remove(id);
                        window.location.hash = "#/users/index";
                    }
                }
            });
        });
    }
}
