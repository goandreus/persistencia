export async function fetchProducts ({ commit }) {
  const data = await fetch('/fixtures/products.json')
  const products = await data.json()
  commit('products/setProducts', products, { root: true })
}