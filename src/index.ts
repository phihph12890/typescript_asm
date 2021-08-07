import { Component } from "./Components/Component.js";
import { CategoryIndex } from "./Components/Categories/CategoryIndex.js";
import { CategoryCreate } from "./Components/Categories/CategoryCreate.js";
import { CategoryEdit } from "./Components/Categories/CategoryEdit.js";

import { ProductCreate } from "./Components/Products/ProductCreate.js";
import { ProductIndex } from "./Components/Products/ProductIndex.js";
import { ProductEdit } from "./Components/Products/ProductEdit.js";



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

const routes = () => {
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
        .resolve()
        
};
routes();