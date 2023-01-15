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
        {items.map((product, index) => (
          <tr key={index}>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td>{product.quantity}</td>
            <td>{product.price * product.quantity}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
