import { AxiosResponse } from 'axios'
import { all, call, put, select, takeLatest } from 'redux-saga/effects'
import { RootState } from '../..'
import { api } from '../../../lib/api'
import {
  addProductToCartFailure,
  addProductToCartRequest,
  addProductToCartSuccess,
} from './actions'
import { ActionTypes } from './types'

type CheckProductStockRequest = ReturnType<typeof addProductToCartRequest>

interface IStockResponse {
  id: number
  quantity: number
}

function* checkProductStock({ payload }: CheckProductStockRequest) {
  const { product } = payload
  const currentQuantity: number = yield select(
    (state: RootState) =>
      state.cart.items.find((item) => item.product.id === product.id)
        ?.quantity ?? 0,
  )
  const availableStockResponse: AxiosResponse<IStockResponse> = yield call(
    api.get,
    `stock/${product.id}`,
  )
  if (availableStockResponse.data.quantity > currentQuantity) {
    yield put(addProductToCartSuccess(product))
  } else {
    yield put(addProductToCartFailure(product.id))
  }
}

export default all([
  takeLatest(ActionTypes.addProductToCartRequest, checkProductStock),
])
