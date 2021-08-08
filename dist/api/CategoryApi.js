var CategoryApi = /** @class */ (function () {
    function CategoryApi() {
    }
    CategoryApi.list = function () {
        var url = "http://localhost:3000/categories";
        return fetch(url, {
            method: "GET",
        });
    };
    CategoryApi.read = function (id) {
        var url = "http://localhost:3000/categories/" + id;
        return fetch(url, {
            method: "GET",
        });
    };
    CategoryApi.add = function (cate) {
        var url = "http://localhost:3000/categories";
        var data = {
            name: cate.name
        };
        return fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
    };
    CategoryApi.update = function (id, newCate) {
        var url = "http://localhost:3000/categories/" + id;
        var data = {
            name: newCate.name
        };
        return fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
    };
    CategoryApi.remove = function (id) {
        var url = "http://localhost:3000/categories/" + id;
        return fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
    };
    CategoryApi.listRelated = function (id) {
        var url = "http://localhost:3000/categories?id_ne=" + id;
        return fetch(url, {
            method: "GET",
        });
    };
    return CategoryApi;
}());
export { CategoryApi };
