import {find, filter} from 'lodash'

export function addProduct (state, product) {
  const productInCart = find(state.cart, { id: product.id })
  if ( ! productInCart) {
    const copy = Object.assign({}, product)
    copy.qty = 1
    state.cart.push(copy)
  } else {
    productInCart.qty += 1
  }
}

export function removeProductFromCart (state, product) {
  state.cart = filter(state.cart, ({id}) => id !== product.id)
}