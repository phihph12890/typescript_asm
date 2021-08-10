import { Component } from "../Component.js";
import { Order } from "../../Models/Order.js";
import { OrderApi } from "../../api/OrderApi.js";
import { footer } from "../adminComponent/footer.js";
import { header } from "../adminComponent/header.js";
import { sidebar } from "../adminComponent/sidebar.js";

export class OrderEdit extends Component {
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
                    <h3 class="text-center text-3xl font-semibold">CẬP NHẬT TRẠNG THÁI ĐƠN HÀNG</h3>
                    <form enctype="multipart/form-data" class="text-center" id="form_editOrder">
                        <p class="mt-10 font-semibold">Trạng thái: </p> 
                        <select class="form-control mx-auto mt-2" name="" id="status" style="width:200px;">
                            <option value="CHƯA DUYỆT">CHƯA DUYỆT</option>
                            <option value="ĐÃ DUYỆT">ĐÃ DUYỆT</option>
                            <option value="ĐÃ HOÀN THÀNH">ĐÃ HOÀN THÀNH</option>
                        </select>
                        <p class="error text-red-500 text-sm font-semibold"></p>
                        <input type="submit" value="Sửa trạng thái" name="" class="px-3 py-2 text-white bg-red-600 rounded-full mt-4 mb-5 font-semibold hover:bg-red-700">
                    </form>
                </div>
            </div>
            ${footer.render()}
        </div>
            `;
    }
    public async afterRender() {
        if (typeof this._id != "undefined") {
            const response = await OrderApi.read(this._id);
            const data = await response.json();
            console.log(data);

        }

        document.querySelector("#form_editOrder")!.addEventListener("submit", async (e) => {
            e.preventDefault();

            if (typeof this._id === "undefined") {
                return;
            }

            //Cách 1: Type Casting: < >
            // const inputName = <HTMLInputElement>document.querySelector("#name");

            //Cách 2: as
            const inputStatus = document.querySelector("#status") as HTMLInputElement;
            const status: string = inputStatus.value;

            const response = await OrderApi.read(this._id);
            const data = await response.json();
            console.log(data);

            let ord: Order = new Order(+this._id, data.userId, data.name, data.email, data.address, data.phoneNumber, data.note, data.totalPrice, data.cartNumber, data.cart, status, data.create_at);
            console.log(ord);
            await OrderApi.update(this._id, ord);
            window.location.hash = "/orders/index";
        });
    }
}
