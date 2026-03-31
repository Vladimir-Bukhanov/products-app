import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import type { IProduct } from '../types/product'
import { upperCaseFirst } from '../utils/upperCaseFirst'

interface IProductCard {
	product: IProduct
}

export default function ProductCard({product}: IProductCard) {

	const navigate = useNavigate()

	const { addToCart } = useContext(CartContext)

	return (
		<div 
			className='border p-5 w-full max-h-auto h-full duration-200'
		>
			<h2 className='text-xl text-center mb-5'>
				{upperCaseFirst(product.title)}
			</h2>
			<img
				className='w-20 mb-3 mx-auto' 
				src={product.image} 
				alt={product.title} 
			/>
			<p className='mb-3'>
				Price: {product.price.toFixed(1)}$
			</p>
			<button 
				className='mb-3 block border px-2 cursor-pointer ease duration-200 hover:bg-pink-100'
				onClick={() => addToCart(product)}
			>
				Add to Cart
			</button>
			<button
				className='border px-2 cursor-pointer ease duration-200 hover:bg-pink-100 outline-0'
				onClick={() => navigate(`/product/${product.id}`)}
			>
				More details  
			</button>
		</div>
	)
}
