import NodeCache from 'node-cache';

const catcher = new NodeCache();

const CatcherKey = {
  SystemOption: '_SystemOption',
  HttpHeader: '_HttpHeader',
};

let getCache = (key?: string) => {
  return key ? catcher.get(key) : catcher;
};

let setCache = (key: string, value: any) => {
  catcher.set(key, value);
};

let setEnv = (env: {}) => {
  setCache(CatcherKey.SystemOption, env);
};

let setHeader = (header: {}) => {
  setCache(CatcherKey.HttpHeader, header);
};

function getEnv() {
  return getCache(CatcherKey.SystemOption);
}

let getHeader = () => {
  return getCache(CatcherKey.HttpHeader);
};

export { CatcherKey, getCache, setCache, setEnv, setHeader, getEnv, getHeader };
