import {useState} from "react";
import axios from "axios;"
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState ("");

    const navigate = useNavigate(); //from router dom. route needs to be set up in app.js!!!!
    
    //need to check input against DB to see if the matching username and password exists
    const checkUser = (users) => {
        const user = users.find(
            (user) => user.username === username && user.password === password);
        console.log(user); //not sure if needed
            if (user.username === username && user.password === password) return user;
    };


const handleSubmit = async (e) => {
    e.preventDefault();

    if (username === "" || password === "") {
        alert("Please fill in both username and password to log in!");
    }

    const user = await axios
    .get("/users")
    .then((res) => checkUser.res.data, username, password)
    .catch((error) => {
        console.log(error); //not sure if needed
    })

    if (user.username === username && user.password === password) {
        navigate("/") //must set up navigate = useNavigate first!!!
    }
}

    return (
        <div className="container">
            <form className="form-container">
                <label>
                    <input type="username" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />                   
                </label>
                <label>
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <button className="btn" type="submit">
                    <p>Log in to play!</p>
                </button>
            </form>
        </div>
    );
    // the onChange listens for a change in the input field (either usename or password) 
    // and the value inputted here will be set to the value 
};

export default Login;