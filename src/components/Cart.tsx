
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import type { CartItem } from '../types/cartType'

import { AnimatePresence, motion } from 'framer-motion'

interface ICart {
	cart: CartItem[]
}

export default function Cart({ cart }: ICart) {

	const { removeFromCart } = useContext(CartContext)

	return (
		<AnimatePresence mode='popLayout'>
			<div className='mb-3'>
				{cart.map(item => (
					<motion.li
						key={item.title}
						className='list-none'
						layout
						initial={{ opacity:0, y:10 }}
						animate={{ opacity:1, y:0 }}
						exit={{ opacity:0 }}
						transition={{ duration:0.2 }}
					>
						<div 
							key={item.id}
							className='mb-5 border p-3'
						>
							<p className='mb-3'>{item.title}</p>
							<p className='mb-3'>Quantity: {item.quantity}</p>
							<p className='mb-3'>Price: {item.price.toFixed(1)}$</p>
							<button className='border cursor-pointer px-2 hover:bg-blue-100 duration-200'
								onClick={() => removeFromCart(item.id)}
							>
								Delete
							</button>
						</div>
					</motion.li>
				))}
			</div>
		</AnimatePresence>
	)
}
