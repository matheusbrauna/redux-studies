export interface IProduct {
  id: number
  title: string
  price: number
  quantity: number
}

export interface ICartItem {
  product: IProduct
}

export interface ICartState {
  items: IProduct[]
  failedStockCheck: number[]
}
