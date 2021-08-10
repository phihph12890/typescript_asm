import { Component } from "../Component.js";
import { User } from "../../Models/User.js";
import { UserApi } from "../../api/UserApi.js";
import { footer } from "../adminComponent/footer.js";
import { header } from "../adminComponent/header.js";
import { sidebar } from "../adminComponent/sidebar.js";

declare const window: any;

export class UserEdit extends Component {
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
                    <h3 class="text-center font-bold pb-5 pt-4 text-xl">CẬP NHẬT USER</h3>
                    <form id="form_editUser" class="text-center">
                        <div class="">
                            <p class="mb-3 font-semibold"><i class="fas fa-user-tag mr-2"></i>Full Name</p><input class="px-3 py-1 rounded-md checkValidate" style="width:330px;" type="text" id="name">
                            <p class="error text-red-500 text-sm font-semibold"></p>
                            <p class="mb-3 mt-5 font-semibold"><i class="fas fa-user-circle mr-2"></i>Email</p><input class="px-3 py-1 rounded-md checkValidate border" style="width:330px;" type="email" id="email" disabled>
                            <p class="error text-red-500 text-sm font-semibold"></p>
                        </div>
                        <div class="text-center mt-3">
                            <p class=" mt-5 font-semibold"><i class="fas fa-user-shield mr-2"></i>Quyền hạn</p>
                            <select id="permission" class="w-64 mt-3 h-8 rounded-md px-2">
                                <option value="KHÁCH HÀNG">Khách hàng</option>
                                <option value="ADMIN">Quản trị</option>
                            </select>
                        </div>
                        <div id="alert" class="mt-3 text-center mx-auto" style="width: 350px;" role="alert"></div>
                        <div class="text-center mt-3">
                            <input class="mb-4 px-5 py-1 rounded-lg font-semibold bg-blue-500 btn btn-primary" type="submit" value="CẬP NHẬT" id="btn_signup" style="margin-top: 20px;">
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
            console.log("this._id", this._id);
            const response = await UserApi.read(this._id);
            const data = await response.json();
            console.log(data);

            (document.querySelector("#name") as HTMLInputElement).value = data.name;
            (document.querySelector("#email") as HTMLInputElement).value = data.email;

            document.querySelector("#form_editUser")!.addEventListener("submit", async (e) => {
                e.preventDefault();

                //Cách 1: Type Casting: < >
                // const inputName = <HTMLInputElement>document.querySelector("#name");

                //Cách 2: as
                if (typeof this._id === "undefined") {
                    return;
                }
                const inputName = document.querySelector("#name") as HTMLInputElement;
                const name: string = inputName.value;

                const inputPermission = document.querySelector("#permission") as HTMLInputElement;
                const permission: string = inputPermission.value;

                let user: User = new User(+this._id, name, data.email, data.password, permission);
                console.log(user);
                await UserApi.update(this._id, user);
                window.location.hash = "#/users/index";
            });
        }
    }
}
