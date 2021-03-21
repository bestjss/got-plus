import Router from 'koa-router';
const router = new Router();

router.get('/home',(ctx,next)=>{
    ctx.body = 'home'
})

router.get('/s/:id/p/:name', (ctx, next) => {
  let name = ctx.params.name;
  let id = ctx.params.id;
  let request = ctx.request;
  let header = ctx.request.header;
  let req_query = request.query;
  ctx.body = {
    // header: header,
    path: {
      id: id,
      name: name,
    },
    query: req_query,
  };
});

export default router;
