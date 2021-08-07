var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000/";
var request = /** @class */ (function () {
    function request() {
    }
    request.get = function (options) {
        return axios(__assign({ method: "GET" }, options));
    };
    request.post = function (options) {
        return axios(__assign({ method: "POST" }, options));
    };
    request.put = function (options) {
        return axios(__assign({ method: "PUT" }, options));
    };
    request.delete = function (options) {
        return axios(__assign({ method: "DELETE" }, options));
    };
    return request;
}());
export { request };
