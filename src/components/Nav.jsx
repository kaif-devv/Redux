import React from 'react'
import { logout } from '../slices/basketSlice';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { account } from '../appwrite/appwriteConfig';

function Nav() {
  const dispatch = useDispatch();
  const count = useSelector((store) => store.basket.ammount);
  const navigate = useNavigate(); // Moved useNavigate to the top level
  const [name, setName] = React.useState('');
  useEffect(() => {
    const infopromise = account.get();
    infopromise.then((response) => {
      setName(response.name);
    });
  }, []);

  function handleLogout() {
    try {
      dispatch(logout());
      navigate('/Redux/login') // Changed navigate.push to navigate
    } catch (error) {
      console.log(error);
    }
  }

  function use(e) {
    e.preventDefault();
    navigate('/Redux/AddProduct') // Changed navigate.push to navigate
  }

  return (
    <>
      <div className="px-14 flex justify-between text-2xl font-semibold">
        <h1>HOME</h1>
        {name ? <p className='text-xl'>Hello  {name.slice(0, 1).toUpperCase()}{name.slice(1).toLocaleLowerCase()}</p> : <h1 className='text-xl opacity-15'>loading</h1>}
        <div>
          <div >
            <img className='h-10 w-10' src='https://cdn.iconscout.com/icon/free/png-512/free-cart-393-460366.png?f=webp&w=256' />
            <span className='text-xl bg-red-500 text-white border-red-500 rounded-full h-6 w-6 flex items-center justify-center absolute  top-3 right-11'>
              {count}
            </span>
          </div>
        </div>
      </div>
      <div className='flex pr-24 flex-row justify-between gap-3'>
        <button onClick={use} className="cursor-pointer  group relative left-14 top-5 flex gap-1.5 px-4 py-2 bg-black bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md">
          ADD
        </button>
        <button onClick={handleLogout} className="cursor-pointer  group relative left-14 top-5 flex gap-1.5 px-4 py-2 bg-black bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md">
          Logout
        </button>
      </div>
    </>
  )
}

export default Nav
