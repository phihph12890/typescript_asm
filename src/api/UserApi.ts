import { User } from "../Models/User.js";

export class UserApi {
    public static signup(user: User) {
        const url: string = `http://localhost:3000/signup`;
        const data = {
            name: user.name,
            email: user.email,
            password: user.password,
            permission: user.permission,
        };
        return fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
    }
    public static signin(data: any) {
        const url: string = `http://localhost:3000/signin`;
        return fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
    }
    public static list() {
        const url: string = "http://localhost:3000/users";
        return fetch(url, {
            method: "GET",
        });
    }
    public static read(id: string) {
        const url: string = `http://localhost:3000/users/${id}`;
        return fetch(url, {
            method: "GET",
        });
    }
    public static update(id: any, newUser: User) {
        const url: string = `http://localhost:3000/users/${id}`;
        const data = {
            name: newUser.name,
            email: newUser.email,
            password: newUser.password,
            permission: newUser.permission,
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
        const url: string = `http://localhost:3000/users/${id}`;
        return fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
}
