import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Product from "./Product";
import { updateTotal } from '../slices/basketSlice';
import Error from './Error';
function BasketProduct() {
  const { products, ammount, total } = useSelector((store) => store.basket);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateTotal())
  }, [products, dispatch]);
  const isLoading = useSelector((state) => state.basket.isLoading);
  if (isLoading) return <h1>Loading...</h1>
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

            <button className="cursor-pointer group relative flex gap-1.5 px-8 py-4 bg-black bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md">
              Checkout
            </button>
          </div>
        </div>
      </>) : (<>
        <Error />
      </>)}
    </div>
  )
}

export default BasketProduct