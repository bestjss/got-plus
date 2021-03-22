const {
    setCache,
    RequestMapping,
    RequestMethod,
    PathVariable,
    Header,
    Body,
    QueryParam,
  } = require('got-plus');
  setCache('_HttpHeader', {
    'custom-header': 'hello world',
  });
  
  class Message {
    @RequestMapping({
      url: 'http://localhost:3001/s/{id}/p/{name}',
      method: RequestMethod.GET,
    })
    async get(
      @Header() header,
      @PathVariable({ name: 'id' }) id,
      @PathVariable({ name: 'name' }) name,
      @QueryParam() query,
    ) {}
  }
  
 module.exports = { async getMapping() {
    const msg = new Message();
    return await msg.get({'token':'token'},10,'js',{'page':10})
  }
}
  