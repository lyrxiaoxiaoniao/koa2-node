const Koa = require('koa')
const path = require('path')
const bodyParser = require('koa-bodyparser')

const controller = require('./controller')

const static = require('koa-static')

const app = new Koa()

// 静态资源目录对于相对入口文件index.js的路径
const staticPath = './static'

app.use(static(path.join(__dirname, staticPath)))
// log request URL:
app.use(async (ctx, next) => {
  console.log(`Process ${ctx.request.method} ${ctx.request.url} ${new Date()}...`)
  await next()
})

app.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*')
    ctx.set('Access-Control-Allow-Credentials', true)
    ctx.set("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With")
    ctx.set('Cache-Control','no-cache')
  if (ctx.method === 'OPTIONS') {
    ctx.set('Access-Control-Allow-Methods', 'PUT,DELETE,POST,GET')
    ctx.set('Access-Control-Max-Age', 3600 * 24)
    ctx.body = ''
  }
  await next()
})

// parse request body:
app.use(bodyParser())

// add controllers:
app.use(controller())

app.listen(3000)
console.log('app started at port 3000...')
