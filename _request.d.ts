declare const RequestMethod: {
    GET: string;
    POST: string;
    PUT: string;
    DELETE: string;
    OPTION: string;
    PATCH: string;
};
interface RequestParamObject {
    url: string;
    method?: string;
    opations?: {};
}
declare function RequestMapping(request: RequestParamObject): (target: any, propertyName: string, descriptor: PropertyDescriptor) => void;
export { RequestParamObject, RequestMapping, RequestMethod };
