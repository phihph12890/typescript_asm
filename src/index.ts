import { Component } from "./Components/Component.js";
import { CategoryIndex } from "./Components/Categories/CategoryIndex.js";
import { CategoryCreate } from "./Components/Categories/CategoryCreate.js";
import { CategoryEdit } from "./Components/Categories/CategoryEdit.js";

import { ProductCreate } from "./Components/Products/ProductCreate.js";
import { ProductIndex } from "./Components/Products/ProductIndex.js";
import { ProductEdit } from "./Components/Products/ProductEdit.js";

import { UserCreate } from "./Components/Users/UserCreate.js";
import { UserIndex } from "./Components/Users/UserIndex.js";
import { UserEdit } from "./Components/Users/UserEdit.js";

import { OrderIndex } from "./Components/Orders/OrderIndex.js";
import { OrderEdit } from "./Components/Orders/OrderEdit.js";
import { OrderDetailAdmin } from "./Components/Orders/OrderDetailAdmin.js";

import { HomePage } from "./Components/pages/HomePage.js";
import { CategoryPage } from "./Components/pages/CategoryPage.js";
import { ShopCartPage } from "./Components/pages/ShopCartPage.js";
import { ProductSearch } from "./Components/pages/ProductSearch.js";
import { AboutPage } from "./Components/pages/AboutPage.js";
import { ContactPage } from "./Components/pages/ContactPage.js";
import { SignupPage } from "./Components/pages/SignupPage.js";
import { SigninPage } from "./Components/pages/SigninPage.js";
import { OrderPage } from "./Components/pages/OrderPage.js";
import { OrderDetailPage } from "./Components/pages/OrderDetailPage.js";

import {isAuthenticated} from "./ultis.js";

declare const window: any;

type Route = {
    name: string;
    path: string | RegExp;
};
type Match = {
    url: string;
    queryString: string;
    hashString: string;
    route: Route;
    data: { [key: string]: string } | null;
    params: { [key: string]: string } | null;
};

