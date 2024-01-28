import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
function PrivateRoutes() {
   const navigate = useNavigate();
   const isAuntheticated = useSelector((state) => state.basket.auth);
   // if the user is not auntheticated then navigate to the login page 
   useEffect(() => {
    if (!isAuntheticated) {
      navigate('/Redux/login');
    }
  }, [isAuntheticated, navigate]);
  // if the user is auntheticated then render the outlet
  if (isAuntheticated) {
    return (
        <>
        {/* this will render the child routes of the private routes  */}
        <Outlet /> 
    </>
    )
  }
   return  navigate('/Redux/login'); // if the user is not auntheticated then navigate to the login page
    
}
export default PrivateRoutes;


