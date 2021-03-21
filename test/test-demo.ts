import nock from 'nock';
import test from 'ava';
import { RequestMapping, RequestMethod, PathVariable, Header, Body, QueryParam } from '../src';
import app from './helper/server';

interface MDGQ {
  header: {};
  path: {};
  query: {};
}

const mock_demo_get_headers = {
  'Content-Type': 'application/json',
  token: 'this is token',
};
const mock_demo_get_query = {
  page: '1',
  limit: '100',
};

const mock_demo_get_result = {
  // header: mock_demo_get_headers,
  path: {
    id: '123',
    name: 'js',
  },
  query: mock_demo_get_query,
};

class Demo {
  @RequestMapping({
    url: 'http://localhost:3000/s/{id}/p/{name}',
    method: RequestMethod.GET,
  })
  async get(
    @Header() header: any,
    @PathVariable({ name: 'id' }) id: string,
    @PathVariable({ name: 'name' }) name: string,
    @QueryParam() query: any,
  ) {}
}

const d = new Demo();
test('getMapping', async (t) => {
  app.listen(3000);
  const req: any = await d.get(mock_demo_get_headers, '123', 'js', mock_demo_get_query);
  t.is(req, JSON.stringify(mock_demo_get_result));
});
