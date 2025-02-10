import './App.css'
import Navbar from './component/Navbar/navbar'
import { Route, Routes} from 'react-router-dom'
import Home from './pages/Home/Home'
import Card from './pages/Card/Card'
import Footer from './component/Footer/Footer'
import { useState } from 'react'
import LoginPopup from './component/loginpopup/LoginPopup'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'

function App() {

  const [showLogin,setShowLogin] = useState(false)

  return (

    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin} />:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Card' element={<Card/>}/>
        <Route path='/Order' element={<PlaceOrder/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App