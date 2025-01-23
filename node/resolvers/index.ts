export const TestCondicaoPagamento = async (_: any, __: any, ctx: Context) => {
  const response = await ctx.clients.protheus.getCondicaoPagamento()

  return response
}

export const TestProdutosCliente = async (_: any, __: any, ctx: Context) => {
  const response = await ctx.clients.protheus.getProdutosCliente()

  return response
}

export const TestPrecoProduto = async (_: any, __: any, ctx: Context) => {
  const response = await ctx.clients.protheus.getPrecoProduto()

  return response
}

//@ts-ignore
export const getCustomerProducts = async (_: any, {cnpjcliente, pagina, tamanhopagina, familia, tipo, serie}: any, ctx: Context) => {
  const response = await ctx.clients.protheus.getProdutoPorCliente(cnpjcliente, pagina, tamanhopagina, familia, tipo, serie)

  return response
}