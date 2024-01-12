import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Product from "./Product";
import { updateTotal } from '../slices/basketSlice'; 
function BasketProduct() {
  const { products, ammount, total } = useSelector((store) => store.basket);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateTotal())

  }, [products, dispatch])
  return (
    <div>
      {ammount >= 1 ? (<>
        <div>
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
            <h1 className='text-2xl font-medium'>Total:  </h1>
            <p className='text-2xl font-medium'> ${total} </p>
            </div>
            
            <button class="cursor-pointer group relative flex gap-1.5 px-8 py-4 bg-black bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md">
              Checkout
            </button>
          </div>
        </div>
      </>) : (<>
        <div className='flex justify-around my-40 font-semi-bold text-3xl '>
          <h1>NOT FOUND</h1>
        </div>
      </>)}


    </div>
  )
}

export default BasketProduct