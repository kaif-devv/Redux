import { useDispatch, useSelector } from "react-redux";
import { addAmmount, removeAmmount, removeItem } from "../slices/basketSlice" // import the actions from the basketSlice

function Product({ name, price, image, ammount }) { // destructure the props from the basketSlice
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.basket.isLoading);
  if (isLoading) return <h1>Loading...</h1> // if the isLoading is true then show the loading component 
  return (
    // this is the product component that will be rendered in the basket component 
    <div className='flex flex-row items-center  px-20 my-10 justify-around'>
      <img src={image} className='w-40' />
      <div className="w-1/2 px-10">
        <p className='text-xl font-medium'>{name} </p>
        <p className='text-lg'>${price} </p>

        {/* Below,  dispatch the removeItem action when the button is clicked */}
        <button onClick={() => { dispatch(removeItem({ name })) }} className='bg-red text-red-500'>Remove</button>  
      </div>
      <div className='flex flex-col items-center '>
        <p className='font-semibold '>Quantity</p>
        <div className='flex gap-4  justify-around'>
          <button onClick={() => { // dispatch the removeAmmount action when the button is clicked

            if (ammount > 1) { dispatch(removeAmmount({ name })) } else { dispatch(removeItem({ name })) } // if the ammount is greater than 1 then dispatch the removeAmmount action else dispatch the removeItem action
          }} className='font-bold px-2 border-2 border-black-300 bg-gray-200 rounded-full'>-</button>
          <p>{ammount} </p>
          {/* // dispatch the addAmmount action when the button is clicked */}
          <button onClick={() => { dispatch(addAmmount({ name })) }} className='font-bold px-2 border-2 border-black-300 bg-gray-200 rounded-full'>+</button> 
        </div>
      </div>
    </div>

  )
}

export default Product