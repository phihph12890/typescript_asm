import { Order } from "../Models/Order.js";

export class OrderApi {
    public static list() {
        const url: string = "http://localhost:3000/orders";
        return fetch(url, {
            method: "GET",
        });
    }
    public static read(id: string) {
        const url: string = `http://localhost:3000/orders/${id}`;
        return fetch(url, {
            method: "GET",
        });
    }
    public static add(ord: Order) {
        console.log(ord);
        const url: string = `http://localhost:3000/orders`;
        const data = {
            userId: ord.userId,
            name: ord.name,
            email: ord.email,
            address: ord.address,
            phoneNumber: ord.phoneNumber,
            note: ord.note,
            totalPrice: ord.totalPrice,
            cartNumber: ord.cartNumber,
            cart: ord.cart,
            status: ord.status,
            create_at: ord.create_at
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
    public static update(id: any, newOrd: Order) {
        const url: string = `http://localhost:3000/orders/${id}`;
        const data = {
            userId: newOrd.userId,
            name: newOrd.name,
            email: newOrd.email,
            address: newOrd.address,
            phoneNumber: newOrd.phoneNumber,
            note: newOrd.note,
            totalPrice: newOrd.totalPrice,
            cartNumber: newOrd.cartNumber,
            cart: newOrd.cart,
            status: newOrd.status,
            create_at: newOrd.create_at
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
        const url: string = `http://localhost:3000/orders/${id}`;
        return fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
}
