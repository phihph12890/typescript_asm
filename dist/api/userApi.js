var UserApi = /** @class */ (function () {
    function UserApi() {
    }
    UserApi.signup = function (user) {
        var url = "http://localhost:3000/signup";
        var data = {
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
    };
    UserApi.signin = function (data) {
        var url = "http://localhost:3000/signin";
        return fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
    };
    UserApi.list = function () {
        var url = "http://localhost:3000/users";
        return fetch(url, {
            method: "GET",
        });
    };
    UserApi.read = function (id) {
        var url = "http://localhost:3000/users/" + id;
        return fetch(url, {
            method: "GET",
        });
    };
    UserApi.update = function (id, newUser) {
        var url = "http://localhost:3000/users/" + id;
        var data = {
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
    };
    UserApi.remove = function (id) {
        var url = "http://localhost:3000/users/" + id;
        return fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
    };
    return UserApi;
}());
export { UserApi };
