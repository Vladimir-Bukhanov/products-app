
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import type { CartItem } from '../types/cartType'

interface ICart {
	cart: CartItem[]
}

export default function Cart({ cart }: ICart) {

	const { removeFromCart } = useContext(CartContext)

	return (
		<div className='mb-3'>
			{cart.map(item => (
				<div 
					key={item.id}
					className='mb-5 border p-3'
				>
					<p className='mb-3'>{item.title}</p>
					<p className='mb-3'>Quantity: {item.quantity}</p>
					<p className='mb-3'>Price: {item.price}$</p>
					<button className='border cursor-pointer px-2 hover:bg-blue-100 duration-200'
						onClick={() => removeFromCart(item.id)}
					>
						Delete
					</button>
				</div>
			))}
		</div>
	)
}
