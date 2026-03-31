import { createContext, useEffect, useState } from 'react'
import type { CartItem } from '../types/cartType'
import type { IProduct } from '../types/product'

type CartContextType = {
	cart: CartItem[]
	addToCart: (product: IProduct) => void
	removeFromCart: (id: number) => void
}

interface ICartProvider {
	children: React.ReactNode
}

export const CartContext = createContext<CartContextType >({
	cart: [],
	addToCart: () => {},
	removeFromCart: () => {}
})


export const CartProvider = ({children}: ICartProvider) => {

	const [cart, setCart] = useState<CartItem[]>(() => {
		
		const saved = localStorage.getItem('cart')

		if (saved) {
			const parsed = JSON.parse(saved)
			return parsed.length > 0 ? parsed : [] as CartItem[]
		}

		return [] as CartItem[]

	})

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])

	const addToCart = (product: IProduct) => {
		setCart(prev => {
			const existing = cart.find(item => 
				item.id === product.id
			)

			if (existing) {
				return prev.map(item => 
					item.id === product.id ? {...item, quantity: item.quantity + 1 } : item
				)
			}

			return [
				...prev,
				{
					id: product.id,
					title: product.title,
					price: product.price,
					quantity: 1
				}
			] 

		})
	}

	const removeFromCart = (id: number) => {
		setCart(prev => prev.filter(item => 
			item.id !== id
		)
		)
	}

	return (
		<CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
			{children}
		</CartContext.Provider>
	)

}