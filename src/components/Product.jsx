import { useDispatch, useSelector } from "react-redux";
import { addAmmount, removeAmmount, removeItem } from "../slices/basketSlice"
function Product({ name, price, image, ammount }) {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.basket.isLoading);
  if (isLoading) return <h1>Loading...</h1>
  return (
    <div className='flex flex-row items-center  px-20 my-10 justify-around'>
      <img src={image} className='w-40' />
      <div className="w-1/2 px-10">
        <p className='text-xl font-medium'>{name} </p>
        <p className='text-lg'>${price} </p>
        <button onClick={() => { dispatch(removeItem({ name })) }} className='bg-red text-red-500'>Remove</button>
      </div>
      <div className='flex flex-col items-center '>
        <p className='font-semibold '>Quantity</p>
        <div className='flex gap-4  justify-around'>
          <button onClick={() => {
            if (ammount > 1) { dispatch(removeAmmount({ name })) } else { dispatch(removeItem({ name })) }
          }} className='font-bold px-2 border-2 border-black-300 bg-gray-200 rounded-full'>-</button>
          <p>{ammount} </p>
          <button onClick={() => { dispatch(addAmmount({ name })) }} className='font-bold px-2 border-2 border-black-300 bg-gray-200 rounded-full'>+</button>
        </div>
      </div>
    </div>

  )
}

export default Product