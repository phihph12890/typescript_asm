import { Component } from "../Component.js";
import { Category } from "../../Models/Category.js";
import { CategoryApi } from "../../api/CategoryApi.js";
import { footer } from "../admin/footer.js";
import { header } from "../admin/header.js";
import { sidebar } from "../admin/sidebar.js";

export class CategoryEdit extends Component {
    private _id: string | undefined;
    public constructor(id: string | undefined) {
        super(); // GỌi tới hàm khởi tạo lớp cha
        this._id = id;
    }

    public template(): string {
        return `
        <div class="wrapper">
        <!-- Navbar -->
            ${header.render()}
            ${sidebar.render()}
            <!-- Content Wrapper. Contains page content -->
            <div id="root" class="content-wrapper">
                <div class="col-10 offset-1 pt-5 ">
                    <h3 class="text-center text-3xl font-semibold">SỬA DANH MỤC</h3>
                    <form action="" method= "POST" class= "text-center" id="form_edit">
                        <div class=" mt-4">
                            <label class="col-2">Tên danh mục</label>
                            <input type="text" name="name" id="name" class="form-control col-5 mx-auto">
                        </div>
                        <div class=" mt-8">
                            <div>
                                <button class="btn btn-primary px-5">THÊM</button>
                            </div>
                            <button class="btn btn-default mt-2 px-5">
                                <a href="#/categories/index" data-navigo>Cancel</a>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            ${footer.render()}
        </div>
            `;
    }
    public async afterRender() {
        if (typeof this._id != "undefined") {
            const response = await CategoryApi.find(this._id);
            const data = await response.json();
            console.log(data);

            (document.querySelector("#name") as HTMLInputElement).value = data.name;
        }

        document.querySelector("#form_edit")!.addEventListener("submit", async (e) => {
            e.preventDefault();

            //Cách 1: Type Casting: < >
            // const inputName = <HTMLInputElement>document.querySelector("#name");

            //Cách 2: as
            const inputName = document.querySelector("#name") as HTMLInputElement;
            const name: string = inputName.value;

            let cate: Category = new Category(0, name);
            await CategoryApi.update(this._id, cate);
            window.location.hash = "#/categories/index";
        });
    }
}
