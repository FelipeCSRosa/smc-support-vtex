export const Test = async (_: any, __: any, ctx: Context) => {
  const response = await ctx.clients.protheus.getCondicaoPagamento()

  return response
}
