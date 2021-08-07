import { Component } from "../Component.js";
import { Category } from "../../Models/Category.js";
import { CategoryApi } from "../../api/CategoryApi.js";
import { footer } from "../admin/footer.js";
import { header } from "../admin/header.js";
import { sidebar } from "../admin/sidebar.js";

export class CategoryCreate extends Component {
    public template(): string {
        return `
        <div class="wrapper">
        <!-- Navbar -->
            ${header.render()}
            ${sidebar.render()}
            <!-- Content Wrapper. Contains page content -->
            <div id="root" class="content-wrapper">
                <div class="col-10 offset-1 pt-5 ">
                    <h3 class="text-center text-3xl font-semibold">THÊM DANH MỤC</h3>
                    <form action="" method= "POST" class= "text-center" id="form_create">
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
    public afterRender() {
        document.querySelector("#form_create")!.addEventListener("submit", async (e) => {
            e.preventDefault();

            //Cách 1: Type Casting: < >
            // const inputName = <HTMLInputElement>document.querySelector("#name");

            //Cách 2: as
            const inputName = document.querySelector("#name") as HTMLInputElement;
            const name: string = inputName.value;

            let category: Category = new Category(0, name);
            console.log(category);
            await CategoryApi.create(category);
            window.location.hash = "#/categories/index";
        });
    }
}
