import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
function PrivateRoutes() {
   const navigate = useNavigate();
   const isAuntheticated = useSelector((state) => state.basket.auth)
    if (!isAuntheticated) {
        navigate('/Redux/login');
    }
    return (
        <>
            <Outlet />
        </>
    )
}
export default PrivateRoutes;
