import { useContext } from 'react'
import Cart from '../components/Cart'
import { CartContext } from '../context/CartContext'



export default function CartsPage() {


  const { cart } = useContext(CartContext)

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)

	return (
		<div>
      <h2>Cart</h2>
      {cart.length === 0 && <p>Cart is empty</p>}
			<Cart cart={cart} />
			<p>Total price: {totalPrice}$</p>
		</div>
	)
}
