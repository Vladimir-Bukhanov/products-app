
import { useState } from 'react'
import ErrorMessage from './components/ErrorMessage'
import Filters, { type FiltersType } from './components/Filters'
import Loader from './components/Loader'
import ProductList from './components/ProductList'
import { useProducts } from './hooks/useProducts'



export default function App() {

  const [searchBar, setSearchBar] = useState<string>('')

  const [filterBtn, setFilterBtn] = useState<FiltersType | null>(null)

  const { products, loading, error } = useProducts()

  const filteredProducts = products.filter(product => {

    if (filterBtn === "electronics") {
      return product.category === "electronics"
    }

    if (filterBtn === "men's clothing") {
      return product.category === "men's clothing"
    }

    if (filterBtn === "women's clothing") {
      return product.category === "women's clothing"
    }

    if (filterBtn === "jewelery") {
      return product.category === "jewelery"
    }

    return true

  })

  const searchedProduct = filteredProducts.filter(product => (
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
        className='outline-0 px-2 border mb-3 w-1/2 max-w-100'
        placeholder='Search product...'
        value={searchBar}
        onChange={(e) => setSearchBar(e.target.value)} 
      />
      <button 
        className='block border px-2 mb-5 cursor-pointer ease duration-200 hover:bg-blue-100'
        onClick={() => setFilterBtn(null)}
      >
        All products
      </button>
      <Filters 
        currentFilter={filterBtn}
        onFilter={setFilterBtn}
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
