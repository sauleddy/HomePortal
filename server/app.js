import Koa from 'koa'
import json from 'koa-json'
import bodyParser from 'koa-bodyparser'
import logger from 'koa-logger'
import session from 'koa-generic-session';
import compress from 'koa-compress'
import convert from 'koa-convert'
const app = new Koa()


/*var router = require('koa-router')();
router.get('/auth/login', function *(next) {console.log('OOOOOOOOOOOOOOOO')});
app.use(router.routes()).use(router.allowedMethods());*/

app.keys = ['keys', 'home portal secret']
app.use(session({
  //store: new MemoryStore()
}));
app.use(compress())
app.use(bodyParser())
app.use(json())
app.use(logger())

export default app
