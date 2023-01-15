import { useDispatch } from 'react-redux'
import { IProduct } from '../store/@types/cart'
import { addProductToCart } from '../store/slices/cart-slice'

interface CatalogItemProps {
  product: IProduct
}

export function CatalogItem({ product }: CatalogItemProps) {
  const dispatch = useDispatch()

  return (
    <article>
      <strong>{product.title}</strong> {' - '}
      <span>{product.price}</span> {'  '}
      <button
        type="button"
        onClick={() => dispatch(addProductToCart({ product }))}
      >
        Adicionar ao carrinho
      </button>
    </article>
  )
}
