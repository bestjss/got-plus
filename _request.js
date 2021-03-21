"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestMethod = exports.RequestMapping = void 0;
const _http_1 = require("./_http");
const _symbol_1 = require("./_symbol");
const _cacher_1 = require("./_cacher");
const urlencode_1 = __importDefault(require("urlencode"));
const _httpMethods = new Map([
    ['get', _http_1._get],
    ['post', _http_1._post],
    ['put', _http_1._put],
    ['delete', _http_1._delete],
    ['option', _http_1._option],
    ['patch', _http_1._patch],
]);
const RequestMethod = {
    GET: 'get',
    POST: 'post',
    PUT: 'put',
    DELETE: 'delete',
    OPTION: 'option',
    PATCH: 'patch',
};
exports.RequestMethod = RequestMethod;
function RequestMapping(request) {
    return (target, propertyName, descriptor) => {
        let func = descriptor.value;
        if ('function' === typeof func) {
            descriptor.value = async function () {
                let requestOption = {
                    resolveBodyOnly: true,
                    headers: _cacher_1.getHeader(),
                };
                let headerParameters = Reflect.getOwnMetadata(_symbol_1._HeaderMetadataKey, target, propertyName);
                if (headerParameters && headerParameters.length > 0) {
                    requestOption.headers = Object.assign(arguments[headerParameters[0]], requestOption.headers);
                }
                let pathParameters = Reflect.getOwnMetadata(_symbol_1._PathVariableMetadataKey, target, propertyName);
                let url = request.url;
                if (pathParameters && pathParameters.length > 0) {
                    for (let header of pathParameters) {
                        if (arguments[header.parameterIndex]) {
                            let reg = `\{${header.key}\}`;
                            const urlReg = new RegExp(reg);
                            url = url.replace(urlReg, arguments[header.parameterIndex]);
                        }
                    }
                }
                let queryParamParameters = Reflect.getOwnMetadata(_symbol_1._QueryParamMetadataKey, target, propertyName);
                if (queryParamParameters) {
                    if (queryParamParameters.length === 1) {
                        const _queryObject = arguments[queryParamParameters[0]];
                        if (_queryObject) {
                            url += '?';
                            for (let key of Object.keys(_queryObject)) {
                                url += `${key}=${urlencode_1.default(_queryObject[key])}&`;
                            }
                            if (url.endsWith('&'))
                                url = url.substring(0, url.length - 1);
                        }
                    }
                    else {
                        throw new Error('The number of @QueryParam is incorrect！');
                    }
                }
                if (request.method === RequestMethod.POST || request.method === RequestMethod.PUT) {
                    let bodyParamParameters = Reflect.getOwnMetadata(_symbol_1._BodyMetadataKey, target, propertyName);
                    if (bodyParamParameters) {
                        if (bodyParamParameters.length === 1) {
                            requestOption.json = arguments[bodyParamParameters[0]];
                        }
                        else {
                            throw new Error('The number of @Body is incorrect！');
                        }
                    }
                }
                return await _httpMethods.get(request.method)(url, requestOption);
            };
        }
    };
}
exports.RequestMapping = RequestMapping;
//# sourceMappingURL=_request.js.map