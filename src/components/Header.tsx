import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'


export default function Header() {

	const { cart } = useContext(CartContext)

	  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0)

	return (
		<div className='absolute top-0 w-full h-10 bg-gray-100 flex justify-center px-10 items-center'>
			<Link 
				to="/"
				className='mr-10 hover:text-blue-700 hover:underline-offset-2 hover:underline ease duration-100 cursor-pointer'
			>
				Home
			</Link>
			<Link 
				to="/cart"
				className='hover:underline-offset-2 hover:underline hover:text-blue-700 ease duration-100 cursor-pointer'
			>
				Cart ({totalItems})
			</Link>
		</div>
	)
}
