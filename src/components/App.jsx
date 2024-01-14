import React from 'react'
import '../App.css'
import Nav from './Nav'
import BasketProduct from './BasketProduct'
import { useDispatch, useSelector } from 'react-redux';
function App() {
  const dispatch = useDispatch();
  const {products} = useSelector((store)=> store.basket)
  return (
    <>

    <div className="mt-5">
    <Nav />
    <BasketProduct />
    </div>
    
    </>
  )
}

export default App