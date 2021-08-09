import { Component } from "../Component.js";
import { categories } from "../clientComponent/categories.js";
import { header } from "../clientComponent/header.js";
import { banner } from "../clientComponent/banner.js";
import { footer } from "../clientComponent/footer.js";
import { ProductApi } from "../../api/ProductApi.js";
import { prices, productSearch, onLoadCartNumber } from "../../ultis.js";

export class ShopCartPage extends Component {
    public async template() {
        return `
            ${await header.render()}
            <div class="div-content bg-gray-100 pb-8">
                <div class="content1 mx-auto" style="max-width: 1200px;">
                    <div class="flex justify-between items-center py-2">
                        <h5 class="py-3"><a href="">Trang chủ</a> <i class="fas fa-angle-double-right text-xs px-1"></i> <a href="">Giỏ hàng<i class="fas fa-shopping-cart"></i></a></h5>
                    </div>
                    <div id="list_cart">
                        
                    </div>
                </div>
            </div>
            <div class="bg-gray-100 hidden" id="oderPage">
                        <div class="mx-auto" style="max-width: 1230px;">
                            <div class=" px-3 pb-5">
                                <form class="grid grid-cols-5 gap-3" id="form_addOder">
                                    <div class="col-span-3 border">
                                        <div class="border-b pt-1 px-3">
                                            <h3 class="text-lg pb-1 font-semibold">1. Khách hàng khai báo thông tin</h3>
                                        </div>
                                        <div class="ml-5">
                                            <h4 class="text-base mt-4 font-semibold">Thông tin người mua</h4>
                                            <p class="text-sm mt-1">Những phần đánh dấu * là bắt buộc</p>
                                            <div class="flex  mt-4">
                                            <p style="min-width: 120px;">Họ tên *</p>
                                            <input type="text" class="form-control checkValidate" id="fullname" placeholder="Nguyễn Văn A" style="width:420px; height:30px;"> 
                                            </div>
                                            <div class="flex mt-4">
                                                <p style="min-width: 120px;">Địa chỉ*</p>
                                                <input type="text" class="form-control checkValidate" id="address" placeholder="Số 165 - Cầu Giấy - Quận Cầu Giấy - Hà Nội" style="width:420px; height:30px;"> 
                                            </div>
                                            <div class="flex mt-4">
                                                <p style="min-width: 120px;">Số điện thoại*</p>
                                                <input type="text" class="form-control checkValidate" id="phoneNumber" placeholder="+84 xxx xxx xxx" style="width:420px; height:30px;"> 
                                            </div>
                                            <div class="flex mt-4">
                                                <p style="min-width: 120px;">Email</p>
                                                <input type="text" class="form-control checkValidate" id="email" placeholder="abc@xyz.com" style="width:420px; height:30px;">
                                            </div>
                                            <div><p class="errorEmail text-red-500 text-sm font-semibold mt-1" style="margin-left: 120px"></p></div>
                                        </div>
                                    </div>
                                    <div class="col-span-2 ">
                                        <div class="">
                                            <div class="border-t border-l border-r pt-1 px-3">
                                                <h3 class="text-lg pb-1 font-semibold">2. Ghi chú cho đơn hàng</h3>
                                            </div>
                                            <div class="p-2 border">
                                                <textarea name="" id="note" rows="3" class="w-full form-control checkValidate"></textarea>
                                            </div>
                                        </div>
                                        <div class="mt-4 ">
                                            <div class="border-t border-l border-r pt-1 px-3">
                                                <h3 class="text-lg pb-1 font-semibold">3. Chọn phương thức thanh toán</h3>
                                            </div>
                                            <div class="p-3 border">
                                                <form class="text-sm" id="form">
                                                    <div><input name="checkPay" type="radio"> Thanh toán tại cửa hàng</div>
                                                    <div class="mt-1"><input name="checkPay" type="radio" checked> Thanh toán khi nhận hàng (COD)</div>
                                                    <div class="mt-1"><input name="checkPay" type="radio" id="radio3" disabled> Thanh toán trực tuyến bằng thẻ ATM, IB, QR Code </div>
                                                    <div class="mt-1"><input name="checkPay" type="radio" id="radio4" disabled> Thanh toán trả góp online</div>
                                                </form>
                                            </div>
                                        </div>
                                        <div class="text-center mt-3">
                                            <input type="submit" class="btn btn-primary py-2" value="GỬI ĐƠN HÀNG">
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
            </div>
            ${footer.render()}
        `;
    }
    public async afterRender() {
        productSearch();
        onLoadCartNumber();
    }
}
