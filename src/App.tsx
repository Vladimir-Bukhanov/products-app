
import { useState } from 'react'
import ErrorMessage from './components/ErrorMessage'
import Loader from './components/Loader'
import ProductList from './components/ProductList'
import { useProducts } from './hooks/useProducts'



export default function App() {

  const [searchBar, setSearchBar] = useState<string>('')

  const { products, loading, error } = useProducts()

  const searchedProduct = products.filter(product => (
      product.title.toLocaleLowerCase().includes(searchBar.toLocaleLowerCase())
    )
  )

  return (
    <div className='mx-auto w-[90%] mt-[10vh]'>
      <h1 className='text-center text-xl mb-5'>
        Products
      </h1>
      <input 
        type="text"
        className='outline-0 px-2 border mb-5 w-1/2'
        placeholder='Search product...'
        value={searchBar}
        onChange={(e) => setSearchBar(e.target.value)} 
      />
      { loading && <Loader /> }
      { error && <ErrorMessage error={error}/>}

      { products && 
        <ProductList 
          products={searchedProduct}
        />
      }
    </div>
  )
}
