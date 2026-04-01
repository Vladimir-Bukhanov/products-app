import { useContext, useMemo, useState } from 'react'
import Cart from '../components/Cart'
import Header from '../components/Header'
import Sorts from '../components/Sorts'
import { CartContext } from '../context/CartContext'
import type { SortField, SortState } from '../types/SortType'



export default function CartsPage() {

	const [sortCart, setSortCart] = useState<SortState>({field: null, order: 'asc'})



	const handleSortCart = (field: SortField) => {
    setSortCart(prev => {
      if (prev.field === field) {
        return {
          field,
          order: prev.order === "asc" ? "desc" : "asc"
        }
      }

      return {
        field,
        order: "asc"
      }

    })
  }

  const { cart } = useContext(CartContext)

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)

	const sortedCart = useMemo(() => {

		if (!sortCart.field) return cart

		const sorted = [...cart].sort((a, b) => {

			if (sortCart.field === "title") {
				return a.title.localeCompare(b.title)
			}

			if (sortCart.field === "price") {
				return a.price - b.price
			}

			return 0

		})

		return sortCart.order === "asc" ? sorted : sorted.reverse()

	}, [cart, sortCart])

	return (
		<>
			<Header>
        <div>
          <Sorts
            sort={sortCart}
            onSort={handleSortCart}
          />
        </div>
      </Header>
			{cart.length === 0 && <p className='text-xl mt-20 text-center'>Cart is empty</p>}
			{
				cart.length > 0 &&
				<div className='mt-15 w-[90%] sm:w-[80%] md:w-[70%] mx-auto p-3'>
					<h2 className='text-xl text-center mb-3'>Cart</h2>
					<p className='mb-3'>Total price: {totalPrice.toFixed(1)}$</p>
					<Cart cart={sortedCart} />
				</div> 
			}

		</>
	)
}
