var fn_hello = async (ctx, next) => {
    var name = ctx.params.name;
    console.log(ctx.params)
    ctx.response.body = `<h1>Hello, ${name}!</h1>`;
};

module.exports = {
    'GET /hello/:name': fn_hello
};