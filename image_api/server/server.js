const fetch = require('node-fetch'); // alternatively: axion(?)
const Koa = require('koa');
const cors = require('koa-cors');
const Router = require('koa-router');
const router = new Router();
const request = require('koa-request');
const bodyparser = require('koa-bodyparser');
const logger = require('koa-logger');
const unsplash = require('./secrets/unsplash.js');
const RedisCache = require('simple-redis-cache');
const _ = require('lodash');
_.isarray = require('lodash.isarray'); // Error: Cannot find module 'lodash.isarray' ?!

const app = new Koa();
app.use(logger());
app.use(cors());
app.use(bodyparser());
app.use(router.routes());

router.get('/', (ctx, next) => {
  console.log('incoming request');
  ctx.body = "Hello world";
});

router.get('/unsplash', async (ctx,next) => {
  let url = 'https://api.unsplash.com/photos/?query=beach&client_id=' + unsplash.client_id;
  var response = await fetch(url)
  .then( response => response.json() )
  .then( data => formatUnsplash(data) ) // CAUTION: is it an Object???! Array?!
  //.catch( err => {console.log(err); return getBufferedFromRedis()})
  await bufferInRedis(response); // actually: no await // middleware module later in row?
  ctx.body = JSON.stringify(response);
  //console.log(ctx.body);
  ctx.status = 200;
});

function formatUnsplash(arrFromApi) {
  const arrConverted = _.mapValues(arrFromApi, function(img) {
    return {
      id: img.id,
      description: img.description,
      thumb: img.urls.thumb,
      img: img.urls.small
    }
  });
  return Object.values(arrConverted);
}

// ERROR: Error: Cannot find module 'lodash.isarray'
async function bufferInRedis(arrConverted) {
  const unsplashRedis = new RedisCache({name:'unsplash'});
  for (var i = 0; i < arrConverted.length; i++) {
    console.log(arrConverted[i].id);
  }
  unsplashRedis.set(arrConverted[0].id, arrConverted[0]);
  var back = await unsplashRedis.get(arrConverted[0].id);
  console.log('back from redis: ', back.thumb);
}

// function getBufferedFromRedis(formattedPlainObject) {}


const port = 3001;
app.listen( port, () => console.log( 'IMAGE_API: eselsbrücke listening on port ' + port ) );

//.then(response => response.json()); // FetchError: invalid json response body ...  reason: Unexpected token A in JSON
// .then(response => response.json()); // status: 500, statusText: 'Internal Server Error', ...
// .then(response => console.log(response));
/* Body {
url: 'https://api.unsplash.com/photos/?client_id=53277b4a8317b3343b7f50f877114bc33135187e3cf5a2276dcfb9bb5bd6e96a',
status: 500,
statusText: 'Internal Server Error',*/
