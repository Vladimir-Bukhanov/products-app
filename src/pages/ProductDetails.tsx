import axios, { AxiosError } from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ErrorMessage from '../components/ErrorMessage'
import Loader from '../components/Loader'
import type { IProduct } from '../types/product'
import { upperCaseFirst } from '../utils/upperCaseFirst'

const ProductDetails = () => {
	
	const { id } = useParams()

	const [product, setProduct] = useState<IProduct | null>(null)

	const [loading, setLoading] = useState<boolean>(false)

	const [error, setError] = useState<string | null>(null)

	const navigate = useNavigate()

		const fetchProductById = async () => {

			try {
				setLoading(true)
				setError(null)
				const res = await axios.get<IProduct>(`https://fakestoreapi.com/products/${id}`)
				setProduct(res.data)
				setLoading(false)
			}

			catch (err: unknown) {
				const error = err as AxiosError
        setLoading(false)
        setError(error.message)
      }

			finally {
				setLoading(false)
			}
		}
	
	useEffect(() => {
		fetchProductById()
	}, [id])

	return (
		<div className='w-90 sm:w-120 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
			{loading && <Loader />}
			{error && <ErrorMessage error={error} />}
			{product &&
				<div className='border p-5 bg-pink-100'> 
					<h2 className='sm:text-xl text-center mb-5'>{upperCaseFirst(product.title)}</h2>
					<img className='mx-auto sm:w-40 w-30 mb-5' src={product.image} alt={product.title} />
					<p className='mb-5 text-[0.9rem] sm:text-[1rem]'>{product.description}</p>
					<h3 className='mb-3'>Price: {product.price.toFixed(1)}$</h3>
					<p className='mb-5'>Category: {product.category}</p>
					<button 
						className='border px-2 cursor-pointer duration-200 hover:bg-blue-100'
						onClick={() => navigate(-1)}
					>
						Back
					</button>
				</div>
			}
		</div>
	)

}

export default ProductDetails