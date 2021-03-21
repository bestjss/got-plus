"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._BodyMetadataKey = exports._QueryParamMetadataKey = exports._PathVariableMetadataKey = exports._HeaderMetadataKey = exports.Body = exports.Header = exports.QueryParam = exports.PathVariable = void 0;
require("reflect-metadata");
const _HeaderMetadataKey = Symbol('Header');
exports._HeaderMetadataKey = _HeaderMetadataKey;
function Header() {
    return (target, propertyKey, parameterIndex) => {
        let existingHeaderParameters = Reflect.getOwnMetadata(_HeaderMetadataKey, target, propertyKey) || [];
        existingHeaderParameters.push(parameterIndex);
        Reflect.defineMetadata(_HeaderMetadataKey, existingHeaderParameters, target, propertyKey);
    };
}
exports.Header = Header;
const _PathVariableMetadataKey = Symbol('PathVariable');
exports._PathVariableMetadataKey = _PathVariableMetadataKey;
function PathVariable(params) {
    return (target, propertyKey, parameterIndex) => {
        let existingPathVariableParameters = Reflect.getOwnMetadata(_PathVariableMetadataKey, target, propertyKey) || [];
        let key = params.name;
        existingPathVariableParameters.push({ key, parameterIndex });
        Reflect.defineMetadata(_PathVariableMetadataKey, existingPathVariableParameters, target, propertyKey);
    };
}
exports.PathVariable = PathVariable;
const _QueryParamMetadataKey = Symbol('QueryParam');
exports._QueryParamMetadataKey = _QueryParamMetadataKey;
function QueryParam() {
    return (target, propertyKey, parameterIndex) => {
        let existingQueryParamParameters = Reflect.getOwnMetadata(_QueryParamMetadataKey, target, propertyKey) || [];
        existingQueryParamParameters.push(parameterIndex);
        Reflect.defineMetadata(_QueryParamMetadataKey, existingQueryParamParameters, target, propertyKey);
    };
}
exports.QueryParam = QueryParam;
const _BodyMetadataKey = Symbol('Body');
exports._BodyMetadataKey = _BodyMetadataKey;
function Body() {
    return (target, propertyKey, parameterIndex) => {
        let existingBodyParameters = Reflect.getOwnMetadata(_BodyMetadataKey, target, propertyKey) || [];
        existingBodyParameters.push(parameterIndex);
        Reflect.defineMetadata(_BodyMetadataKey, existingBodyParameters, target, propertyKey);
    };
}
exports.Body = Body;
//# sourceMappingURL=_symbol.js.map