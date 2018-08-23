var fn_test = async (ctx, next) => {
    console.log(ctx.query)
    console.log(ctx.querystring)
    ctx.response.body = `<h2>测试</h2><h3>${ctx.request.query.test}</h3>`
}
module.exports = {
    'GET /test': fn_test
}