import 'reflect-metadata';

interface _SumbolObjec {
  name: string;
}

interface PathObject extends _SumbolObjec {}

interface QueryObject extends _SumbolObjec {}

const _HeaderMetadataKey = Symbol('Header');
function Header(): any {
  return (target: any, propertyKey: string, parameterIndex: number) => {
    let existingHeaderParameters: number[] =
      Reflect.getOwnMetadata(_HeaderMetadataKey, target, propertyKey) || [];
    existingHeaderParameters.push(parameterIndex);
    Reflect.defineMetadata(_HeaderMetadataKey, existingHeaderParameters, target, propertyKey);
  };
}

const _PathVariableMetadataKey = Symbol('PathVariable');
function PathVariable(params: PathObject): any {
  return (target: any, propertyKey: string, parameterIndex: number) => {
    let existingPathVariableParameters: any[] =
      Reflect.getOwnMetadata(_PathVariableMetadataKey, target, propertyKey) || [];
    let key = params.name;
    existingPathVariableParameters.push({ key, parameterIndex });
    Reflect.defineMetadata(
      _PathVariableMetadataKey,
      existingPathVariableParameters,
      target,
      propertyKey,
    );
  };
}

const _QueryParamMetadataKey = Symbol('QueryParam');
function QueryParam(): any {
  return (target: any, propertyKey: string, parameterIndex: number) => {
    let existingQueryParamParameters: number[] =
      Reflect.getOwnMetadata(_QueryParamMetadataKey, target, propertyKey) || [];
    existingQueryParamParameters.push(parameterIndex);
    Reflect.defineMetadata(
      _QueryParamMetadataKey,
      existingQueryParamParameters,
      target,
      propertyKey,
    );
  };
}

const _BodyMetadataKey = Symbol('Body');
function Body(): any {
  return (target: any, propertyKey: string, parameterIndex: number) => {
    let existingBodyParameters: number[] =
      Reflect.getOwnMetadata(_BodyMetadataKey, target, propertyKey) || [];
    existingBodyParameters.push(parameterIndex);
    Reflect.defineMetadata(_BodyMetadataKey, existingBodyParameters, target, propertyKey);
  };
}

export {
  PathVariable,
  QueryParam,
  Header,
  Body,
  _HeaderMetadataKey,
  _PathVariableMetadataKey,
  _QueryParamMetadataKey,
  _BodyMetadataKey,
};
