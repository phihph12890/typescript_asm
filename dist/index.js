var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { CategoryIndex } from "./Components/Categories/CategoryIndex.js";
import { CategoryCreate } from "./Components/Categories/CategoryCreate.js";
import { CategoryEdit } from "./Components/Categories/CategoryEdit.js";
import { ProductCreate } from "./Components/Products/ProductCreate.js";
import { ProductIndex } from "./Components/Products/ProductIndex.js";
import { ProductEdit } from "./Components/Products/ProductEdit.js";
import { UserCreate } from "./Components/Users/UserCreate.js";
import { UserIndex } from "./Components/Users/UserIndex.js";
import { UserEdit } from "./Components/Users/UserEdit.js";
import { OrderIndex } from "./Components/Orders/OrderIndex.js";
import { OrderEdit } from "./Components/Orders/OrderEdit.js";
import { OrderDetailAdmin } from "./Components/Orders/OrderDetailAdmin.js";
import { HomePage } from "./Components/pages/HomePage.js";
import { CategoryPage } from "./Components/pages/CategoryPage.js";
import { ShopCartPage } from "./Components/pages/ShopCartPage.js";
import { ProductSearch } from "./Components/pages/ProductSearch.js";
import { AboutPage } from "./Components/pages/AboutPage.js";
import { ContactPage } from "./Components/pages/ContactPage.js";
import { SignupPage } from "./Components/pages/SignupPage.js";
import { SigninPage } from "./Components/pages/SigninPage.js";
import { OrderPage } from "./Components/pages/OrderPage.js";
import { OrderDetailPage } from "./Components/pages/OrderDetailPage.js";
import { isAuthenticated } from "./ultis.js";
var routes;
if (isAuthenticated() == false) {
    routes = function () {
        window.router
            .on("/categories/index", function () { return __awaiter(void 0, void 0, void 0, function () {
            var gui;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        alert("Không phải ADMIN, từ chối quyền truy cập!");
                        gui = new HomePage();
                        return [4 /*yield*/, gui.render()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); })
            .on("/categories/create", function () {
            alert("Không phải ADMIN, từ chối quyền truy cập!");
            var gui = new HomePage();
            gui.render();
        })
            .on("/categories/edit/:id", function (params) { return __awaiter(void 0, void 0, void 0, function () {
            var id, gui;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        alert("Không phải ADMIN, từ chối quyền truy cập!");
                        id = (_a = params === null || params === void 0 ? void 0 : params.data) === null || _a === void 0 ? void 0 : _a.id;
                        gui = new HomePage();
                        return [4 /*yield*/, gui.render()];
                    case 1:
                        _b.sent();
                        gui.afterRender();
                        return [2 /*return*/];
                }
            });
        }); })
            .on("/products/index", function () { return __awaiter(void 0, void 0, void 0, function () {
            var gui;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        alert("Không phải ADMIN, từ chối quyền truy cập!");
                        gui = new HomePage();
                        return [4 /*yield*/, gui.render()];
                    case 1:
                        _a.sent();
                        gui.afterRender();
                        return [2 /*return*/];
                }
            });
        }); })
            .on("/products/create", function () {
            alert("Không phải ADMIN, từ chối quyền truy cập!");
            var gui = new HomePage();
            gui.render();
        })
            .on("/products/edit/:id", function (params) { return __awaiter(void 0, void 0, void 0, function () {
            var id, gui;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        alert("Không phải ADMIN, từ chối quyền truy cập!");
                        id = (_a = params === null || params === void 0 ? void 0 : params.data) === null || _a === void 0 ? void 0 : _a.id;
                        gui = new HomePage();
                        return [4 /*yield*/, gui.render()];
                    case 1:
                        _b.sent();
                        gui.afterRender();
                        return [2 /*return*/];
                }
            });
        }); })
            .on("/users/index", function () { return __awaiter(void 0, void 0, void 0, function () {
            var gui;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        alert("Không phải ADMIN, từ chối quyền truy cập!");
                        gui = new HomePage();
                        return [4 /*yield*/, gui.render()];
                    case 1:
                        _a.sent();
                        gui.afterRender();
                        return [2 /*return*/];
                }
            });
        }); })
            .on("/users/create", function () {
            alert("Không phải ADMIN, từ chối quyền truy cập!");
            var gui = new HomePage();
            gui.render();
        })
            .on("/users/edit/:id", function (params) { return __awaiter(void 0, void 0, void 0, function () {
            var id, gui;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        alert("Không phải ADMIN, từ chối quyền truy cập!");
                        id = (_a = params === null || params === void 0 ? void 0 : params.data) === null || _a === void 0 ? void 0 : _a.id;
                        gui = new HomePage();
                        return [4 /*yield*/, gui.render()];
                    case 1:
                        _b.sent();
                        gui.afterRender();
                        return [2 /*return*/];
                }
            });
        }); })
            .on("/orders/index", function () { return __awaiter(void 0, void 0, void 0, function () {
            var gui;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        alert("Không phải ADMIN, từ chối quyền truy cập!");
                        gui = new HomePage();
                        return [4 /*yield*/, gui.render()];
                    case 1:
                        _a.sent();
                        gui.afterRender();
                        return [2 /*return*/];
                }
            });
        }); })
            .on("/orders/edit/:id", function (params) { return __awaiter(void 0, void 0, void 0, function () {
            var id, gui;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        alert("Không phải ADMIN, từ chối quyền truy cập!");
                        id = (_a = params === null || params === void 0 ? void 0 : params.data) === null || _a === void 0 ? void 0 : _a.id;
                        gui = new HomePage();
                        return [4 /*yield*/, gui.render()];
                    case 1:
                        _b.sent();
                        gui.afterRender();
                        return [2 /*return*/];
                }
            });
        }); })
            .on("/orders/detailadmin/:id", function (params) { return __awaiter(void 0, void 0, void 0, function () {
            var id, gui;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        alert("Không phải ADMIN, từ chối quyền truy cập!");
                        id = (_a = params === null || params === void 0 ? void 0 : params.data) === null || _a === void 0 ? void 0 : _a.id;
                        gui = new HomePage();
                        return [4 /*yield*/, gui.render()];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        }); })
            .on("/", function () { return __awaiter(void 0, void 0, void 0, function () {
            var gui;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        gui = new HomePage();
                        return [4 /*yield*/, gui.render()];
                    case 1:
                        _a.sent();
                        gui.afterRender();
                        return [2 /*return*/];
                }
            });
        }); })
            .on("/category/:id", function (params) { return __awaiter(void 0, void 0, void 0, function () {
            var id, gui;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        id = (_a = params === null || params === void 0 ? void 0 : params.data) === null || _a === void 0 ? void 0 : _a.id;
                        gui = new CategoryPage(id);
                        return [4 /*yield*/, gui.render()];
                    case 1:
                        _b.sent();
                        gui.afterRender();
                        return [2 /*return*/];
                }
            });
        }); })
            .on("/shopcart", function () { return __awaiter(void 0, void 0, void 0, function () {
            var gui;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        gui = new ShopCartPage();
                        return [4 /*yield*/, gui.render()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); })
            .on("/search/:id", function (params) { return __awaiter(void 0, void 0, void 0, function () {
            var id, gui;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        id = (_a = params === null || params === void 0 ? void 0 : params.data) === null || _a === void 0 ? void 0 : _a.id;
                        gui = new ProductSearch(id);
                        return [4 /*yield*/, gui.render()];
                    case 1:
                        _b.sent();
                        gui.afterRender();
                        return [2 /*return*/];
                }
            });
        }); })
            .on("/about", function () { return __awaiter(void 0, void 0, void 0, function () {
            var gui;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        gui = new AboutPage();
                        return [4 /*yield*/, gui.render()];
                    case 1:
                        _a.sent();
                        gui.afterRender();
                        return [2 /*return*/];
                }
            });
        }); })
            .on("/contact", function () { return __awaiter(void 0, void 0, void 0, function () {
            var gui;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        gui = new ContactPage();
                        return [4 /*yield*/, gui.render()];
                    case 1:
                        _a.sent();
                        gui.afterRender();
                        return [2 /*return*/];
                }
            });
        }); })
            .on("/signup", function () { return __awaiter(void 0, void 0, void 0, function () {
            var gui;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        gui = new SignupPage();
                        return [4 /*yield*/, gui.render()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); })
            .on("/signin", function () { return __awaiter(void 0, void 0, void 0, function () {
            var gui;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        gui = new SigninPage();
                        return [4 /*yield*/, gui.render()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); })
            .on("/order", function () { return __awaiter(void 0, void 0, void 0, function () {
            var gui;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        gui = new OrderPage();
                        return [4 /*yield*/, gui.render()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); })
            .on("/orderdetail/:id", function (params) { return __awaiter(void 0, void 0, void 0, function () {
            var id, gui;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        id = (_a = params === null || params === void 0 ? void 0 : params.data) === null || _a === void 0 ? void 0 : _a.id;
                        gui = new OrderDetailPage(id);
                        return [4 /*yield*/, gui.render()];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        }); })
            .resolve();
    };
}
else {
    if (isAuthenticated().permission == "KHÁCH HÀNG") {
        routes = function () {
            window.router
                .on("/categories/index", function () { return __awaiter(void 0, void 0, void 0, function () {
                var gui;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            alert("Không phải ADMIN, từ chối quyền truy cập!");
                            gui = new HomePage();
                            return [4 /*yield*/, gui.render()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); })
                .on("/categories/create", function () {
                alert("Không phải ADMIN, từ chối quyền truy cập!");
                var gui = new HomePage();
                gui.render();
            })
                .on("/categories/edit/:id", function (params) { return __awaiter(void 0, void 0, void 0, function () {
                var id, gui;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            alert("Không phải ADMIN, từ chối quyền truy cập!");
                            id = (_a = params === null || params === void 0 ? void 0 : params.data) === null || _a === void 0 ? void 0 : _a.id;
                            gui = new HomePage();
                            return [4 /*yield*/, gui.render()];
                        case 1:
                            _b.sent();
                            gui.afterRender();
                            return [2 /*return*/];
                    }
                });
            }); })
                .on("/products/index", function () { return __awaiter(void 0, void 0, void 0, function () {
                var gui;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            alert("Không phải ADMIN, từ chối quyền truy cập!");
                            gui = new HomePage();
                            return [4 /*yield*/, gui.render()];
                        case 1:
                            _a.sent();
                            gui.afterRender();
                            return [2 /*return*/];
                    }
                });
            }); })
                .on("/products/create", function () {
                alert("Không phải ADMIN, từ chối quyền truy cập!");
                var gui = new HomePage();
                gui.render();
            })
                .on("/products/edit/:id", function (params) { return __awaiter(void 0, void 0, void 0, function () {
                var id, gui;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            alert("Không phải ADMIN, từ chối quyền truy cập!");
                            id = (_a = params === null || params === void 0 ? void 0 : params.data) === null || _a === void 0 ? void 0 : _a.id;
                            gui = new HomePage();
                            return [4 /*yield*/, gui.render()];
                        case 1:
                            _b.sent();
                            gui.afterRender();
                            return [2 /*return*/];
                    }
                });
            }); })
                .on("/users/index", function () { return __awaiter(void 0, void 0, void 0, function () {
                var gui;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            alert("Không phải ADMIN, từ chối quyền truy cập!");
                            gui = new HomePage();
                            return [4 /*yield*/, gui.render()];
                        case 1:
                            _a.sent();
                            gui.afterRender();
                            return [2 /*return*/];
                    }
                });
            }); })
                .on("/users/create", function () {
                alert("Không phải ADMIN, từ chối quyền truy cập!");
                var gui = new HomePage();
                gui.render();
            })
                .on("/users/edit/:id", function (params) { return __awaiter(void 0, void 0, void 0, function () {
                var id, gui;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            alert("Không phải ADMIN, từ chối quyền truy cập!");
                            id = (_a = params === null || params === void 0 ? void 0 : params.data) === null || _a === void 0 ? void 0 : _a.id;
                            gui = new HomePage();
                            return [4 /*yield*/, gui.render()];
                        case 1:
                            _b.sent();
                            gui.afterRender();
                            return [2 /*return*/];
                    }
                });
            }); })
                .on("/orders/index", function () { return __awaiter(void 0, void 0, void 0, function () {
                var gui;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            alert("Không phải ADMIN, từ chối quyền truy cập!");
                            gui = new HomePage();
                            return [4 /*yield*/, gui.render()];
                        case 1:
                            _a.sent();
                            gui.afterRender();
                            return [2 /*return*/];
                    }
                });
            }); })
                .on("/orders/edit/:id", function (params) { return __awaiter(void 0, void 0, void 0, function () {
                var id, gui;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            alert("Không phải ADMIN, từ chối quyền truy cập!");
                            id = (_a = params === null || params === void 0 ? void 0 : params.data) === null || _a === void 0 ? void 0 : _a.id;
                            gui = new HomePage();
                            return [4 /*yield*/, gui.render()];
                        case 1:
                            _b.sent();
                            gui.afterRender();
                            return [2 /*return*/];
                    }
                });
            }); })
                .on("/orders/detailadmin/:id", function (params) { return __awaiter(void 0, void 0, void 0, function () {
                var id, gui;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            alert("Không phải ADMIN, từ chối quyền truy cập!");
                            id = (_a = params === null || params === void 0 ? void 0 : params.data) === null || _a === void 0 ? void 0 : _a.id;
                            gui = new HomePage();
                            return [4 /*yield*/, gui.render()];
                        case 1:
                            _b.sent();
                            return [2 /*return*/];
                    }
                });
            }); })
                .on("/", function () { return __awaiter(void 0, void 0, void 0, function () {
                var gui;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            gui = new HomePage();
                            return [4 /*yield*/, gui.render()];
                        case 1:
                            _a.sent();
                            gui.afterRender();
                            return [2 /*return*/];
                    }
                });
            }); })
                .on("/category/:id", function (params) { return __awaiter(void 0, void 0, void 0, function () {
                var id, gui;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            id = (_a = params === null || params === void 0 ? void 0 : params.data) === null || _a === void 0 ? void 0 : _a.id;
                            gui = new CategoryPage(id);
                            return [4 /*yield*/, gui.render()];
                        case 1:
                            _b.sent();
                            gui.afterRender();
                            return [2 /*return*/];
                    }
                });
            }); })
                .on("/shopcart", function () { return __awaiter(void 0, void 0, void 0, function () {
                var gui;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            gui = new ShopCartPage();
                            return [4 /*yield*/, gui.render()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); })
                .on("/search/:id", function (params) { return __awaiter(void 0, void 0, void 0, function () {
                var id, gui;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            id = (_a = params === null || params === void 0 ? void 0 : params.data) === null || _a === void 0 ? void 0 : _a.id;
                            gui = new ProductSearch(id);
                            return [4 /*yield*/, gui.render()];
                        case 1:
                            _b.sent();
                            gui.afterRender();
                            return [2 /*return*/];
                    }
                });
            }); })
                .on("/about", function () { return __awaiter(void 0, void 0, void 0, function () {
                var gui;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            gui = new AboutPage();
                            return [4 /*yield*/, gui.render()];
                        case 1:
                            _a.sent();
                            gui.afterRender();
                            return [2 /*return*/];
                    }
                });
            }); })
                .on("/contact", function () { return __awaiter(void 0, void 0, void 0, function () {
                var gui;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            gui = new ContactPage();
                            return [4 /*yield*/, gui.render()];
                        case 1:
                            _a.sent();
                            gui.afterRender();
                            return [2 /*return*/];
                    }
                });
            }); })
                .on("/signup", function () { return __awaiter(void 0, void 0, void 0, function () {
                var gui;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            gui = new SignupPage();
                            return [4 /*yield*/, gui.render()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); })
                .on("/signin", function () { return __awaiter(void 0, void 0, void 0, function () {
                var gui;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            gui = new SigninPage();
                            return [4 /*yield*/, gui.render()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); })
                .on("/order", function () { return __awaiter(void 0, void 0, void 0, function () {
                var gui;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            gui = new OrderPage();
                            return [4 /*yield*/, gui.render()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); })
                .on("/orderdetail/:id", function (params) { return __awaiter(void 0, void 0, void 0, function () {
                var id, gui;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            id = (_a = params === null || params === void 0 ? void 0 : params.data) === null || _a === void 0 ? void 0 : _a.id;
                            gui = new OrderDetailPage(id);
                            return [4 /*yield*/, gui.render()];
                        case 1:
                            _b.sent();
                            return [2 /*return*/];
                    }
                });
            }); })
                .resolve();
        };
    }
    else {
        routes = function () {
            window.router
                .on("/categories/index", function () { return __awaiter(void 0, void 0, void 0, function () {
                var gui;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            gui = new CategoryIndex();
                            return [4 /*yield*/, gui.render()];
                        case 1:
                            _a.sent();
                            gui.afterRender();
                            return [2 /*return*/];
                    }
                });
            }); })
                .on("/categories/create", function () {
                var gui = new CategoryCreate();
                gui.render();
            })
                .on("/categories/edit/:id", function (params) { return __awaiter(void 0, void 0, void 0, function () {
                var id, gui;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            id = (_a = params === null || params === void 0 ? void 0 : params.data) === null || _a === void 0 ? void 0 : _a.id;
                            gui = new CategoryEdit(id);
                            return [4 /*yield*/, gui.render()];
                        case 1:
                            _b.sent();
                            gui.afterRender();
                            return [2 /*return*/];
                    }
                });
            }); })
                .on("/products/index", function () { return __awaiter(void 0, void 0, void 0, function () {
                var gui;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            gui = new ProductIndex();
                            return [4 /*yield*/, gui.render()];
                        case 1:
                            _a.sent();
                            gui.afterRender();
                            return [2 /*return*/];
                    }
                });
            }); })
                .on("/products/create", function () {
                var gui = new ProductCreate();
                gui.render();
            })
                .on("/products/edit/:id", function (params) { return __awaiter(void 0, void 0, void 0, function () {
                var id, gui;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            id = (_a = params === null || params === void 0 ? void 0 : params.data) === null || _a === void 0 ? void 0 : _a.id;
                            gui = new ProductEdit(id);
                            return [4 /*yield*/, gui.render()];
                        case 1:
                            _b.sent();
                            gui.afterRender();
                            return [2 /*return*/];
                    }
                });
            }); })
                .on("/users/index", function () { return __awaiter(void 0, void 0, void 0, function () {
                var gui;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            gui = new UserIndex();
                            return [4 /*yield*/, gui.render()];
                        case 1:
                            _a.sent();
                            gui.afterRender();
                            return [2 /*return*/];
                    }
                });
            }); })
                .on("/users/create", function () {
                var gui = new UserCreate();
                gui.render();
            })
                .on("/users/edit/:id", function (params) { return __awaiter(void 0, void 0, void 0, function () {
                var id, gui;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            id = (_a = params === null || params === void 0 ? void 0 : params.data) === null || _a === void 0 ? void 0 : _a.id;
                            gui = new UserEdit(id);
                            return [4 /*yield*/, gui.render()];
                        case 1:
                            _b.sent();
                            gui.afterRender();
                            return [2 /*return*/];
                    }
                });
            }); })
                .on("/orders/index", function () { return __awaiter(void 0, void 0, void 0, function () {
                var gui;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            gui = new OrderIndex();
                            return [4 /*yield*/, gui.render()];
                        case 1:
                            _a.sent();
                            gui.afterRender();
                            return [2 /*return*/];
                    }
                });
            }); })
                .on("/orders/edit/:id", function (params) { return __awaiter(void 0, void 0, void 0, function () {
                var id, gui;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            id = (_a = params === null || params === void 0 ? void 0 : params.data) === null || _a === void 0 ? void 0 : _a.id;
                            gui = new OrderEdit(id);
                            return [4 /*yield*/, gui.render()];
                        case 1:
                            _b.sent();
                            gui.afterRender();
                            return [2 /*return*/];
                    }
                });
            }); })
                .on("/orders/detailadmin/:id", function (params) { return __awaiter(void 0, void 0, void 0, function () {
                var id, gui;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            id = (_a = params === null || params === void 0 ? void 0 : params.data) === null || _a === void 0 ? void 0 : _a.id;
                            gui = new OrderDetailAdmin(id);
                            return [4 /*yield*/, gui.render()];
                        case 1:
                            _b.sent();
                            return [2 /*return*/];
                    }
                });
            }); })
                .on("/", function () { return __awaiter(void 0, void 0, void 0, function () {
                var gui;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            gui = new HomePage();
                            return [4 /*yield*/, gui.render()];
                        case 1:
                            _a.sent();
                            gui.afterRender();
                            return [2 /*return*/];
                    }
                });
            }); })
                .on("/category/:id", function (params) { return __awaiter(void 0, void 0, void 0, function () {
                var id, gui;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            id = (_a = params === null || params === void 0 ? void 0 : params.data) === null || _a === void 0 ? void 0 : _a.id;
                            gui = new CategoryPage(id);
                            return [4 /*yield*/, gui.render()];
                        case 1:
                            _b.sent();
                            gui.afterRender();
                            return [2 /*return*/];
                    }
                });
            }); })
                .on("/shopcart", function () { return __awaiter(void 0, void 0, void 0, function () {
                var gui;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            gui = new ShopCartPage();
                            return [4 /*yield*/, gui.render()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); })
                .on("/search/:id", function (params) { return __awaiter(void 0, void 0, void 0, function () {
                var id, gui;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            id = (_a = params === null || params === void 0 ? void 0 : params.data) === null || _a === void 0 ? void 0 : _a.id;
                            gui = new ProductSearch(id);
                            return [4 /*yield*/, gui.render()];
                        case 1:
                            _b.sent();
                            gui.afterRender();
                            return [2 /*return*/];
                    }
                });
            }); })
                .on("/about", function () { return __awaiter(void 0, void 0, void 0, function () {
                var gui;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            gui = new AboutPage();
                            return [4 /*yield*/, gui.render()];
                        case 1:
                            _a.sent();
                            gui.afterRender();
                            return [2 /*return*/];
                    }
                });
            }); })
                .on("/contact", function () { return __awaiter(void 0, void 0, void 0, function () {
                var gui;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            gui = new ContactPage();
                            return [4 /*yield*/, gui.render()];
                        case 1:
                            _a.sent();
                            gui.afterRender();
                            return [2 /*return*/];
                    }
                });
            }); })
                .on("/signup", function () { return __awaiter(void 0, void 0, void 0, function () {
                var gui;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            gui = new SignupPage();
                            return [4 /*yield*/, gui.render()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); })
                .on("/signin", function () { return __awaiter(void 0, void 0, void 0, function () {
                var gui;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            gui = new SigninPage();
                            return [4 /*yield*/, gui.render()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); })
                .on("/order", function () { return __awaiter(void 0, void 0, void 0, function () {
                var gui;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            gui = new OrderPage();
                            return [4 /*yield*/, gui.render()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); })
                .on("/orderdetail/:id", function (params) { return __awaiter(void 0, void 0, void 0, function () {
                var id, gui;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            id = (_a = params === null || params === void 0 ? void 0 : params.data) === null || _a === void 0 ? void 0 : _a.id;
                            gui = new OrderDetailPage(id);
                            return [4 /*yield*/, gui.render()];
                        case 1:
                            _b.sent();
                            return [2 /*return*/];
                    }
                });
            }); })
                .resolve();
        };
    }
}
routes();
