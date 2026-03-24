import axios from 'axios'
import { useEffect, useState } from 'react'
import ProductList from './components/ProductList'
import type { IProduct } from './types/product'


export default function App() {

  const [products, setProducts] = useState<IProduct[]>([])

  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<null | string>(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setError(null)
        setLoading(true)
        const response = await axios.get('https://fakestoreapi.com/products')
        setProducts(response.data)
        setLoading(false)
      }
      catch {
        setLoading(false)
        setError('fetch error')
      }
    }

    fetchProducts()

  }, [])

  return (
    <div className='mx-auto w-[90%] mt-[10vh]'>
      <h1 className='text-center text-xl mb-5'>
        Products
      </h1>
      {loading && 
        <p className='text-xl text-center mt-10'>
          Loading...
        </p>
      }
      { error && 
        <p className='text-red-500 mt-10 text-center text-xl'>
          {error}
        </p>
      }

      {products && 
        <ProductList 
          products={products}
        />
      }
    </div>
  )
}
