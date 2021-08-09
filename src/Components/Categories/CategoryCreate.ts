import { Component } from "../Component.js";
import { Category } from "../../Models/Category.js";
import { CategoryApi } from "../../api/CategoryApi.js";
import { footer } from "../adminComponent/footer.js";
import { header } from "../adminComponent/header.js";
import { sidebar } from "../adminComponent/sidebar.js";

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
                            <input type="text" name="name" id="name" class="form-control col-5 mx-auto checkValidate">
                            <p class="error text-red-500 text-sm font-semibold"></p>
                            <p class="errorName text-red-500 text-sm font-semibold"></p>
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

            var sumCheck = 0;
            var checkValidate = document.querySelector(".checkValidate") as HTMLInputElement;
            var errorValidate = document.querySelector(".error") as HTMLElement;
            console.log(checkValidate);
            console.log(errorValidate);
            
                if (checkValidate!.value.trim() == "") {
                    sumCheck += 1;
                    errorValidate!.innerHTML = "Không được để trống";
                } else {
                    errorValidate!.innerHTML = "";
                }
            

            const responseCate = await CategoryApi.list();
            const dataCate = await responseCate.json();
            console.log(dataCate);
            let check = 0;
            dataCate.forEach((element: any) => {
                if (checkValidate.value == element.name) {
                    check += 1;
                }
            });
            console.log(check);

            if (sumCheck === 0) {
                if(check === 0){
                    let category: Category = new Category(0, name);
                    console.log(category);
                    await CategoryApi.add(category);
                    window.location.hash = "#/categories/index";
                } else {
                    document.querySelector(".errorName")!.innerHTML = "Tên danh mục đã tồn tại";
                }
            }
        });
    }
}
