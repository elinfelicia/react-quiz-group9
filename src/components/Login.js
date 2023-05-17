import { useNavigate } from "react-router-dom";
import {useState} from "react";
import axios from "axios";
import Logout from "./LogoutBtn";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState ("");

    const navigate = useNavigate(); //from router dom. route needs to be set up in app.js!!!! 
    //below is to check input against DB to see if the matching username and password exists
    const checkUser = (users) => {
        const user = users.find(
            (user) => user.username === username && user.password === password);
        console.log(user); //not sure if needed
            if (user.username === username && user.password === password) return user;
    };

const handleSubmit = async (e) => { //(e) stands for event object here.
    //an async function allows us to fetch data from a server (user info), and lets us use await.
    e.preventDefault(); // stops the page reloading when the form is submitted, which usually is the default action
    if (username === "" || password === "") {
        alert("Please fill in both username and password to log in!");
    } // if the player leaves either or both fields empty, this error message will show

    const user = await axios // keyword await is used to make sure the server is checked for users before continuing
    .get("http://localhost:6001/users") //access the users in the database
    .then((res) => checkUser(res.data, username, password)) //had () around res.....ord, but got error. check this out.
    // after acessing the users, it then checks if the user and password combo exists 
    .catch((error) => { 
        console.log(error); 
        //and if there is an error (if the user or password is incorrect) the error will be logged to the console
    })

    if (user) {
        navigate("/") //must set up navigate = useNavigate first for this to work!!!
        localStorage.setItem("user", JSON.stringify(user.id))
    }
    setUsername("");
    setPassword("");
};

    return (
        <div className="log-container">
            <form className="form-container">
                <label className="form-label">
                    <input className="form-input" type="username" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />                   
                </label>
                <label className="form-label">
                    <input className="form-input" type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <button className="log-btn" type="submit" onClick={handleSubmit}>
                    Log in!
                </button>
            </form>
        </div>
    );
    // the onChange listens for a change in the input field (either usename or password) 
    // and the value inputted here will be set as the value. This value will be checked against the existing users in th db
};

export default Login;