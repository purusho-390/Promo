import React from 'react'
import { BrowserRouter , Route , Router, Routes} from 'react-router-dom'
import Header from './Components/Header'
import Home from './Pages/Home'
import Category from './Pages/Category'

export default function App() {
  return (
    <main className='text-tertiary'>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/clothing' element={<Category/>}></Route>
        <Route path='/cosmetics' element={<Category/>}></Route>
        <Route path='/electronics' element={<Category/>}></Route>
        <Route path='/product' element={<Product/>}></Route>
        <Route path='/:productId' element={<Product/>}></Route>

      </Routes>
      <Footer/>
      </BrowserRouter>
    </main>
  )
}
