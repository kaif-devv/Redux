import React from 'react'
import '../App.css'
import Nav from './Nav'
import BasketProduct from './BasketProduct'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
function App() {
// this code prevents user from going back to login page by pressing back button
  window.history.pushState(null, null, window.location.href);
  window.onpopstate = function () {
    window.history.go(1);
  };
// this code prevents user from going back to login page by pressing back button

  const navigate = useNavigate();
  const isLoading = useSelector((store) => store.basket.isLoading);
  
  useEffect(() => {
    if (isLoading) {
      navigate('/Redux/login');
    }
  }, [isLoading, navigate]);
  if (isLoading) {
    return <h1 className='flex w-screen h-screen text-3xl justify-center align-middle'>Loading...</h1>;
  }

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