import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addProduct } from '../slices/basketSlice';
import { useNavigate } from 'react-router-dom';
function AddProduct() {
  const dispatch=useDispatch();
    const [fname, setFname] = useState('');
    const [fprice, setFprice] = useState('');
    const [fimage, setFimage] = useState('');
    const [fammount, setFammount] = useState('');

    const navigate = useNavigate();
    const temp = (e) => {
      e.preventDefault();
      // Use history.push instead of window.location.href
      navigate('/Redux');
    };


    function handleSubmit(e) {
        try {
            e.preventDefault();
            dispatch(addProduct({
                name: fname,
                price: fprice,
                image: fimage,
                ammount: fammount,
            }));
            setFname('');
            setFprice('');
            setFimage('');
            setFammount('');
            console.log(fname);

        } catch (error) {
            console.log(error)
        }
       
    }
    return (
        <>  
        <div>
        <button className='cursor-pointer group relative flex m-10 px-4 py-4 bg-black bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md' onClick={temp} >Back to Home</button>

        </div>
            <h1 className='mt-20 mb-5 flex justify-center items-center text-2xl font-semibold'>Enter the Product Details</h1>
            <form onSubmit={handleSubmit} className=" flex flex-col gap-5  max-w-sm mx-auto">
                <div className="mb-5">
                    <input type="text" onChange={e => setFname(e.target.value)} id="fname" value={fname} className=" shadow-sm bg-gray-50 border border-gray-300 text-black-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter Item Name" />
                </div>
                <div className="mb-5">
                    <input type="number" onChange={e => setFprice(e.target.value)} id="fprice" value={fprice} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Price" />
                </div>
                <div className="mb-5">
                    <input type="url" id="fimage" onChange={e => setFimage(e.target.value)} value={fimage} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter Item Url" />
                </div>
                <div className="mb-5">
                    <input type="number" id="fammount" onChange={e => setFammount(e.target.value)} value={fammount} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter No of Items" />
                </div>
                <button onSubmit={handleSubmit} type="submit" className="text-gray-200 bg-blue-200 hover:bg-blue-800 hover:text-black focus:ring-2 focus:outline-none focus:ring-black font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-white  dark:focus:ring-black">Add the Product</button>
            </form>
        </>
    )
}
export default AddProduct;
