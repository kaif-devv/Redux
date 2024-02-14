import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../slices/basketSlice';
import { useNavigate } from 'react-router-dom';
import { database } from '../appwrite/appwriteConfig';
import { ID } from 'appwrite';
function AddProduct() {
    // Get the products from the Redux store
    const products = useSelector((state) => state.basket.products);
    // Get the ID of the last product in the array
    const newId = products[products.length - 1].id;

    // Hooks for dispatching actions and navigation
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // State variables for the form inputs
    const [fname, setFname] = useState('');
    const [fprice, setFprice] = useState(null);
    const [fimage, setFimage] = useState('');
    const [fammount, setFammount] = useState(null);

    // Function to navigate to the '/Redux' route
    const temp = (e) => {
        e.preventDefault();
        navigate('/Redux');
    };

    // Function to handle the form submission
    function handleSubmit(e) {
        try {
            e.preventDefault();
            const dbPromise = database.createDocument(
                '65cb5293dee6c6f2ebf5',
                '65cb52a735996806a97e',
                ID.unique(),
                { "name": fname, "price": fprice, "image": fimage, "ammount": fammount, "id": newId + 1 }
            );
            dbPromise.then(response => {
                console.log(response);
                navigate('/Redux');
            }).catch(error => {
                console.log(error);
            });
            // Dispatch the addProduct action with the form inputs as payload
            // dispatch(addProduct({
            //     name: fname,
            //     price: fprice,
            //     image: fimage,
            //     ammount: fammount,
            //     id: newId+1
            // }));
            // Reset the form inputs
            setFname('');
            setFprice('');
            setFimage('');
            setFammount('');
            // Navigate to the '/Redux' route
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <div className='pt-11 flex items-center justify-center mr-96 pr-10'>
                <button className='cursor-pointer group relative  px-4 py-4 bg-black bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md' onClick={temp} >Back to Home</button>
            </div>
            <h1 className='mt-20 mb-5 flex justify-center items-center text-2xl font-semibold'>Enter the Product Details</h1>
            <form onSubmit={handleSubmit} className=" flex flex-col gap-5  max-w-sm mx-auto">
                <div className="mb-5">
                    <input type="text" onChange={e => setFname(e.target.value)} id="fname" value={fname} className=" shadow-sm bg-gray-50 border border-gray-300 text-black-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter Item Name" />
                </div>
                <div className="mb-5">
                    <input type="number" onChange={e => setFprice(Number(e.target.value))} id="fprice" value={fprice} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Price" />
                </div>
                <div className="mb-5">
                    <input type="url" id="fimage" onChange={e => setFimage(e.target.value)} value={fimage} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter Item Url" />
                </div>
                <div className="mb-5">
                    <input type="number" id="fammount" onChange={e => setFammount(Number(e.target.value))} value={fammount} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter No of Items" />
                </div>
                <button onSubmit={handleSubmit} type="submit" className="text-gray-200 bg-blue-200 hover:bg-blue-800 hover:text-black focus:ring-2 focus:outline-none focus:ring-black font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-white  dark:focus:ring-black">Add the Product</button>
            </form>

        </>
    )
}
export default AddProduct;
