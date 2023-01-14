import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { ICartState } from './modules/cart/types'
import rootReducer from './modules/rootReducer'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './modules/rootSaga'

export interface RootState {
  cart: ICartState
}

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares)),
)

sagaMiddleware.run(rootSaga)
