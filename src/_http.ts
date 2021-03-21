import got from 'got';

interface HttpOptions {
  prefixUrl?: string;
  // responseType: string
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

async function _get(url: string, option: RequestOption) {
  const res = await got.get(url, option);
  console.log('RequestMethod get', option);
  return res;
}

async function _post(url: string, option: RequestOption) {
  const res = await got.post(url, option);
  console.log('RequestMethod post');
  return res;
}

async function _put(url: string, option: RequestOption) {
  const res = await got.put(url, option);
  console.log('RequestMethod put');
  return res;
}

async function _delete(url: string, option: RequestOption) {
  const res = await got.delete(url, option);
  console.log('RequestMethod delete');
  return res;
}

async function _option(url: string, option: RequestOption) {
  const res = await got.get(url, option);
  console.log('RequestMethod option');
  return res;
}

async function _patch(url: string, option: RequestOption) {
  const res = await got.patch(url, option);
  console.log('RequestMethod patch');
  return res;
}

export { _get, _post, _put, _delete, _option, _patch, RequestOption };
