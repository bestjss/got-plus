"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHeader = exports.getEnv = exports.setHeader = exports.setEnv = exports.setCache = exports.getCache = exports.CatcherKey = void 0;
const node_cache_1 = __importDefault(require("node-cache"));
const catcher = new node_cache_1.default();
const CatcherKey = {
    SystemOption: '_SystemOption',
    HttpHeader: '_HttpHeader',
};
exports.CatcherKey = CatcherKey;
let getCache = (key) => {
    return key ? catcher.get(key) : catcher;
};
exports.getCache = getCache;
let setCache = (key, value) => {
    catcher.set(key, value);
};
exports.setCache = setCache;
let setEnv = (env) => {
    setCache(CatcherKey.SystemOption, env);
};
exports.setEnv = setEnv;
let setHeader = (header) => {
    setCache(CatcherKey.HttpHeader, header);
};
exports.setHeader = setHeader;
function getEnv() {
    return getCache(CatcherKey.SystemOption);
}
exports.getEnv = getEnv;
let getHeader = () => {
    return getCache(CatcherKey.HttpHeader);
};
exports.getHeader = getHeader;
//# sourceMappingURL=_cacher.js.map