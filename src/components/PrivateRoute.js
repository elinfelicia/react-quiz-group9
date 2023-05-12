import { authenticate } from "../helpers";
import {Navigate} from "react-router-dom";

const PrivateRoute = ({children}) => {
    const auth = authenticate();
    return auth ? children : <Navigate to="/login"/>
}

export default PrivateRoute;