var OrderApi = /** @class */ (function () {
    function OrderApi() {
    }
    OrderApi.list = function () {
        var url = "http://localhost:3000/orders";
        return fetch(url, {
            method: "GET",
        });
    };
    OrderApi.read = function (id) {
        var url = "http://localhost:3000/orders/" + id;
        return fetch(url, {
            method: "GET",
        });
    };
    OrderApi.add = function (ord) {
        console.log(ord);
        var url = "http://localhost:3000/orders";
        var data = {
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
    };
    OrderApi.update = function (id, newOrd) {
        var url = "http://localhost:3000/orders/" + id;
        var data = {
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
    };
    OrderApi.remove = function (id) {
        var url = "http://localhost:3000/orders/" + id;
        return fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
    };
    OrderApi.getByUser = function (id) {
        var url = "http://localhost:3000/orders?userId=" + id;
        return fetch(url, {
            method: "GET",
        });
    };
    return OrderApi;
}());
export { OrderApi };
