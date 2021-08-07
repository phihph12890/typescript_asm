import { Component } from "../Component.js";
import { Category } from "../../Models/Category.js";
import { CategoryApi } from "../../api/CategoryApi.js";
import { footer } from "../admin/footer.js";
import { header } from "../admin/header.js";
import { sidebar } from "../admin/sidebar.js";

export class CategoryIndex extends Component {
    private listCategory: Category[];
    public constructor() {
        super();
        this.listCategory = [];
    }

    public template(): string {
        return `
        <div class="wrapper">
        <!-- Navbar -->
            ${header.render()}
            ${sidebar.render()}
            <!-- Content Wrapper. Contains page content -->
            <div id="root" class="content-wrapper">
            <div class="col-10 offset-1 pt-5 text-center">
                <h2 class="text-center font-bold text-xl mb-3">QUẢN TRỊ DANH MỤC</h2>
                    <div class="py-3">
                        <a href="#/categories/create"><button class="btn btn-success" type="button">Thêm danh mục</button></a>
                    </div>
                    <table class="table table-hover ">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Tên danh mục</th>
                                <th colspan="2" style="width: 200px">Thao tác</th>
                            </tr>
                        </thead>
                        <tbody id="tbl_categories"></tbody>
                    </table>
                </div>
            </div>
            ${footer.render()}
        </div>
            `;
    }
    public async afterRender() {
        const response = await CategoryApi.all();
        const data = await response.json();
        console.log(data);

        const tbodyContents: string = data
            .map((value: Category, key: number) => {
                return `
                    <tr>
                        <td>${value.id}</td>
                        <td>${value.name}</td>
                        <td>
                            <a class="btn btn-primary" href="#/categories/edit/${value.id}" data-navigo>Update</a>
                        </td>
                        <td>
                            <a class="btn btn-danger" href="#/categories/delete/${value.id}" data-navigo data-id="${value.id}">Delete</a>
                        </td>
                    </tr>
                `;
            })
            .join("");
        document.querySelector("#tbl_categories")!.innerHTML = tbodyContents;

        const listBtnDel: NodeListOf<HTMLButtonElement> = document.querySelectorAll(".btn-danger");
        console.log(listBtnDel);
        listBtnDel.forEach((btn) => {
            const id = btn.dataset.id;
            btn.addEventListener("click", async (e) => {
                e.preventDefault();
                const Confirm = confirm("Bạn có thật sự muốn xoá?");
                if (Confirm) {
                    await CategoryApi.delete(id);
                    window.location.hash = "#/categories/index";
                }
            });
        });
    }
}
