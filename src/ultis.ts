export const $$ = (selector: any) => {
    let elements = document.querySelectorAll(selector);
    return elements.length == 1 ? elements[0] : [...elements];
};
export const prices = (x: any) => {
    return (x = x.toLocaleString("it-IT", {
        style: "currency",
        currency: "VND",
    }));
};
export const reRender = async (component: any, position = "") => {
    // position = #list-products
    // component = ListProduct -> #list-product
    if (position) {
        console.log(component);
        $$(position).innerHTML = await component.render();
        console.log(position);
    } else {
        $$("#content").innerHTML = await component.render();
    }
    await component.afterRender();
};
export const isAuthenticated = () => {
    if (typeof window == "undefined") {
        return false;
    }
    if (localStorage.getItem("user")) {
        return JSON.parse(localStorage.getItem("user")!);
    } else {
        return false;
    }
};
export const productSearch = () => {
    if ($$("#btn_search")) {
        $$("#btn_search").addEventListener("click", (e: any) => {
            e.preventDefault();

            const textSearch = $$("#inputSearch").value;
            window.location.hash = `/search/${textSearch}`;
        });
    }
};
