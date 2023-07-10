import { useState } from 'react'
import NavBar from './components/NavBar/NavBar' 
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import CartWidget from './components/CartWidget/CartWidget'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <NavBar/>
   <CartWidget />
   <ItemListContainer greeting={'Bienvenidos a la mas grande tienda de videojuegos'} />
   </> 
  )
}

export default App
