var userApi = /** @class */ (function () {
    function userApi() {
    }
    userApi.all = function () {
        var url = "http://localhost:3000/users";
        return fetch(url, {
            method: "GET",
        });
    };
    userApi.find = function (id) {
        var url = "http://localhost:3000/users/" + id;
        return fetch(url, {
            method: "GET",
        });
    };
    userApi.create = function (user) {
        var url = "http://localhost:3000/users";
        var data = {
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.password,
            birthday: user.birthday,
        };
        return fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
    };
    userApi.update = function (id, newUser) {
        var url = "http://localhost:3000/users/" + id;
        var data = {
            id: newUser.id,
            name: newUser.name,
            email: newUser.email,
            password: newUser.password,
            birthday: newUser.birthday,
        };
        return fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
    };
    userApi.delete = function (id) {
        var url = "http://localhost:3000/users/" + id;
        return fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
    };
    return userApi;
}());
export { userApi };
