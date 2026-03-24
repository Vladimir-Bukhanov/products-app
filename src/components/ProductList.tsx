import { AnimatePresence, motion } from 'framer-motion'
import type { IProduct } from '../types/product'
import ProductCard from './ProductCard'

interface IProductList {
	products: IProduct[]
}

export default function ProductList({products}: IProductList) {
	return (
		<AnimatePresence mode="popLayout">
			<div className='grid gap-5 items-stretch grid-cols-1 w-full md:grid-cols-2'>
				{products.map(product => (
					<motion.li
						key={product.id}
						className='list-none'
						layout
						initial={{ opacity:0, y:10 }}
						animate={{ opacity:1, y:0 }}
						exit={{ opacity:0 }}
						transition={{ duration:0.2 }}
					>
						<ProductCard 
							product={product}
						/>
					</motion.li>
				))}
			</div>
		</AnimatePresence>
	)
}
