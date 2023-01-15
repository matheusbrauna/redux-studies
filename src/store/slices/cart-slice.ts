import { createSlice } from '@reduxjs/toolkit'
import { ICartState } from '../@types/cart'

const initialState: ICartState = {
  items: [],
  failedStockCheck: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      const { product } = action.payload
      const existingProductIndex = state.items.findIndex(
        (item) => item.product.id === product.id,
      )
      if (existingProductIndex !== -1) {
        state.items[existingProductIndex].quantity += 1
      } else {
        state.items.push({ product, quantity: 1 })
      }
    },
  },
})

export const { addProductToCart } = cartSlice.actions
