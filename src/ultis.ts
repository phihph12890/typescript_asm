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
// export const authenticated = (accessToken:any) => {
//     const user = jwt_decode(accessToken);
//     if (typeof window !== 'undefined') {
//         return localStorage.setItem('user', JSON.stringify(user));
//     }
// }
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
export const logout = () => {
    if (localStorage.getItem("user")) {
        return localStorage.removeItem("user");
    }
};
export const clickLogout = () => {
    if (document.querySelector("#logout") != undefined) {
        (document.querySelector("#logout") as HTMLElement).onclick = () => {
            logout();
            localStorage.removeItem("cartNumber");
            localStorage.removeItem("cart");
            localStorage.removeItem("totalPrice");
            window.location.hash = "/signin";
        };
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
export const addToCart = (id: number, name: string, image: string, price: number, cateId: string) => {
    let cartStorage = localStorage.getItem("cart");
    let screenCart = null;
    if (cartStorage == null) {
        screenCart = [];
    } else {
        screenCart = JSON.parse(cartStorage);
        console.log(screenCart);
    }

    let item = {
        id: id,
        name: name,
        image: image,
        price: price,
        cateId: cateId,
        quantity: 1,
    };

    let existed = screenCart.findIndex((ele: any) => ele.id == item.id);
    if (existed == -1) {
        item.quantity = 1;
        screenCart.push(item);
    } else {
        console.log(screenCart);
        screenCart[existed].quantity++;
    }
    console.log(item);
    localStorage.setItem("cart", JSON.stringify(screenCart));
    alert("Thêm giỏ hàng thành công");
};

export const getTotalItemOnCart = () => {
    let cartStorage = localStorage.getItem("cart");
    let screenCart = null;
    if (cartStorage == null) {
        screenCart = [];
    } else {
        screenCart = JSON.parse(cartStorage);
    }
    let totalItems = 0;
    screenCart.forEach((element: any) => {
        totalItems += element.quantity;
    });
    let totalItemss: string = String(totalItems);
    localStorage.setItem("cartNumber", totalItemss);
    return totalItems;
};
export const onLoadCartNumber = () => {
    let cartNumber = localStorage.getItem("cartNumber");
    $$("#totalCart").textContent = cartNumber;
};

