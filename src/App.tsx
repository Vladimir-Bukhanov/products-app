
import ProductList from './components/ProductList'
import { useProducts } from './hooks/useProducts'



export default function App() {

  const { products, loading, error } = useProducts()

  return (
    <div className='mx-auto w-[90%] mt-[10vh]'>
      <h1 className='text-center text-xl mb-5'>
        Products
      </h1>
      {loading && 
        <p className='text-xl text-center mt-10'>
          Loading...
        </p>
      }
      { error && 
        <p className='text-red-500 mt-10 text-center text-xl'>
          {error}
        </p>
      }

      {products && 
        <ProductList 
          products={products}
        />
      }
    </div>
  )
}
