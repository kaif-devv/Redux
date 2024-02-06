import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Product from "./Product";
import { updateTotal } from '../slices/basketSlice';
import Error from './Error';
import {  useNavigate } from 'react-router-dom';
function BasketProduct() {
  const navigate = useNavigate();
  const { products, ammount, total } = useSelector((store) => store.basket);
  const dispatch = useDispatch();
  // this useEffect will update the total price of the products in the basket
  useEffect(() => {
    dispatch(updateTotal())
  }, [products, dispatch]);


  return (
    <div>
      {/* if the ammount of products is greater than 1 then show the products else show the error component */}
      {ammount >= 1 ? (<>
        <div>
          {/* Map through the products array and render a Product component for each item */}
          {products.map((item, i) => <Product
            key={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
            ammount={item.ammount}
          />
          )}
          <div className='flex items-center justify-around '>
            <div className='flex gap-14'>
              {/* Display the total price of the products in the basket */}
              <h1 className='text-2xl font-medium'>Total:  </h1>
              <p className='text-2xl font-medium'> ${total} </p>
            </div>
            {/* Checkout button */}
            <button onClick={()=> { navigate('/Redux/Checkout')}} className="cursor-pointer group relative flex gap-1.5 px-8 py-4 bg-black bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md">
              Checkout
            </button>
          </div>
        </div>
      </>) : (<>
        {/* If there are no products in the basket, render the Error component */}
        <Error />
      </>)}
    </div>
  )
}

export default BasketProduct