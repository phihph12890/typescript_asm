export var prices = function (x) {
    return (x = x.toLocaleString("it-IT", {
        style: "currency",
        currency: "VND",
    }));
};
