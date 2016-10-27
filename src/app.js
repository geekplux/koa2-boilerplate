import nimei from './nimei';
import Koa from 'koa'
const app = new Koa()
// response
app.use(async (ctx) => {
  ctx.body = 'Hello World'
})

app.listen(3000, () => console.log('server started 3000'))
