import { Product } from "../Models/Product.js";

export class ProductApi {
    public static all() {
        const url: string = "http://localhost:3000/products";
        return fetch(url, {
            method: "GET",
        });
    }
    public static find(id: string) {
        const url: string = `http://localhost:3000/products/${id}`;
        return fetch(url, {
            method: "GET",
        });
    }
    public static create(pro: Product) {
        console.log(pro);
        const url: string = `http://localhost:3000/products?_expand=category`;
        const data = {
            name: pro.name,
            categoryId: pro.categoryId,
            price: pro.price,
            priceSale: pro.priceSale,
            image: pro.image
        };
        console.log(data);
        return fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
    }
    public static update(id: any, newPro: Product) {
        const url: string = `http://localhost:3000/products/${id}`;
        const data = {
            name: newPro.name,
            categoryId: newPro.categoryId,
            price: newPro.price,
            priceSale: newPro.priceSale,
            image: newPro.image
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
        const url: string = `http://localhost:3000/products/${id}`;
        return fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
}
