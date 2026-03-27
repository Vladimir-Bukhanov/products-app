import { Route, Routes } from 'react-router-dom'
import ProductDetails from './pages/ProductDetails'
import ProductsPage from './pages/ProductsPage'

export default function App() {
 
  return (
    <Routes>
      <Route path='/' element={<ProductsPage />} />

      <Route path='/product/:id' element={<ProductDetails />} /> 
    </Routes>
  )
}
