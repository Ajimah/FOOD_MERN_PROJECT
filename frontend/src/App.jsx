import {useState} from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/home/Home'
import Cart from './components/pages/cart/Cart'
import PlaceOrder from './components/pages/place-Order/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoggingPopUp from './components/LogingPopUp/LoggingPopUp'
import Verify from './components/pages/Verify/Verify'
import MyOrders from './components/pages/MyOrders/MyOrders'

const App = () => {

  const  [showLogin , setShowLogin]  = useState(false)

  return (
    <>
    {showLogin? <LoggingPopUp setShowLogin={setShowLogin}/>: <></>}
    <div className='app'>
      <Navbar setShowLogin ={setShowLogin}/>
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/Cart' element = {<Cart/>}/>
          <Route path='/Order' element = {<PlaceOrder/>}/>
          <Route path='/verify' element = {<Verify/>}/>
          <Route path='/myorders' element = {<MyOrders/>}/>
        </Routes>
    </div>
    <Footer />
    </>
  )
}

export default App