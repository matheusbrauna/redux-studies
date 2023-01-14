import { useSelector } from 'react-redux'
import { RootState } from '../store'
import { ICartItem } from '../store/modules/cart/types'

export function Cart() {
  const cart = useSelector<RootState, ICartItem[]>((state) => state.cart.items)

  return (
    <table>
      <thead>
        <tr>
          <th>Produto</th>
          <th>Preço</th>
          <th>Quantidade</th>
          <th>Subtotal</th>
        </tr>
      </thead>

      <tbody>
        {cart.map(({ product, quantity }) => (
          <tr key={product.id}>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td>{quantity}</td>
            <td>{product.price * quantity}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
