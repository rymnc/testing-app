const Koa = require('koa')
const KoaRouter = require('koa-router')
const cors = require('koa-cors')
const json = require('koa-json')
const logger = require('koa-logger')

const app = new Koa()
const router = new KoaRouter();

app.use(logger())
app.use(json())
app.use(cors())

let data = [

]


app.use(router.routes()).use(router.allowedMethods());

router.get('/aaryamann', async (ctx)=>{
    ctx.status=200;
    ctx.body="Hello"
})

router.post('/add/:todo', async (ctx)=>{
    ctx.status=200;
    data = [...data,
    {
        id:Math.floor(Math.random()*999999),
        todo:ctx.params.todo
    }]

})

router.get('/data',async (ctx)=>{
    ctx.status=200;
    ctx.body = data;
})


router.get('/', async (ctx)=>{
    ctx.status=200;
    ctx.body = "nothing to see here!"
})

app.listen(3000,()=>{
    console.log('Server is up!')
})