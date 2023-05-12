import { authenticate } from "../helpers";
import {Navigate} from "react-router-dom";

const PrivateRoute = ({children}) => { 
    //passing the children prop means we will be able to render something inside a component.
    const auth = authenticate();
    return auth ? children : <Navigate to="/Login"/>
}
//if the user is authenticated (using our authenticate function from helpers, the user will
//have access to the children in the private route and be able to play the game!
//If user is NOT authenticated, they will be redirected to login page.)

export default PrivateRoute;