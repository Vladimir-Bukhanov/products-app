
import type { CartItem } from '../types/cartType'

interface ICart {
	cart: CartItem[]
}

export default function Cart({ cart }: ICart) {
	return (
		<div>
			<h2>Cart</h2>

			{cart.map(item => (
				<div 
					key={item.id}
					className='mb-3'
				>
					<p className='mb-3'>{item.title}</p>
					<p className='mb-3'>{item.quantity}</p>
					<p>{item.price}$</p>
				</div>
			))}
		</div>
	)
}
