import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Home from './pages/Home'
import Header from './components/Header'
import Cart from './pages/Cart'
import Reserve from './pages/Reserve'
import Admin from './pages/Admin'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems")
    return savedCart ? JSON.parse(savedCart) : []
  })

  useEffect(() => {
    localStorage.setItem("cartItems",
      JSON.stringify(cartItems)
    )
  }, [cartItems])

  function addToCart(item){
    setCartItems((prev) => {
      const exists = prev.find((i) => i.id === item.id)

      if(exists){
        return prev.map((i) => 
        i.id === item.id
        ? { ...i, quantity: i.quantity + 1 }
        : i
      )
      }

      return [...prev, { ...item, quantity: 1 }]
    })
  }

  function removeFromCard(id){
    setCartItems((prev) => prev.filter((i) => i.id !== id))
  }

  function updateQuantity(id, amount){
    setCartItems((prev) =>
    prev.map((i) => 
     i.id === id
    ? { ...i, quantity: Math.max(1, i.quantity + amount)}
    : i))
  }

  function clearCart(){
    setCartItems([])
  }

  return (
    <BrowserRouter>
      <Header cartItems={cartItems}/>

      <Routes>
        <Route path='/' 
        element={
          <>
        <Home 
        addToCart={addToCart}/>
        <Footer />
        </>}/>

        <Route 
        path='/carrinho'
        element={<Cart 
          cartItems={cartItems}
        removeFromCard={removeFromCard}
        updateQuantity={updateQuantity}
        clearCart={clearCart}/>}/>
      </Routes>

      <Routes>
        <Route path='/reserva' element={<Reserve />}/>
      </Routes>

      <Routes>
        <Route path='/admin' element={<Admin />}/>
      </Routes>


    </BrowserRouter>
  )
}

export default App
