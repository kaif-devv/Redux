import React from 'react'
import { useState, useEffect } from 'react'
import { account } from '../appwrite/appwriteConfig';
import { useNavigate } from 'react-router-dom';
function Signup() {
    const navigate = useNavigate();
    const [Runame, setRuname] = useState('');
    const [Rname, setRname] = useState('');
    const [Remail, setRemail] = useState('');
    const [Rpassword, setRpassword] = useState('');
    const [error, setError] = useState('');
    // this useEffect will run when error state changes and will set a timer to clear the error state after 8 seconds
    useEffect(() => {
        if (error) {
            const timer = setTimeout(() => {
                setError(null);
            }, 8000);

            return () => clearTimeout(timer);
        }
    }, [error]);
    // this function will handle the signup process and will navigate to login page if the signup is successful
    async function handleSignup(e) {
        e.preventDefault();
        console.log('handleSignup called');
        try {
            const response = await account.create(Runame, Remail, Rpassword, Rname);
            console.log('Signup response:', response);
            if (response.$id) navigate('/Redux/login');
        } catch (error) {
            console.log('Signup error:', error);
            setError(error.message);
        }
    }
    return (
        <>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col justify-center items-center" >
                    {error ? <div
                        class="relative block h-auto w-auto p-3.5 mb-0 text-base leading-5 text-white bg-red-500 rounded-3xl overflow-hidden whitespace-nowrap overflow-ellipsis opacity-100">
                       {error}
                    </div> : null}
                    <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign up for a new account</h2>
                </div>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handleSignup}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
                            <div className="mt-2 ">
                                <input id="name" value={Rname} onChange={(e) => setRname(e.target.value)} name="name" type="text" autoComplete="email" required className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">Username</label>
                            <div className="mt-2 ">
                                <input id="username" value={Runame} onChange={(e) => setRuname(e.target.value)} name="name" type="text" autoComplete="email" required className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                            <div className="mt-2">
                                <input id="email" onChange={(e) => setRemail(e.target.value)} value={Remail} name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input id="password" onChange={(e) => setRpassword(e.target.value)} value={Rpassword} name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div>
                            <button type="submit" onClick={handleSignup} className="flex w-full justify-center rounded-md bg-indigo-600 px-3 p-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign up</button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        already a member?
                        <a href="/Redux/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Login</a>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Signup