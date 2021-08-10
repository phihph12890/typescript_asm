import { Component } from "../Component.js";
import { $$ } from "../../ultis.js";
import { UserApi } from "../../api/UserApi.js";
import { User } from "../../Models/User.js";

export class SigninPage extends Component {
    public async template() {
        return `
            <div class="container mx-auto bg-gray-200 border border-gray-300 mt-32 " style="width:600px;" >
                <form action="" id="form_signin">
                    <h2 class="text-center pt-5 text-3xl font-semibold">ĐĂNG NHẬP</h2>
                    <div class="ml-32 mt-5">
                        <p class="mb-1"><i class="fas fa-user mr-2"></i>Email</p><input class="px-2 py-1 rounded-md" style="width:330px;" type="email" id="email" value="phi1@gmail.com">
                        <p class="mt-3  mb-1"><i class="fas fa-key mr-2"></i>Password</p><input class="px-2 py-1 rounded-md" style="width:330px;" type="password" id="password" value="123456"> <br>
                    </div>
                    <div class="mt-2">
                        <input type="checkbox" name="remember" value="1" style="margin-left: 128px;"><span class="text-sm font-semibold"> Ghi nhớ đăng nhập</span><br>
                    </div>
                    <div id="alert" class="mt-3 text-center mx-auto" style="width: 350px;" role="alert"></div>
                    <div class="text-center">
                        <input class="mt-4 mb-4 px-4 py-1 rounded-lg font-semibold bg-blue-500 btn btn-primary" type="submit" value="ĐĂNG NHẬP" id="btn_signin" >
                    </div>
                    <div class="text-center">
                        <button class="mb-5 px-5 py-1 rounded-lg font-semibold bg-blue-500 mx-auto btn btn-primary"><a href="/" class="hover:text-gray-300">Trở về trang chủ</a></button>
                    </div>
                    <div class="text-center border-t border-gray-300 grid grid-cols-2">
                        <div class="hover:bg-gray-300 py-2 border-r border-gray-300 "><button><a href="/#/signup" class="font-semibold">Đăng ký tài khoản</a></button></div>
                        <div class="hover:bg-gray-300 py-2"><button class="font-semibold">Quên mật khẩu?</button></div>
                    </div>
                </form>
            </div>
        `;
    }
    public async afterRender() {
        $$("#form_signin").addEventListener("submit", async (e: any) => {
            e.preventDefault();

            const user = {
                email: $$("#email").value,
                password: $$("#password").value,
            };
            console.log(user);
            UserApi.signin(user)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    if (data == "Cannot find user") {
                        $$("#alert").innerHTML = `
                            <div class="alert bg-red-400 text-white">
                                Email không tồn tại!
                            </div>
                        `;
                    } else if (data == "Incorrect password") {
                        $$("#alert").innerHTML = `
                            <div class="alert bg-red-400 text-white">
                                Mật khẩu không chính xác!
                            </div>
                        `;
                    } else {
                        alert("Đăng nhập thành công!")
                        localStorage.setItem("token", data.accessToken);
                        localStorage.setItem("user", JSON.stringify(data.user));
                        window.location.hash = "/";
                    }
                });
            // .catch((error) => {
            //     $$("#alert").innerHTML = `
            //         <div class="alert bg-red-400 text-white">
            //             ${error.response.data}
            //         </div>
            //     `;
            // });
        });
    }
}
