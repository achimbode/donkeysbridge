const Koa = require('koa');
const cors = require('koa-cors');
const Router = require('koa-router');
const request = require('koa-request');
const bodyparser = require('koa-bodyparser');
const router = new Router();

const app = new Koa();
app.use(cors());
app.use(bodyparser());
app.use(router.routes());

router.get('/', (ctx, next) => {
  console.log('incoming request');
  ctx.body = "Hello world";
});

const port = 3001;
app.listen( port, () => console.log( 'eselsbrücke listening on port ' + port ) );
