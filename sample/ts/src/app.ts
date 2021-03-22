import { RequestMapping, RequestMethod, PathVariable, QueryParam, Header, Body } from 'got-plus';

class Message {
  @RequestMapping({
    url: 'http://localhost:3001/s/{id}/p/{name}',
    method: RequestMethod.GET,
  })
  async get(
    @Header() header: any,
    @PathVariable({ name: 'id' }) id: any,
    @PathVariable({ name: 'name' }) name: any,
    @QueryParam() query: any,
  ) {}
}

export default Message;
