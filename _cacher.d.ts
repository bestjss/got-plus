declare const CatcherKey: {
    SystemOption: string;
    HttpHeader: string;
};
declare let getCache: (key?: string) => unknown;
declare let setCache: (key: string, value: any) => void;
declare let setEnv: (env: {}) => void;
declare let setHeader: (header: {}) => void;
declare function getEnv(): unknown;
declare let getHeader: () => unknown;
export { CatcherKey, getCache, setCache, setEnv, setHeader, getEnv, getHeader };
