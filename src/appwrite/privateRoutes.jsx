import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
function PrivateRoutes() {
   const navigate = useNavigate();
   const isAuntheticated = useSelector((state) => state.basket.auth);
   
   useEffect(() => {
    if (!isAuntheticated) {
      navigate('/Redux/login');
    }
  }, [isAuntheticated, navigate]);
  
  if (isAuntheticated) {
    return (
        <>
        <Outlet />
    </>
    )
  }
    else {
        navigate('/Redux/login');
    }
}
export default PrivateRoutes;


