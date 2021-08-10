import { Component } from "../Component.js";
import { User } from "../../Models/User.js";
import { UserApi } from "../../api/UserApi.js";
import { footer } from "../adminComponent/footer.js";
import { header } from "../adminComponent/header.js";
import { sidebar } from "../adminComponent/sidebar.js";
import { $$ } from "../../ultis.js";

declare const window: any;

export class UserCreate extends Component {
    public template(): string {
        return `
        <div class="wrapper">
        <!-- Navbar -->
            ${header.render()}
            ${sidebar.render()}
            <!-- Content Wrapper. Contains page content -->
            <div id="root" class="content-wrapper">
                <div class="col-10 offset-1 pt-5 ">
                    <h3 class="text-center font-bold pb-5 pt-4 text-xl">THÊM USER</h3>
                    <form id="form_addUser">
                        <div class="grid grid-cols-2 ">
                            <div class=" col-span-1" style="margin-left:180px;">
                                <p class="mb-3 font-semibold"><i class="fas fa-user-tag mr-2"></i>Full Name</p><input class="px-2 py-1 rounded-md checkValidate" style="width:330px;" type="text" id="name">
                                <p class="error text-red-500 text-sm font-semibold"></p>
                                <p class="mb-3 mt-5 font-semibold"><i class="fas fa-user-circle mr-2"></i>Email</p><input class="px-2 py-1 rounded-md checkValidate" style="width:330px;" type="email" id="email">
                                <p class="error text-red-500 text-sm font-semibold"></p>
                            </div>
                            <div class="ml-16 col-span-1">
                                <p class="  mb-3 font-semibold"><i class="fas fa-key mr-2"></i>Password</p><input class="px-2 py-1 rounded-md checkValidate" style="width:330px;" type="password" id="password" minlength="6"> <br>
                                <p class="error text-red-500 text-sm font-semibold"></p>
                                <p class=" mt-5  mb-3 font-semibold"><i class="fas fa-key mr-2"></i>Conffirm Password</p><input class="px-2 py-1 rounded-md checkValidate" style="width:330px;" type="password" id="repassword" minlength="6"> <br>
                                <p class="error text-red-500 text-sm font-semibold"></p>
                                <p class="errorRepassword text-red-500 text-sm font-semibold"></p>
                            </div>
                        </div>
                        <div class="text-center mt-3">
                            <p class=" mt-5 font-semibold"><i class="fas fa-user-shield mr-2"></i>Quyền hạn</p>
                            <select id="permission" class="w-64 mt-3 h-8 rounded-md">
                                <option value="KHÁCH HÀNG">Khách hàng</option>
                                <option value="ADMIN">Quản trị</option>
                            </select>
                        </div>
                        <div id="alert" class="mt-3 text-center mx-auto" style="width: 350px;" role="alert"></div>
                        <div class="text-center mt-3">
                            <input class="mb-4 px-5 py-1 rounded-lg font-semibold bg-blue-500 btn btn-primary" type="submit" value="ĐĂNG KÝ" id="btn_signup" style="margin-top: 20px;">
                        </div>
                    </form>
                </div>
            </div>
            ${footer.render()}
        </div>
            `;
    }
    public async afterRender() {
        document.querySelector("#form_addUser")!.addEventListener("submit", async (e) => {
            e.preventDefault();

            //Cách 1: Type Casting: < >
            // const inputName = <HTMLInputElement>document.querySelector("#name");

            //Cách 2: as
            const inputName = document.querySelector("#name") as HTMLInputElement;
            const name: string = inputName.value;

            const inputEmail = document.querySelector("#email") as HTMLInputElement;
            const email: string = inputEmail.value;

            const inputPassword = document.querySelector("#password") as HTMLInputElement;
            const password: string = inputPassword.value;

            const inputRepassword = document.querySelector("#repassword") as HTMLInputElement;
            const repassword: string = inputRepassword.value;

            const inputPermissions = document.querySelector("#permission") as HTMLInputElement;
            const permission: string = inputPermissions.value
            console.log(name);
            console.log(email);
            console.log(password);
            console.log(repassword);
            console.log(permission);

            var sumCheck = 0;
            var checkValidate = $$(".checkValidate");
            var errorValidate = $$(".error");
            // console.log(checkValidate);
            for (let i = 0; i < checkValidate.length; i++) {
                if (checkValidate[i].value.trim() == "") {
                    sumCheck += 1;
                    errorValidate[i].innerHTML = "Không được để trống";
                } else {
                    errorValidate[i].innerHTML = "";
                }
            }
            if (sumCheck === 0) {
                if (password == repassword) {
                    let user: User = new User(0, name, email, password, permission);
                    console.log(user);
                    UserApi.signup(user)
                        .then((response) => {
                            return response.json();
                        })
                        .then((data) => {
                            console.log(data);
                            alert("Đăng ký thành công!");
                            window.location.hash = "/users/index";
                        })
                        .catch((error) => {
                            console.log(error);
                            $$("#alert").innerHTML = `
                            <div class="alert bg-red-400 text-white">
                                ${error.response.data}
                            </div>
                        `;
                        });
                } else {
                    $$(".errorRepassword").innerHTML = `
                            <div class="alert">
                                Mật khẩu không trùng khớp!
                            </div>
                        `;
                }
            } else {
                alert("Hãy điền đầy đủ thông tin!");
            }
        });
    }
}
