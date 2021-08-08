export const header = {
    render() {
        return /*html */ `
            <div class="header bg-gray-100">
            <div class=" container mx-auto flex py-1 justify-between items-center " style="max-width: 1200px;">
                <div class="">
                    <a href="/"><img class="h-24 w-40" src="https://laptopaz.vn/media/banner/logo_laptopaz%20(2).jpg" alt=""></a>
                </div>
                <div class="">
                    <form>
                        <input class="search-input py-2 px-3 border border-blue-500 text-sm outline-none" id="inputSearch" type="text" placeholder="Bạn muốn tìm sản phẩm gì?" style="width:370px;">
                        <input class="-ml-2 bg-blue-500 border border-blue-500 text-white text-sm px-2 py-2 cursor-pointer" id="btn_search" type="submit" value="Search">
                    </form>
                </div>
                <div class="text-center text-black text-base font-semibold">
                    <p class="text-red-600 text-sm"><span><i class="fas fa-phone-alt"></i></span> HOTLINE</p> 
                    <p class="text-sm ">09865.02468 - 08586.02468</p>
                    
                    <p class="text-sm">Địa chỉ: Số 18, ngõ 121, Thái Hà, Đống Đa, Hà Nội</p>
                    <div class="bg-blue-500 rounded-md text-white mt-1">
                        <a class="mr-8 " href="/#/about">Giới thiệu</a>
                        <a class="" href="/#/contact">Liên hệ</a>
                    </div>
                </div>
                <div class="items-center">
                    <div class="flex">
                        <div class="text-center">
                            <a href="/#/shopcart">
                                <span class="text-red-600 text-lg cursor-pointer"><i class="fas fa-cart-plus"></i></span>
                                <p id="cart" class="text-sm font-medium cursor-pointer">Giỏ hàng</p>
                                <span class="absolute rounded-full px-1.5 bg-red-600 text-sm text-white" id="totalCart" style="top:20px;margin-left:3px"></span>
                            </a>
                        </div>
                        <div class="ml-5">
                            <a  class="ml-2" href="#/products/index"><span class="text-red-600 text-lg"><i class="fas fa-user"></i></span>
                            <p id="login" class="text-sm font-medium">Login</p></a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        <div class="marquee bg-blue-500 ">
            <div class="mx-auto pt-1" style="width:1200px;">
                <marquee scrollamount = 10 class="text-white font-semibold">
                    <span>Địa chỉ: Số 18, ngõ 121, Thái Hà, Đống Đa, Hà Nội.</span> 
                    <span class="ml-8">Hotline: 09865.02468 - 08586.02468.</span>
                    <span class="ml-8">Email: hotrolaptopaz@gmail.com.</span>
                    <span class="ml-8">Hỗ trợ kỹ thuật: 0989.52.4004</span>
                </marquee>
            </div>
        </div>
        `
    }
};
