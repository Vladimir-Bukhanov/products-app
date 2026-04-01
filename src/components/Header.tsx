import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

interface IHeader {
	children: React.ReactNode
}

export default function Header({children}: IHeader) {

	const [toggleMenu, setToggleMenu] = useState<boolean>(false)

	const { cart } = useContext(CartContext)

	  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0)
 
	return (
		<>
 
			<div className={`absolute border z-100 max-w-60 left-1/2 -translate-x-1/2 flex flex-col justify-center items-center ease duration-200 -top-150 ${toggleMenu ? 'top-10' : ''} w-full bg-gray-100 h-[40vh]`}>
				{children}
			</div>

			<div className='absolute top-0 w-full h-10 bg-gray-100 flex justify-center px-10 items-center'>
				<div 
					className='absolute right-5 cursor-pointer flex flex-col items-center justify-center top-1/2 -translate-y-1/2'
					onClick={() => setToggleMenu(prev => !prev)}
				>
					<span className={`w-5 transform transition-all duration-300 h-0.5 mb-1 origin-left bg-black ${toggleMenu && 'rotate-45'}`}></span>
					<span className={`w-5 transform transition-all duration-300 mb-1 origin-left ${toggleMenu && 'opacity-0'} h-0.5 bg-black`}></span>
					<span className={`w-5 transform transition-all duration-300 mb-1 origin-left ${toggleMenu && '-rotate-45 translate-y-[1px]'} h-0.5 bg-black`}></span>
				</div>
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
		</>
	)
}
