import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from "./components/Navbar"
import Home from './components/Home'
import { Login } from './components/auth/Login'
import { Signup } from './components/auth/Signup'
import { Store } from './components/Store'
import { Premium } from './components/Premium'
import { Cart } from './components/Cart'
import { Profile } from './components/auth/Profile'
import { AddItem } from './components/EditItems/AddItem'
import { ProductDetails } from './components/ProductDetails'
import { DeleteItem } from './components/EditItems/DeleteItem'
import { UpdateItem } from './components/EditItems/UpdateItem'
import { Search } from './components/Search'
import { Checkout } from './components/Checkout'

function App() {
  return <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/store' element = {<Store/>}/>
      <Route path='/item/:id' element={<ProductDetails/>} />
      <Route path='/cart/:userId' element = {<Cart/>}/>
      <Route path='/premium' element = {<Premium/>}/>
      <Route path='/search' element = {<Search/>}/>
      <Route path='/checkout' element = {<Checkout/>}/>
      <Route path='/addItem' element = {<AddItem/>}/>
      <Route path='/deleteItem' element = {<DeleteItem/>}/>
      <Route path='/updateItem' element = {<UpdateItem/>}/>
      <Route path='/login' element = {<Login/>}/>
      <Route path='/signup' element = {<Signup/>}/>
      <Route path='/user/:id' element = {<Profile/>}/>
    </Routes>
  </BrowserRouter>
}

export default App
