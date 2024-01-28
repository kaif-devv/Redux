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
 // Prevents the user from navigating back to the previous page
 window.history.pushState(null, null, window.location.href);
 window.onpopstate = function () {
   window.history.go(1);
 };

 // Hooks for navigation and loading state
 const navigate = useNavigate();
 const isLoading = useSelector((store) => store.basket.isLoading);

 // Redirects the user to the login page if the app is still loading
 useEffect(() => {
   if (isLoading) {
     navigate('/Redux/login');
   }
 }, [isLoading, navigate]);

 // Displays a loading message if the app is still loading
 if (isLoading) {
   return <h1 className='flex w-screen h-screen text-3xl justify-center align-middle'>Loading...</h1>;
 }

 // Fetches documents from the database when the component mounts
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
 }, []); // Empty dependency array means this effect runs once on mount

 // Rest of your component

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