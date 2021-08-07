"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//router
// let gui = new UserCreate();
// gui.render();
// gui.afterRender();
/// <reference path="./IComponent.ts">
var App;
(function (App) {
    class Component {
        render() {
            return __awaiter(this, void 0, void 0, function* () {
                //Hiển thị giao diện
                document.querySelector("#root").innerHTML = yield this.template(); // thêm dấu !  sau querySelector => thông báo chắc chắn có phần tử
                //Xử lý
                yield this.afterRender();
            });
        }
    }
    App.Component = Component;
})(App || (App = {}));
///<reference path="./../Components.ts">
///<reference path="./../../Model/User.ts">
var App;
(function (App) {
    class UserCreate extends App.Component {
        template() {
            return `
                <div class="col-10 offset-1 mt-5 ">
                    <h3 class="text-center text-3xl font-semibold">USER CREATE</h3>
                    <form action="" method= "POST" class= "row" id="form_create">
                        <div class="row mt-4">
                            <label class="col-2">Họ Tên</label>
                            <input type="text" name="name" id="name" class="form-control col-10">
                        </div>
                        <div class="row mt-4">
                            <label class="col-2">Email</label>
                            <input type="email" name="email" id="email" class="form-control col-10">
                        </div>
                        <div class="row mt-4">
                            <label class="col-2">Mật khẩu</label>
                            <input type="password" name="password" id="password" class="form-control col-10">
                        </div>
                        <div class="row mt-4">
                            <label class="col-2">Xác nhận mật khẩu</label>
                            <input type="password" name="password_confirm" id="password_confirm" class="form-control col-10">
                        </div>
                        <div class="row mt-4">
                            <label class="col-2">Ngày sinh</label>
                            <input type="date" name="birthday" id="birthday" class="form-control col-10">
                        </div>
                        <div class="row mt-4">
                            <button class="btn btn-primary">Create</button>
                            <button class="btn btn-default">Cancel</button>
                        </div>
                    </form>
                </div>
            `;
        }
        afterRender() {
            document.querySelector("#form_create").addEventListener("submit", (e) => {
                e.preventDefault();
                //Cách 1: Type Casting: < >
                // const inputName = <HTMLInputElement>document.querySelector("#name");
                //Cách 2: as
                const inputName = document.querySelector("#name");
                const name = inputName.value;
                const inputEmail = document.querySelector("#email");
                const email = inputEmail.value;
                const inputPassword = document.querySelector("#password");
                const password = inputPassword.value;
                const inputPasswordConfirm = document.querySelector("#password_confirm");
                const password_confirm = inputPasswordConfirm.value;
                const inputBirthday = document.querySelector("#birthday");
                const birthdayStr = inputBirthday.value;
                const birthday = new Date(birthdayStr);
                if (password != password_confirm) {
                    alert("Mật khẩu chưa trùng nhau");
                }
                let user = new App.User(0, name, email, password, birthday);
            });
        }
    }
    App.UserCreate = UserCreate;
})(App || (App = {}));
///<reference path="./../Components.ts">
///<reference path="./../../Model/User.ts">
var App;
(function (App) {
    class UserIndex extends App.Component {
        constructor() {
            super();
            this.listUser = [];
            this.fakeData();
        }
        fakeData() {
            let u1 = new App.User(1, "Nguyễn Văn A", "anvph1@gmail.com", "123456", new Date(1998, 5, 12));
            let u2 = new App.User(1, "Nguyễn Văn B", "bnvph1@gmail.com", "123456", new Date());
            let u3 = new App.User(1, "Nguyễn Văn C", "cnvph1@gmail.com", "123456", new Date());
            this.listUser.push(u1);
            this.listUser.push(u2);
            this.listUser.push(u3);
        }
        template() {
            return `
                <div class="col-10 offset-1 mt-5 text-center">
                    <div class="row">
                        <div class="col-6">
                            <a class="btn btn-success">Create</a>
                        </div>
                        <div class="col-6">
                            
                        </div>  
                    </div>
                    <table class="table table-hover ">
                        <thead>
                            <tr>
                                <td>Id</td>
                                <td>Họ tên</td>
                                <td>Email</td>
                                <td>Ngày sinh</td>
                                <td colspan="2">Thao tác</td>
                            </tr>
                        </thead>
                        <tbody id="tbl_users"></tbody>
                    </table>
                </div>
            `;
        }
        afterRender() {
            console.log("User Index@afterRender");
            const tbodyContents = this.listUser
                .map((value, key) => {
                return `
                    <tr>
                        <td>${value.id}</td>
                        <td>${value.name}</td>
                        <td>${value.email}</td>
                        <td>${value.birthday}</td>
                        <td>
                            <a class="btn btn-primary">Update</a>
                        </td>
                        <td>
                            <a class="btn btn-danger">Delete</a>
                        </td>
                    </tr>
                `;
            })
                .join("");
            document.querySelector("#tbl_users").innerHTML = tbodyContents;
        }
    }
    App.UserIndex = UserIndex;
})(App || (App = {}));
var App;
(function (App) {
    class User {
        constructor(_id, _name, _email, _password, _birthday) {
            this._id = _id;
            this._name = _name;
            this._email = _email;
            this._password = _password;
            this._birthday = _birthday;
        }
        get id() {
            return this._id;
        }
        set id(_id) {
            this._id = _id;
        }
        get name() {
            return this._name;
        }
        set name(_name) {
            this._name = _name;
        }
        get email() {
            return this._email;
        }
        set email(_email) {
            this._email = _email;
        }
        get password() {
            return this._password;
        }
        set password(_password) {
            this._password = _password;
        }
        get birthday() {
            return this._birthday;
        }
        set birthday(_birthday) {
            this._birthday = _birthday;
        }
    }
    App.User = User;
})(App || (App = {}));
