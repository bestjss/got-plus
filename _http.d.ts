interface HttpOptions {
    prefixUrl?: string;
    resolveBodyOnly?: boolean;
    http2?: boolean;
    headers?: {};
    https?: {
        rejectUnauthorized?: boolean;
    };
}
interface RequestOption extends HttpOptions {
    searchParams?: {};
    headers?: {};
    json?: {};
}
declare function _get(url: string, option: RequestOption): Promise<unknown>;
declare function _post(url: string, option: RequestOption): Promise<unknown>;
declare function _put(url: string, option: RequestOption): Promise<unknown>;
declare function _delete(url: string, option: RequestOption): Promise<unknown>;
declare function _option(url: string, option: RequestOption): Promise<unknown>;
declare function _patch(url: string, option: RequestOption): Promise<unknown>;
export { _get, _post, _put, _delete, _option, _patch, RequestOption };
