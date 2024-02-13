import React from 'react'
import { useNavigate } from 'react-router-dom'
function Checkout() {
    const navigate = useNavigate()
    return (
        <div className='flex flex-col items-center justify-center'>
           <h1>Congratulations, your Item has been Checkedout</h1> 
            <br/>
            <button onClick={()=>
                navigate('/Redux/')
            }>Go back</button>
        </div>
    )
}

export default Checkout