import ProductList from './components/ProductList'
import type { IProduct } from './types/product'

const initialProducts: IProduct[] = [
  {
    id: 1,
    title: 'T-shirt',
    price: '50',
    description: 'High quality',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png'
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png"
  }
]

export default function App() {

  return (
    <div className='mx-auto w-[90%] sm:w-[80%] md:w-1/2'>
      <h1>
      Products
      </h1>

      <ProductList 
        products={initialProducts}
      />
    </div>
  )
}
