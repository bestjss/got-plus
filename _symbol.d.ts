import 'reflect-metadata';
interface _SumbolObjec {
    name: string;
}
interface PathObject extends _SumbolObjec {
}
declare const _HeaderMetadataKey: unique symbol;
declare function Header(): (target: any, propertyKey: string, parameterIndex: number) => void;
declare const _PathVariableMetadataKey: unique symbol;
declare function PathVariable(params: PathObject): (target: any, propertyKey: string, parameterIndex: number) => void;
declare const _QueryParamMetadataKey: unique symbol;
declare function QueryParam(): (target: any, propertyKey: string, parameterIndex: number) => void;
declare const _BodyMetadataKey: unique symbol;
declare function Body(): (target: any, propertyKey: string, parameterIndex: number) => void;
export { PathVariable, QueryParam, Header, Body, _HeaderMetadataKey, _PathVariableMetadataKey, _QueryParamMetadataKey, _BodyMetadataKey };
