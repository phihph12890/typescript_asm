import { Component } from "../Component.js";
import { Product } from "../../Models/Product.js";
import { ProductApi } from "../../api/ProductApi.js";
import { CategoryApi } from "../../api/CategoryApi.js";
import { footer } from "../adminComponent/footer.js";
import { header } from "../adminComponent/header.js";
import { sidebar } from "../adminComponent/sidebar.js";

declare const window: any;

export class ProductEdit extends Component {
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
            <div id="root" class="content-wrapper pb-5">
            <div class="col-10 offset-1 pt-5 ">
                    <h3 class="text-center text-3xl font-semibold">CẬP NHẬT SẢN PHẨM</h3>
                    <form action="" method= "POST"  id="form_edit">
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
                                    <img class="w-64" id="imageChoosed" src="" alt="">
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
                                <button class="btn btn-primary px-5">CẬP NHẬT</button>
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
        if (typeof this._id != "undefined") {
            console.log("this._id",this._id);
            const response = await ProductApi.read(this._id);
            const data = await response.json();
            console.log(data);

            (document.querySelector("#name") as HTMLInputElement).value = data.name;
            let imageChoosed = ((document.querySelector("#imageChoosed") as HTMLInputElement).src = data.image);
            console.log(imageChoosed);
            (document.querySelector("#price") as HTMLInputElement).value = data.price;
            (document.querySelector("#priceSale") as HTMLInputElement).value = data.priceSale;

            const responseCate = await CategoryApi.read(data.categoryId);
            const dataCate = await responseCate.json();
            console.log(dataCate);
            const resultCate = () => {
                return `<option value="${dataCate.id}">${dataCate.name}</option>`;
            };

            let arrCate: string[] = [];
            arrCate.push(resultCate());

            const responseCateRelated = await CategoryApi.listRelated(data.categoryId);
            const dataCateRelated = await responseCateRelated.json();
            console.log(dataCateRelated);

            const resultCateRelated = dataCateRelated.map((cateRelated: any) => {
                return `<option value="${cateRelated.id}">${cateRelated.name}</option>`;
            });

            for (let i = 0; i < resultCateRelated.length; i++) {
                arrCate.push(resultCateRelated[i]);
            }
            console.log(arrCate);
            const resultListCate = arrCate
                .map((cate) => {
                    return `
                        ${cate}
                    `;
                })
                .join("");
            document.getElementById("category")!.innerHTML = resultListCate;

            document.querySelector("#form_edit")!.addEventListener("submit", async (e) => {
                e.preventDefault();

                //Cách 1: Type Casting: < >
                // const inputName = <HTMLInputElement>document.querySelector("#name");

                //Cách 2: as
                if (typeof this._id === "undefined") {
                    return;
                }
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

                if (image == undefined) {
                    let product: Product = new Product(+this._id, name, category, price, priceSale, imageChoosed);
                    console.log(product);
                    await ProductApi.update(this._id, product);
                    window.location.hash = "#/products/index";
                } else {
                    const storageRef = await window.firebase.storage().ref(`images/${image.name}`);
                    await storageRef.put(image);
                    const url = await storageRef.getDownloadURL();
                    
                    let product: Product = new Product(+this._id, name, category, price, priceSale, url);
                    console.log(product);
                    await ProductApi.update(this._id, product);
                    window.location.hash = "#/products/index";
                }
            });
        }
    }
}
