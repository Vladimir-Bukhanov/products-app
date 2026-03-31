
import type { CartItem } from '../types/cartType'

interface ICart {
	cart: CartItem[]
}

export default function Cart({ cart }: ICart) {
	return (
		<div className='mb-3'>
			{cart.map(item => (
				<div 
					key={item.id}
					className='mb-5 border p-3'
				>
					<p className='mb-3'>{item.title}</p>
					<p className='mb-3'>Quantity: {item.quantity}</p>
					<p>Price: {item.price}$</p>
				</div>
			))}
		</div>
	)
}
