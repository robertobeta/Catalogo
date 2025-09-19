import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar.jsx'
import './App.css';
import Home from './Pages/Home';
import Category from './Pages/Category.jsx';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Footer from './Components/Home/Footer.jsx'
import ProductDetail from './Pages/ProductDetail.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/Playeras" element={<Category category="Playeras"/>}/>
        <Route path="/Camisas" element={<Category category="Camisas"/>}/>
        <Route path="/Chamarras" element={<Category category="Chamarras"/>}/>
        <Route path="/Outerwear" element={<Category category="Outerwear"/>}/>
        <Route path="/Accessories" element={<Category category="Accessories"/>}/>
        <Route path="/:category/Product/:id" element={<ProductDetail />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Login" element={<Login />}/>
        <Route path="/SignUp" element={<SignUp />}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
