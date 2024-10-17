
import './App.css'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import Product from './pages/Product'
import About from './pages/About'
import Contact from './pages/Contact'
import {Routes,Route} from 'react-router-dom'

function App() {
 

  return (
  <>
 <Navbar/>
 <div className="nav-links">
 <Routes>
<Route path='/' element={<Home/>} />
<Route path='/Product' element = {<Product/>} />
<Route path='/about' element = {<About/>} />
<Route path='/contact' element = {<Contact/>} />

</Routes>
 </div>

  </>
  )
}


export default App
