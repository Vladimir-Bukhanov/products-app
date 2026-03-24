import axios, { AxiosError } from 'axios'
import { useEffect, useState } from 'react'
import type { IProduct } from '../types/product'

export const useProducts = () => {

	 const [products, setProducts] = useState<IProduct[]>([])

  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<null | string>(null)

	const fetchProducts = async () => {
      try {
        setError(null)
        setLoading(true)
        const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products')
        setProducts(response.data)
        setLoading(false)
      }
      catch (err: unknown) {
				const error = err as AxiosError
        setLoading(false)
        setError(error.message)
      }
    }

	useEffect(() => {
		fetchProducts()
	}, [])


	return { products, loading, error }

}