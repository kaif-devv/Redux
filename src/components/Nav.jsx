
import React from 'react'
import { useSelector } from 'react-redux';
import Error from './Error';
import AddProduct from './AddProduct';

function Nav() {
  const count = useSelector((store) => store.basket.ammount);
  function handle(){
    window.location.href = "/Redux/AddProduct"
  }
  return (
    <>
      <div className="px-14 flex justify-between text-2xl font-semibold">
        <h1>HOME</h1>
        <div className=''>
          <img className='h-10 w-10' src='https://cdn.iconscout.com/icon/free/png-512/free-cart-393-460366.png?f=webp&w=256' />
          <span className='text-xl bg-red-500 text-white border-red-500 rounded-full h-6 w-6 flex items-center justify-center absolute  top-3 right-11'>
            {count}
          </span>
        </div>
      </div>
      <div >
      <button onClick={handle} className= "cursor-pointer  group relative left-14 top-5 flex gap-1.5 px-4 py-2 bg-black bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md">
              ADD
            </button>
      </div>


    </>
  )
}

export default Nav