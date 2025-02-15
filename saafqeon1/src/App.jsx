import React from 'react'
import './App.css'
import Home from './components/home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './components/pages/about'
import Blogs from './components/pages/blogs'
import Service from './components/pages/service'
import Team from './components/pages/team'
import Product from './components/pages/product'
import Contact from './components/pages/contact'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/blog' element={<Blogs />} />
      <Route path='/team' element={<Team />} />
      <Route path='/services' element={<Service />} />
      <Route path='/products' element={<Product />} />
      <Route path='/contact' element={<Contact />} />



    </Routes>
    </BrowserRouter>
      
    </>
  )
}


export default App
