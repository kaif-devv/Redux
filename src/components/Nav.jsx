// import React from 'react'
// import { useSelector } from 'react-redux'
// function Nav() {
//     const count = useSelector((store)=>store.basket.ammount)
//   return (
//     <div className="flex justify-around text-2xl font-semibold">
//         <h1>HOME</h1>
//         <h1>BASKET 
//             <span className='text-xs align-top bg-red-500 text-white
// rounded-full px-2 py-1 mx-1'>{count} </span>
//         </h1>
// </div>
//   )
// }

// export default Nav

import React from 'react'
import { useSelector } from 'react-redux'
function Nav() {
  const count = useSelector((store) => store.basket.ammount)
  return (
    <div className="px-14 flex justify-between text-2xl font-semibold">
      <h1>HOME</h1>
      <div className=''>
        <img className='h-10 w-10' src='https://cdn.iconscout.com/icon/free/png-512/free-cart-393-460366.png?f=webp&w=256' />
        <span className='text-xl bg-red-500 text-white border-red-500 rounded-full h-6 w-6 flex items-center justify-center absolute  top-3 right-11'>
          {count}
        </span>
      </div>


    </div>
  )
}

export default Nav