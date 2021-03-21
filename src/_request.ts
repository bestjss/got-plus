import { _get, _post, _put, _delete, _option, _patch, RequestOption } from './_http';
import {
  _HeaderMetadataKey,
  _PathVariableMetadataKey,
  _QueryParamMetadataKey,
  _BodyMetadataKey,
} from './_symbol';
import { getHeader } from './_cacher';
import urlencode from 'urlencode';
const _httpMethods = new Map([
  ['get', _get],
  ['post', _post],
  ['put', _put],
  ['delete', _delete],
  ['option', _option],
  ['patch', _patch],
]);

const RequestMethod = {
  GET: 'get',
  POST: 'post',
  PUT: 'put',
  DELETE: 'delete',
  OPTION: 'option',
  PATCH: 'patch',
};

interface RequestParamObject {
  url: string;
  method?: string;
  opations?: {};
}

function RequestMapping(request: RequestParamObject): any {
  return (target: any, propertyName: string, descriptor: PropertyDescriptor) => {
    let func = descriptor.value;
    if ('function' === typeof func) {
      descriptor.value = async function () {
        let requestOption: RequestOption = {
          resolveBodyOnly: true,
          headers: getHeader(),
        };
        // Header
        let headerParameters: number[] = Reflect.getOwnMetadata(
          _HeaderMetadataKey,
          target,
          propertyName,
        );
        if (headerParameters && headerParameters.length > 0) {
          requestOption.headers = Object.assign(
            arguments[headerParameters[0]],
            requestOption.headers,
          );
        }
        // PathParam
        let pathParameters: any[] = Reflect.getOwnMetadata(
          _PathVariableMetadataKey,
          target,
          propertyName,
        );
        let url = request.url;
        if (pathParameters && pathParameters.length > 0) {
          for (let header of pathParameters) {
            if (arguments[header.parameterIndex]) {
              let reg: string = `\{${header.key}\}`;
              const urlReg = new RegExp(reg);
              url = url.replace(urlReg, arguments[header.parameterIndex]);
            }
          }
        }
        // QueryParam
        let queryParamParameters: number[] = Reflect.getOwnMetadata(
          _QueryParamMetadataKey,
          target,
          propertyName,
        );
        if (queryParamParameters) {
          if (queryParamParameters.length === 1) {
            const _queryObject = arguments[queryParamParameters[0]];
            if (_queryObject) {
              url += '?';
              for (let key of Object.keys(_queryObject)) {
                url += `${key}=${urlencode(_queryObject[key])}&`;
              }
              if (url.endsWith('&')) url = url.substring(0, url.length - 1);
            }
          } else {
            throw new Error('The number of @QueryParam is incorrect！');
          }
        }
        if (request.method === RequestMethod.POST || request.method === RequestMethod.PUT) {
          // Body
          let bodyParamParameters: number[] = Reflect.getOwnMetadata(
            _BodyMetadataKey,
            target,
            propertyName,
          );
          // console.log('??', bodyParamParameters);
          if (bodyParamParameters) {
            if (bodyParamParameters.length === 1) {
              requestOption.json = arguments[bodyParamParameters[0]];
            } else {
              throw new Error('The number of @Body is incorrect！');
            }
          }
        }
        // console.log('===>', url, requestOption);
        return await _httpMethods.get(request.method)(url, requestOption);
      };
    }
  };
}

export { RequestParamObject, RequestMapping, RequestMethod };
