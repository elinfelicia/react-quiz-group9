import { useState } from "react";
import axios from "axios";


const Register = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const checkUser = (users) => {
    const user = users.find((user) => user.username === username)
    if (user) return user;
  };

  const handleSubmit = async () => {
    const user = await axios
      .get("http://localhost:6001/users")
      .then((res) => checkUser(res.data, username));
    
    if (user) {
      alert("User already exists!")
    } else {
      const user = { username, password };
      axios.post("http://localhost:6001/users", user).then(alert("User created!"));
    }

  }

  return (
    <div className="register-container">
      <form className="register-form">
        <h1 className="register-heading">Register User</h1>
        <label className="register-label">
          <input
            type="text"
            placeholder="Username"
            className="register-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label className="register-label">
          <input
            type="password"
            placeholder="Password"
            className="register-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button className="register-btn" type="submit" onClick={handleSubmit}>
          <p>Register</p>
        </button>
      </form>
    </div>
  );
};

export default Register;