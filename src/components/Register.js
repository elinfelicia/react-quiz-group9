import { useState } from "react";
import axios from "axios";


const Register = () => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="register-container">
      <form className="register-form">
        <h1>Register User</h1>
        <label>
          <input type="text" placeholder="Name" value={username} />
        </label>
        <label>
          <input type="text" placeholder="Email" value={email} />
        </label>
        <label>
          <input type="text" placeholder="Password" value={password} />
        </label>
        <button className="register-btn">
          <p>Register</p>
        </button>
      </form>
    </div>
  );
};

export default Register;