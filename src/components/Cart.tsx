import { useSelector } from 'react-redux'
import { RootState } from '../store'

export function Cart() {
  const { items } = useSelector((state: RootState) => state.cart)

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
        {items.map(({ product, quantity }, index) => (
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
