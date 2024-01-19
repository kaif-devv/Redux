import { Outlet, useNavigate } from "react-router-dom";
function PrivateRoutes() {
    const navigate = useNavigate();
   const user = false;
    if (!user) {
        navigate('/Redux/login');

    }
}