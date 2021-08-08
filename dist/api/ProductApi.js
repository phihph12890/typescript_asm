var ProductApi = /** @class */ (function () {
    function ProductApi() {
    }
    ProductApi.all = function () {
        var url = "http://localhost:3000/products?_expand=category";
        return fetch(url, {
            method: "GET",
        });
    };
    ProductApi.find = function (id) {
        var url = "http://localhost:3000/products/" + id;
        return fetch(url, {
            method: "GET",
        });
    };
    ProductApi.create = function (pro) {
        console.log(pro);
        var url = "http://localhost:3000/products?_expand=category";
        var data = {
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
    };
    ProductApi.update = function (id, newPro) {
        var url = "http://localhost:3000/products/" + id;
        var data = {
            id: newPro.id,
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
    };
    ProductApi.delete = function (id) {
        var url = "http://localhost:3000/products/" + id;
        return fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
    };
    return ProductApi;
}());
export { ProductApi };
