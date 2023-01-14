import { useEffect, useState } from 'react'
import { api } from '../lib/api'
import { IProduct } from '../store/modules/cart/types'
import { CatalogItem } from './CatalogItem'

export function Catalog() {
  const [catalog, setCatalog] = useState<IProduct[]>([])

  async function fetchCatalog() {
    const res = await api.get('/products')

    setCatalog(res.data)
  }

  useEffect(() => {
    fetchCatalog()
  }, [])

  return (
    <main>
      <h1>Catalog</h1>

      {catalog.map((product) => (
        <CatalogItem key={product.id} product={product} />
      ))}
    </main>
  )
}
