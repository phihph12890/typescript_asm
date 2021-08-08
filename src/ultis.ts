export const prices = (x: any) => {
    return (x = x.toLocaleString("it-IT", {
        style: "currency",
        currency: "VND",
    }));
};
