import React from 'react'

function Error() {
  return (
    <div className="flex items-center justify-center px-2 md:px-0">
  <div>
    <p className="text-sm font-semibold text-black">404 error</p>
    <h1 className="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl">
      We can&#x27;t find that page
    </h1>
    <p className="mt-4 text-gray-500">
      Sorry, the product you are looking for doesn&#x27;t exist or has been moved.
    </p>
 
  </div>
</div>

  )
}

export default Error