import { Category } from "../Models/Category.js";

export class CategoryApi {
    public static all() {
        const url: string = "http://localhost:3000/categories";
        return fetch(url, {
            method: "GET",
        });
    }
    public static find(id: string) {
        const url: string = `http://localhost:3000/categories/${id}`;
        return fetch(url, {
            method: "GET",
        });
    }
    public static create(cate: Category) {
        const url: string = `http://localhost:3000/categories`;
        const data = {
            name: cate.name
        };
        return fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
    }
    public static update(id: any, newCate: Category) {
        const url: string = `http://localhost:3000/categories/${id}`;
        const data = {
            name: newCate.name
        };
        return fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
    }
    public static delete(id: any) {
        const url: string = `http://localhost:3000/categories/${id}`;
        return fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
    public static listRelated(id:any){
        const url: string = `http://localhost:3000/categories?id_ne=${id}`;
        return fetch(url, {
            method: "GET",
        });
    }
}
