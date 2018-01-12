const fetch = require('node-fetch');
const Koa = require('koa');
const cors = require('koa-cors');
const Router = require('koa-router');
const router = new Router();
const request = require('koa-request');
const bodyparser = require('koa-bodyparser');
const logger = require('koa-logger');
const unsplash = require('./secrets/unsplash.js');

const app = new Koa();
app.use(logger());
app.use(cors());
app.use(bodyparser());
app.use(router.routes());

router.get('/', (ctx, next) => {
  console.log('incoming request');
  ctx.body = "Hello world";
});

router.get('/vocabulary', async (ctx,next) => {
  try {
    let voc = getMockVocabulary();
    ctx.body = JSON.stringify(voc);
    ctx.status = 200;
  } catch (e) {
    ctx.status = 500;
    ctx.body = '{}'
  } finally {
    // clean up
  }
})

const port = 3001;
app.listen( port, () => console.log( 'SOLO: eselsbrücke listening on port ' + port ) );

getMockVocabulary = function(){
  return {
    "orig": "asdf",
    "trans": "qeertwert",
    "sentences": [
      {
        "orig": "Be my asdf",
        "trans": "Sei mein qeertwert"
      }
    ]
  }
}
