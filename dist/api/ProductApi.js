var ProductApi = /** @class */ (function () {
    function ProductApi() {
    }
    ProductApi.list = function () {
        var url = "http://localhost:3000/products?_expand=category";
        return fetch(url, {
            method: "GET",
        });
    };
    ProductApi.read = function (id) {
        var url = "http://localhost:3000/products/" + id;
        return fetch(url, {
            method: "GET",
        });
    };
    ProductApi.add = function (pro) {
        console.log(pro);
        var url = "http://localhost:3000/products?_expand=category";
        var data = {
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
    };
    ProductApi.update = function (id, newPro) {
        var url = "http://localhost:3000/products/" + id;
        var data = {
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
    };
    ProductApi.remove = function (id) {
        var url = "http://localhost:3000/products/" + id;
        return fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
    };
    ProductApi.sortPrice = function (level) {
        var url = "http://localhost:3000/products?_sort=priceSale&_order=" + level;
        return fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
    };
    ProductApi.filterPrice = function (price1, price2) {
        var url = "http://localhost:3000/products?priceSale_gte=" + price1 + "&priceSale_lte=" + price2;
        return fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
    };
    ProductApi.search = function (textSearch) {
        var url = "http://localhost:3000/products?name_like=" + textSearch;
        return fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
    };
    return ProductApi;
}());
export { ProductApi };
