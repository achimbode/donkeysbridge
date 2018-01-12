// const Koax = require('koa2-request-middleware');
// let koax = new Koax();
const fetch = require('node-fetch');
const Koa = require('koa');
const cors = require('koa-cors');
const Router = require('koa-router');
const router = new Router();
const request = require('koa-request');
const bodyparser = require('koa-bodyparser');
const logger = require('koa-logger');
const unsplash = require('./secrets/unsplash.js');

// koax.mount(async () => {
//   return koax.setName('unsplash').cached().request(unsplashRequest)
// });

const app = new Koa();
app.use(logger());
app.use(cors());
app.use(bodyparser());
// app.use(koax.middleware());
app.use(router.routes());

router.get('/', (ctx, next) => {
  console.log('incoming request');
  ctx.body = "Hello world";
});

router.get('/unsplash', async (ctx,next) => {
  var response = await fetch('https://api.unsplash.com/photos/?query=beach&client_id=' + unsplash.client_id)
  .then( response => response.json() );
  ctx.body = response;
  ctx.status = 200;
})

const port = 3001;
app.listen( port, () => console.log( 'SOLO: eselsbrücke listening on port ' + port ) );

//.then(response => response.json()); // FetchError: invalid json response body ...  reason: Unexpected token A in JSON
// .then(response => response.json()); // status: 500, statusText: 'Internal Server Error', ...
// .then(response => console.log(response));
/* Body {
url: 'https://api.unsplash.com/photos/?client_id=53277b4a8317b3343b7f50f877114bc33135187e3cf5a2276dcfb9bb5bd6e96a',
status: 500,
statusText: 'Internal Server Error',*/
