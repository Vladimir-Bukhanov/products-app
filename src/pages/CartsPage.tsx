import { useContext } from 'react'
import Cart from '../components/Cart'
import Header from '../components/Header'
import { CartContext } from '../context/CartContext'



export default function CartsPage() {


  const { cart } = useContext(CartContext)

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)

	return (
		<>
			<Header />
			{cart.length === 0 && <p className='text-xl mt-20 text-center'>Cart is empty</p>}
			{
				cart.length > 0 &&
				<div className='mt-15 w-[90%] sm:w-[80%] md:w-[70%] mx-auto p-3'>
					<h2 className='text-xl text-center mb-3'>Cart</h2>
					<p className='mb-3'>Total price: {totalPrice.toFixed(1)}$</p>
					<Cart cart={cart} />
				</div> 
			}

		</>
	)
}
