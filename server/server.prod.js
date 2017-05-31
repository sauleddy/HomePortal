import 'babel-polyfill'
import serve from 'koa-static'
import path from 'path'
import views from 'koa-views'
import app from './app'
import router from './router'
import clientRoute from './middlewares/clientRoute'

const port = process.env.PORT || 3000

app.use(views(path.resolve(__dirname, '../views/prod'), {map: {html: 'ejs'}}))
app.use(serve(path.resolve(__dirname, '../dist/client')))
app.use(serve(path.resolve(__dirname, '../public')))
app.use(serve(path.resolve(__dirname, '../node_modules')))
app.use(clientRoute)
app.use(router.routes())
app.use(router.allowedMethods())
app.listen(port)
console.log(`\n==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.\n`)
