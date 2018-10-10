var fn_head = async (ctx, next) => {
  var name = ctx.params.name
  ctx.response.body = {
    status: 'head'
  }
}

module.exports = {
  'GET /head': fn_head
}
