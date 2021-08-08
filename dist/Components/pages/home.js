var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Component } from "../Component.js";
import { categories } from "../clientComponent/categories.js";
var homePage = /** @class */ (function (_super) {
    __extends(homePage, _super);
    function homePage() {
        return _super.call(this) || this;
    }
    homePage.prototype.template = function () {
        return "\n            " + categories.render() + "\n        ";
    };
    homePage.prototype.afterRender = function () { };
    return homePage;
}(Component));
export { homePage };
