import { useState } from 'react'
import type { IProduct } from '../types/product'

interface IProductCard {
	product: IProduct
}

export default function ProductCard({product}: IProductCard) {

	const [show, setShow] = useState<boolean>(false)

	return (
		<div 
			className='border p-5 w-full'
		>
			<h2 className='text-xl mb-3'>
				{product.title}
			</h2>
			<img
				className='w-2/3 mb-3' 
				src={product.image} 
				alt={product.title} 
			/>
			<p className='mb-3'>
				Category {product.category}
			</p>
			<p>Price: {Number(product.price).toFixed(1)}</p>
			<button
				className='border mb-3 px-2 cursor-pointer ease duration-200 hover:bg-pink-300'
				onClick={() => setShow(prev => !prev)}
			>
				{show ? 'Hide' : 'Show'} Details  
			</button>

			{show && 
				<p>{product.description}</p>
			}
		</div>
	)
}
