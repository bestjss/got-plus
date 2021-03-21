"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports._patch = exports._option = exports._delete = exports._put = exports._post = exports._get = void 0;
const got_1 = __importDefault(require("got"));
async function _get(url, option) {
    const res = await got_1.default.get(url, option);
    console.log('RequestMethod get', option);
    return res;
}
exports._get = _get;
async function _post(url, option) {
    const res = await got_1.default.post(url, option);
    console.log('RequestMethod post');
    return res;
}
exports._post = _post;
async function _put(url, option) {
    const res = await got_1.default.put(url, option);
    console.log('RequestMethod put');
    return res;
}
exports._put = _put;
async function _delete(url, option) {
    const res = await got_1.default.delete(url, option);
    console.log('RequestMethod delete');
    return res;
}
exports._delete = _delete;
async function _option(url, option) {
    const res = await got_1.default.get(url, option);
    console.log('RequestMethod option');
    return res;
}
exports._option = _option;
async function _patch(url, option) {
    const res = await got_1.default.patch(url, option);
    console.log('RequestMethod patch');
    return res;
}
exports._patch = _patch;
//# sourceMappingURL=_http.js.map