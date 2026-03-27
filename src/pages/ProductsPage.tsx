import { useState } from 'react'
import ErrorMessage from '../components/ErrorMessage'
import Filters, { type FiltersType } from '../components/Filters'
import Loader from '../components/Loader'
import ProductList from '../components/ProductList'
import Sorts, { type SortsType } from '../components/Sorts'
import { useProducts } from '../hooks/useProducts'


export default function ProductsPage() {

	  const [searchBar, setSearchBar] = useState<string>('')

  const [filterBtn, setFilterBtn] = useState<FiltersType | null>(null)

  const [sortBtn, setSortBtn] = useState<SortsType>("title")
  
  const [visibleCount, setVisibleCount] = useState<number>(6)

  const { products, loading, error } = useProducts()

  const visibleProducts = products.slice(0, visibleCount)

  const filteredProducts = visibleProducts.filter(product => {

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

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortBtn === "title") {
      return a.title.localeCompare(b.title)
    } if (sortBtn === "price") {
      return a.price - b.price
    }
    return a.price - b.price
  })

  const searchedProduct = sortedProducts.filter(product => (
      product.title.toLocaleLowerCase().includes(searchBar.toLocaleLowerCase())
    )
  )

  const loadLess = () => {
    if (visibleCount <= 6) {
      return
    }
    setVisibleCount(prev => prev-6)
  }

  const loadMore = () => {
    if (visibleCount >= products.length) {
      return
    } 
    setVisibleCount(prev => prev+6)
  }

  return (
    <div className='mx-auto w-[90%] mt-10 mb-10'>
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
      <Sorts
        currentSort={sortBtn}
        onSort={setSortBtn}
      />
      <button 
        className={`block border px-2 mb-3 cursor-pointer ease duration-200 hover:scale-102 ${filterBtn === null ? 'bg-gray-100' : ''}`}
        onClick={() => setFilterBtn(null)}
      >
        all products
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
      <div className='flex justify-between'>
        <button
          className='border px-2 cursor-pointer hover:bg-pink-100 duration-200 mt-5'
          onClick={loadMore}
        >
          Load more
        </button>
        <button
          className='border px-2 cursor-pointer hover:bg-pink-100 duration-200 mt-5'
          onClick={loadLess}
        >
          Load less
        </button>
      </div>
    </div>
  )

}