let routes;
if(isAuthenticated() == false){
    routes = () => {
        window.router
            .on("/categories/index", async () => {
                alert("Không phải ADMIN, từ chối quyền truy cập!")
                const gui: Component = new HomePage();
                await gui.render();
                // gui.afterRender();
            })
            .on("/categories/create", () => {
                alert("Không phải ADMIN, từ chối quyền truy cập!")
                const gui: Component = new HomePage();
                gui.render();
            })
            .on("/categories/edit/:id", async (params: Match) => {
                alert("Không phải ADMIN, từ chối quyền truy cập!")
                const id = params?.data?.id; //Kiểm tra trong params có data hay không?
                const gui: Component = new HomePage();
                await gui.render();
                gui.afterRender();
            })
            .on("/products/index", async () => {
                alert("Không phải ADMIN, từ chối quyền truy cập!")
                const gui: Component = new HomePage();
                await gui.render();
                gui.afterRender();
            })
            .on("/products/create", () => {
                alert("Không phải ADMIN, từ chối quyền truy cập!")
                const gui: Component = new HomePage();
                gui.render();
            })
            .on("/products/edit/:id", async (params: Match) => {
                alert("Không phải ADMIN, từ chối quyền truy cập!")
                const id = params?.data?.id; //Kiểm tra trong params có data hay không?
                const gui: Component = new HomePage();
                await gui.render();
                gui.afterRender();
            })
            .on("/users/index", async () => {
                alert("Không phải ADMIN, từ chối quyền truy cập!")
                const gui: Component = new HomePage();
                await gui.render();
                gui.afterRender();
            })
            .on("/users/create", () => {
                alert("Không phải ADMIN, từ chối quyền truy cập!")
                const gui: Component = new HomePage();
                gui.render();
            })
            .on("/users/edit/:id", async (params: Match) => {
                alert("Không phải ADMIN, từ chối quyền truy cập!")
                const id = params?.data?.id; //Kiểm tra trong params có data hay không?
                const gui: Component = new HomePage();
                await gui.render();
                gui.afterRender();
            })
            .on("/orders/index", async () => {
                alert("Không phải ADMIN, từ chối quyền truy cập!")
                const gui: Component = new HomePage();
                await gui.render();
                gui.afterRender();
            })
            .on("/orders/edit/:id", async (params: Match) => {
                alert("Không phải ADMIN, từ chối quyền truy cập!")
                const id = params?.data?.id; //Kiểm tra trong params có data hay không?
                const gui: Component = new HomePage();
                await gui.render();
                gui.afterRender();
            })
            .on("/orders/detailadmin/:id", async (params: Match) => {
                alert("Không phải ADMIN, từ chối quyền truy cập!")
                const id = params?.data?.id; //Kiểm tra trong params có data hay không?
                const gui: Component = new HomePage();
                await gui.render();
                // gui.afterRender();
            })
            .on("/", async () => {
                const gui: Component = new HomePage();
                await gui.render();
                gui.afterRender();
            })
            .on("/category/:id", async (params: Match) => {
                const id = params?.data?.id;
                const gui: Component = new CategoryPage(id);
                await gui.render();
                gui.afterRender();
            })
            .on("/shopcart", async () => {
                const gui: Component = new ShopCartPage();
                await gui.render();
                // gui.afterRender();
            })
            .on("/search/:id", async (params: Match) => {
                const id = params?.data?.id;
                const gui: Component = new ProductSearch(id);
                await gui.render();
                gui.afterRender();
            })
            .on("/about", async () => {
                const gui: Component = new AboutPage();
                await gui.render();
                gui.afterRender();
            })
            .on("/contact", async () => {
                const gui: Component = new ContactPage();
                await gui.render();
                gui.afterRender();
            })
            .on("/signup", async () => {
                const gui: Component = new SignupPage();
                await gui.render();
                // gui.afterRender();
            })
            .on("/signin", async () => {
                const gui: Component = new SigninPage();
                await gui.render();
                // gui.afterRender();
            })
            .on("/order", async () => {
                const gui: Component = new OrderPage();
                await gui.render();
            })
            .on("/orderdetail/:id", async (params: Match) => {
                const id = params?.data?.id; //Kiểm tra trong params có data hay không?
                const gui: Component = new OrderDetailPage(id);
                await gui.render();
                // gui.afterRender();
            })
            .resolve();
    };
} else {
    if(isAuthenticated().permission == "KHÁCH HÀNG"){
        routes = () => {
            window.router
                .on("/categories/index", async () => {
                    alert("Không phải ADMIN, từ chối quyền truy cập!")
                    const gui: Component = new HomePage();
                    await gui.render();
                    // gui.afterRender();
                })
                .on("/categories/create", () => {
                    alert("Không phải ADMIN, từ chối quyền truy cập!")
                    const gui: Component = new HomePage();
                    gui.render();
                })
                .on("/categories/edit/:id", async (params: Match) => {
                    alert("Không phải ADMIN, từ chối quyền truy cập!")
                    const id = params?.data?.id; //Kiểm tra trong params có data hay không?
                    const gui: Component = new HomePage();
                    await gui.render();
                    gui.afterRender();
                })
                .on("/products/index", async () => {
                    alert("Không phải ADMIN, từ chối quyền truy cập!")
                    const gui: Component = new HomePage();
                    await gui.render();
                    gui.afterRender();
                })
                .on("/products/create", () => {
                    alert("Không phải ADMIN, từ chối quyền truy cập!")
                    const gui: Component = new HomePage();
                    gui.render();
                })
                .on("/products/edit/:id", async (params: Match) => {
                    alert("Không phải ADMIN, từ chối quyền truy cập!")
                    const id = params?.data?.id; //Kiểm tra trong params có data hay không?
                    const gui: Component = new HomePage();
                    await gui.render();
                    gui.afterRender();
                })
                .on("/users/index", async () => {
                    alert("Không phải ADMIN, từ chối quyền truy cập!")
                    const gui: Component = new HomePage();
                    await gui.render();
                    gui.afterRender();
                })
                .on("/users/create", () => {
                    alert("Không phải ADMIN, từ chối quyền truy cập!")
                    const gui: Component = new HomePage();
                    gui.render();
                })
                .on("/users/edit/:id", async (params: Match) => {
                    alert("Không phải ADMIN, từ chối quyền truy cập!")
                    const id = params?.data?.id; //Kiểm tra trong params có data hay không?
                    const gui: Component = new HomePage();
                    await gui.render();
                    gui.afterRender();
                })
                .on("/orders/index", async () => {
                    alert("Không phải ADMIN, từ chối quyền truy cập!")
                    const gui: Component = new HomePage();
                    await gui.render();
                    gui.afterRender();
                })
                .on("/orders/edit/:id", async (params: Match) => {
                    alert("Không phải ADMIN, từ chối quyền truy cập!")
                    const id = params?.data?.id; //Kiểm tra trong params có data hay không?
                    const gui: Component = new HomePage();
                    await gui.render();
                    gui.afterRender();
                })
                .on("/orders/detailadmin/:id", async (params: Match) => {
                    alert("Không phải ADMIN, từ chối quyền truy cập!")
                    const id = params?.data?.id; //Kiểm tra trong params có data hay không?
                    const gui: Component = new HomePage();
                    await gui.render();
                    // gui.afterRender();
                })
                .on("/", async () => {
                    const gui: Component = new HomePage();
                    await gui.render();
                    gui.afterRender();
                })
                .on("/category/:id", async (params: Match) => {
                    const id = params?.data?.id;
                    const gui: Component = new CategoryPage(id);
                    await gui.render();
                    gui.afterRender();
                })
                .on("/shopcart", async () => {
                    const gui: Component = new ShopCartPage();
                    await gui.render();
                    // gui.afterRender();
                })
                .on("/search/:id", async (params: Match) => {
                    const id = params?.data?.id;
                    const gui: Component = new ProductSearch(id);
                    await gui.render();
                    gui.afterRender();
                })
                .on("/about", async () => {
                    const gui: Component = new AboutPage();
                    await gui.render();
                    gui.afterRender();
                })
                .on("/contact", async () => {
                    const gui: Component = new ContactPage();
                    await gui.render();
                    gui.afterRender();
                })
                .on("/signup", async () => {
                    const gui: Component = new SignupPage();
                    await gui.render();
                    // gui.afterRender();
                })
                .on("/signin", async () => {
                    const gui: Component = new SigninPage();
                    await gui.render();
                    // gui.afterRender();
                })
                .on("/order", async () => {
                    const gui: Component = new OrderPage();
                    await gui.render();
                })
                .on("/orderdetail/:id", async (params: Match) => {
                    const id = params?.data?.id; //Kiểm tra trong params có data hay không?
                    const gui: Component = new OrderDetailPage(id);
                    await gui.render();
                    // gui.afterRender();
                })
                .resolve();
        };
    } else {
        routes = () => {
            window.router
                .on("/categories/index", async () => {
                    const gui: Component = new CategoryIndex();
                    await gui.render();
                    gui.afterRender();
                })
                .on("/categories/create", () => {
                    const gui: Component = new CategoryCreate();
                    gui.render();
                })
                .on("/categories/edit/:id", async (params: Match) => {
                    const id = params?.data?.id; //Kiểm tra trong params có data hay không?
                    const gui: Component = new CategoryEdit(id);
                    await gui.render();
                    gui.afterRender();
                })
                .on("/products/index", async () => {
                    const gui: Component = new ProductIndex();
                    await gui.render();
                    gui.afterRender();
                })
                .on("/products/create", () => {
                    const gui: Component = new ProductCreate();
                    gui.render();
                })
                .on("/products/edit/:id", async (params: Match) => {
                    const id = params?.data?.id; //Kiểm tra trong params có data hay không?
                    const gui: Component = new ProductEdit(id);
                    await gui.render();
                    gui.afterRender();
                })
                .on("/users/index", async () => {
                    const gui: Component = new UserIndex();
                    await gui.render();
                    gui.afterRender();
                })
                .on("/users/create", () => {
                    const gui: Component = new UserCreate();
                    gui.render();
                })
                .on("/users/edit/:id", async (params: Match) => {
                    const id = params?.data?.id; //Kiểm tra trong params có data hay không?
                    const gui: Component = new UserEdit(id);
                    await gui.render();
                    gui.afterRender();
                })
                .on("/orders/index", async () => {
                    const gui: Component = new OrderIndex();
                    await gui.render();
                    gui.afterRender();
                })
                .on("/orders/edit/:id", async (params: Match) => {
                    const id = params?.data?.id; //Kiểm tra trong params có data hay không?
                    const gui: Component = new OrderEdit(id);
                    await gui.render();
                    gui.afterRender();
                })
                .on("/orders/detailadmin/:id", async (params: Match) => {
                    const id = params?.data?.id; //Kiểm tra trong params có data hay không?
                    const gui: Component = new OrderDetailAdmin(id);
                    await gui.render();
                    // gui.afterRender();
                })
                .on("/", async () => {
                    const gui: Component = new HomePage();
                    await gui.render();
                    gui.afterRender();
                })
                .on("/category/:id", async (params: Match) => {
                    const id = params?.data?.id;
                    const gui: Component = new CategoryPage(id);
                    await gui.render();
                    gui.afterRender();
                })
                .on("/shopcart", async () => {
                    const gui: Component = new ShopCartPage();
                    await gui.render();
                    // gui.afterRender();
                })
                .on("/search/:id", async (params: Match) => {
                    const id = params?.data?.id;
                    const gui: Component = new ProductSearch(id);
                    await gui.render();
                    gui.afterRender();
                })
                .on("/about", async () => {
                    const gui: Component = new AboutPage();
                    await gui.render();
                    gui.afterRender();
                })
                .on("/contact", async () => {
                    const gui: Component = new ContactPage();
                    await gui.render();
                    gui.afterRender();
                })
                .on("/signup", async () => {
                    const gui: Component = new SignupPage();
                    await gui.render();
                    // gui.afterRender();
                })
                .on("/signin", async () => {
                    const gui: Component = new SigninPage();
                    await gui.render();
                    // gui.afterRender();
                })
                .on("/order", async () => {
                    const gui: Component = new OrderPage();
                    await gui.render();
                })
                .on("/orderdetail/:id", async (params: Match) => {
                    const id = params?.data?.id; //Kiểm tra trong params có data hay không?
                    const gui: Component = new OrderDetailPage(id);
                    await gui.render();
                    // gui.afterRender();
                })
                .resolve();
        };
    }
}
routes();
