var fn_health = async (ctx, next) => {
  var name = ctx.params.name
  ctx.response.body = {
    status: 'UP'
  }
}

module.exports = {
  'GET /health': fn_health
}
