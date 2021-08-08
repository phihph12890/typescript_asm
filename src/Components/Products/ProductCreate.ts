import { Component } from "../Component.js";
import { Product } from "../../Models/Product.js";
import { ProductApi } from "../../api/ProductApi.js";
import { CategoryApi } from "../../api/CategoryApi.js";
import { footer } from "../adminComponent/footer.js";
import { header } from "../adminComponent/header.js";
import { sidebar } from "../adminComponent/sidebar.js";

declare const window: any;

export class ProductCreate extends Component {
    public template(): string {
        return `
        <div class="wrapper">
        <!-- Navbar -->
            ${header.render()}
            ${sidebar.render()}
            <!-- Content Wrapper. Contains page content -->
            <div id="root" class="content-wrapper">
            <div class="col-10 offset-1 pt-5 ">
                    <h3 class="text-center text-3xl font-semibold">THÊM SẢN PHẨM</h3>
                    <form action="" method= "POST"  id="form_create">
                        <div class="grid grid-cols-2 gap-12">
                            <div>
                                <div class=" mt-4">
                                    <label class="">Tên sản phẩm</label>
                                    <input type="text" name="name" id="name" class="form-control">
                                </div>
                                <div class=" mt-4">
                                    <label class="">Danh mục</label>
                                    <select class="form-control" name="" id="category"></select>
                                </div>
                                <div class=" mt-4">
                                    <div><label class="">Ảnh</label></div>
                                    <input type="file" name="image" id="image" class="">
                                </div>
                            </div>
                            <div>
                                <div class=" mt-4">
                                    <label class="">Giá tiền</label>
                                    <input type="number" name="price" id="price" class="form-control">
                                </div>
                                <div class=" mt-4">
                                    <label class="">Giá khuyến mãi</label>
                                    <input type="number" name="priceSale" id="priceSale" class="form-control">
                                </div>
                            </div>
                        </div>
                        
                        <div class=" mt-8 text-center">
                            <div>
                                <button class="btn btn-primary px-5">THÊM</button>
                            </div>
                            <button class="btn btn-default mt-2 px-5">
                                <a href="#/products/index" data-navigo>Cancel</a>
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
        const responseCate = await CategoryApi.list();
        const dataCate = await responseCate.json();
        console.log(dataCate);

        const resultCate = dataCate.map((cate: any) => {
            return `
                <option value="${cate.id}">${cate.name}</option>
            `;
        });
        document.getElementById("category")!.innerHTML = resultCate;

        document.querySelector("#form_create")!.addEventListener("submit", async (e) => {
            e.preventDefault();

            //Cách 1: Type Casting: < >
            // const inputName = <HTMLInputElement>document.querySelector("#name");

            //Cách 2: as
            const inputName = document.querySelector("#name") as HTMLInputElement;
            const name: string = inputName.value;

            const inputCategory = document.querySelector("#category") as HTMLInputElement;
            const category: string = inputCategory.value;

            const inputPrice = document.querySelector("#price") as HTMLInputElement;
            const price: string = inputPrice.value;

            const inputPriceSale = document.querySelector("#priceSale") as HTMLInputElement;
            const priceSale: string = inputPriceSale.value;

            const inputImage = document.querySelector("#image") as HTMLInputElement;
            const image: File = inputImage.files![0];

            const storageRef = await window.firebase.storage().ref(`images/${image.name}`);
            await storageRef.put(image);
            const url = await storageRef.getDownloadURL();

            let product: Product = new Product(0, name, category, price, priceSale, url);
            console.log(product);
            await ProductApi.create(product);
            window.location.hash = "#/products/index";
        });
    }
}
