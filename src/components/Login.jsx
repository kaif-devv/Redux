import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { account } from '../appwrite/appwriteConfig';
import { useDispatch } from 'react-redux';
import { login } from '../slices/basketSlice';
function Login() {
    const [Lemail, setLemail] = useState('');
    const [Lpassword, setLpassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
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
    // this function will handle the login process and will dispatch the login action if the login is successful
    function handleLogin(e) {
        e.preventDefault();
        account.createEmailSession(Lemail, Lpassword).then((response) => {
            if (response.$id) {
                dispatch(login());
                navigate('/Redux');
            }
        })
            .catch((error) => {
                console.log(error);
                setError(error.message);
            });
    }

    return (
        <>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col justify-center items-center">
                    {/* this div will only show if error state is not null */}
                  {error ?   <div
                        class="relative block h-auto w-auto  p-4 mb-4 text-base leading-5 text-white bg-red-500 rounded-xl opacity-100 font-regular">
                        {error}
                    </div> : null}
                   
                    <h2 className="mt-0 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handleLogin}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                            <div className="mt-2">
                                <input onChange={(e) => setLemail(e.target.value)} id="email" name="email" type="email" value={Lemail} autoComplete="email" required className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
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
                                <input onChange={(e) => setLpassword(e.target.value)} value={Lpassword} id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <button type="submit" onClick={handleLogin} className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        New user?
                        <a href="/Redux/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Register a new account</a>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Login;