import React from 'react'
import '../App.css'
import Nav from './Nav'
import BasketProduct from './BasketProduct'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ID } from "appwrite";
import { database } from "../appwrite/appwriteConfig";
function App() {
  window.history.pushState(null, null, window.location.href);
  window.onpopstate = function () {
    window.history.go(1);
  };

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

  useEffect(() => {
    let promise = database.listDocuments(
      "65ab7ea512543295b98e",
      "65b50e806ac5fa957e06",
    );
    promise.then(function (response) {
      console.log(response);
    }, function (error) {
      console.log(error);
    });
  },[]);

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