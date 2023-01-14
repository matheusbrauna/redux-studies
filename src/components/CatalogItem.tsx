import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store'
import { addProductToCartRequest } from '../store/modules/cart/actions'
import { IProduct } from '../store/modules/cart/types'

interface CatalogItemProps {
  product: IProduct
}

export function CatalogItem({ product }: CatalogItemProps) {
  const { price, title } = product
  const dispatch = useDispatch()
  const hasFailedStockCheck = useSelector<RootState, boolean>((state) =>
    state.cart.failedStockCheck.includes(product.id),
  )
  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCartRequest(product))
  }, [dispatch, product])

  return (
    <article>
      <strong>{title}</strong> {' - '}
      <span>{price}</span> {'  '}
      <button type="button" onClick={handleAddProductToCart}>
        Adicionar ao carrinho
      </button>
      {hasFailedStockCheck && (
        <span style={{ color: 'red' }}>Falta de estoque</span>
      )}
    </article>
  )
}
