import { Component } from "../Component.js";
import { categories } from "../clientComponent/categories.js";
import { header } from "../clientComponent/header.js";
import { banner } from "../clientComponent/banner.js";
import { footer } from "../clientComponent/footer.js";
import { ProductApi } from "../../api/ProductApi.js";
import { CategoryApi } from "../../api/CategoryApi.js";
import { prices, $$, productSearch, onLoadCartNumber, getTotalItemOnCart, addToCart} from "../../ultis.js";

export class ProductSearch extends Component {
    private _id: string | undefined;
    public constructor(id: string | undefined) {
        super(); // GỌi tới hàm khởi tạo lớp cha
        this._id = id;
    }

    public async template() {
        return `
            ${header.render()}
            <div class="content bg-gray-100 pb-8" id="content">
                <div class=" mx-auto grid grid-cols-4 gap-8 pt-4" style="width:1200px;">
                    <aside class="col-span-1 bg-gray-100">
                        ${await categories.render()}
                        <div id="sticky" class="mt-8">
                            <img class="shadow-md transition duration-500 ease-in-out transform hover:scale-95" src="https://laptopaz.vn/media/banner/23_Octce2f48fdc627f6f62b233347a2d4e707.jpg" alt="">
                            <img class="shadow-md mt-10 transition duration-500 ease-in-out transform hover:scale-95" src="https://laptopaz.vn/media/banner/11_Oct876d50f755e454ecda95d81a959c3685.jpg" alt="">
                        </div>
                    </aside>
                    <div class="col-span-3">
                        <h5 class="mt-1"><span><i class="fas fa-search"></i> Sản phẩm tìm kiếm: <span id="textSearch"class="text-blue-600 font-semibold text-sm"></span></h5>
                        <div class="grid grid-cols-3 gap-6 gap-y-6 mt-3 text-center" id="list_product">
                            
                        </div>
                    </div>
                </div>
            </div>
            ${footer.render()}
        `;
    }
    public async afterRender() {
        productSearch();
        onLoadCartNumber();
        (document.querySelector("#sticky") as HTMLElement).style.position = "sticky";
        (document.querySelector("#sticky") as HTMLElement).style.top = "30px";

        if (typeof this._id != "undefined") {
            document.querySelector("#textSearch")!.innerHTML = this._id;
            console.log(this._id);
            const responseProductSearch = await ProductApi.search(this._id);
            const productSearch = await responseProductSearch.json();
            console.log(productSearch);
            let result;
            if (productSearch.length == 0) {
                result = `
                    <div class=" text-center absolute mx-48 mt-20">
                        <div class="text-4xl font-semibold">Không tìm thấy sản phẩm <i class="far fa-sad-tear"></i></div>
                        <div><a href="/"><button class="btn btn-primary mt-4">Trang chủ</button></a></div>
                    </div>
                `;
            } else {
                result = productSearch.map((product: any) => {
                        return `
                        <div class="group overflow-hidden shadow-md bg-white ">
                                <div class="bg-white overflow-hidden ">
                                    <div class="py-2 transition duration-500 ease-in-out transform group-hover:scale-90">
                                        <a href="/#/product/${product.id}"><img class="mx-auto" src="${product.image}" alt="" width="80%"></a>
                                    </div>
                                    <a href="/#/product/${product.id}"><span class="text-center text-sm pt-1 group-hover:text-yellow-600 px-2">${product.name}</span></a>
                                    <p class="text-red-500 text-lg font-bold py-1">${prices(Number(product.priceSale)).replace(
                                        "VND",
                                        "Đ"
                                    )}<span class="text-gray-500 text-base ml-2 font-bold pt-1italic line-through">${prices(Number(product.price)).replace("VND", "Đ")}</span></p>
                                    <div class="transition duration-300 ease-in-out transform translate-y-24 group-hover:-translate-y-0" >
                                        <button class="bg-blue-500 text-white bg-black text-base font-bold rounded-md btn_addCart" 
                                                style="padding: 6px 50px;" data-id="${product.id}">
                                            THÊM GIỎ HÀNG
                                        </button>
                                    </div>
                                </div>
                        </div>
                            `;
                    })
                    .join("");
                }
                document.querySelector("#list_product")!.innerHTML = result;


                const btns = $$(".btn_addCart");
                btns.forEach(async (btn: any) => {
                var btn_id = btn.dataset.id;
                btn.addEventListener("click", async () => {
                    console.log(btn_id);
                    const responseProducts = await ProductApi.read(btn_id);
                    const products = await responseProducts.json();
                    console.log(products);
                    addToCart(products.id, products.name, products.image, products.price, products.categoryId);
                    getTotalItemOnCart();
                    onLoadCartNumber();
                });
            });
        }
        return `${await header.afterRender()}`
    }
}
