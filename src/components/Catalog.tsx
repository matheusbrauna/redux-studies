import { useEffect, useState } from 'react'
import { api } from '../lib/api'
import { IProduct } from '../store/@types/cart'
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

  console.log(catalog)

  return (
    <main>
      <h1>Catalog</h1>

      {catalog.map((product, index) => (
        <CatalogItem key={index} product={product} />
      ))}
    </main>
  )
}
