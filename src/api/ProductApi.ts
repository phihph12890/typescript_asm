import { Product } from "../Models/Product.js";

export class ProductApi {
    public static list() {
        const url: string = "http://localhost:3000/products?_expand=category";
        return fetch(url, {
            method: "GET",
        });
    }
    public static read(id: string) {
        const url: string = `http://localhost:3000/products/${id}`;
        return fetch(url, {
            method: "GET",
        });
    }
    public static add(pro: Product) {
        console.log(pro);
        const url: string = `http://localhost:3000/products?_expand=category`;
        const data = {
            name: pro.name,
            categoryId: pro.categoryId,
            price: pro.price,
            priceSale: pro.priceSale,
            image: pro.image,
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
            id: newPro.id,
            name: newPro.name,
            categoryId: newPro.categoryId,
            price: newPro.price,
            priceSale: newPro.priceSale,
            image: newPro.image,
        };
        return fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
    }
    public static remove(id: any) {
        const url: string = `http://localhost:3000/products/${id}`;
        return fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
    public static sortPrice(level: any) {
        const url = `http://localhost:3000/products?_sort=priceSale&_order=${level}`;
        return fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
    public static filterPrice(price1: any, price2: any) {
        const url = `http://localhost:3000/products?priceSale_gte=${price1}&priceSale_lte=${price2}`;
        return fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
    public static search(textSearch:any) {
        const url = `http://localhost:3000/products?name_like=${textSearch}`;
        return fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
}
