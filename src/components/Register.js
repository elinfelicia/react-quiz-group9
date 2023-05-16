import { useState } from "react";
import axios from "axios";


const Register = () => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const checkEmail = (users) => {
    const user = users.find((user) => user.email === email)
    if (user) return user;
  };

  const handleSubmit = async () => {
    const user = await axios
      .get("http://localhost:6001/users")
      .then((res) => checkEmail(res.data, email));
    
    if (user) {
      alert("User already exists!")
    } else {
      const user = { username, email, password };
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
            placeholder="Name"
            className="register-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label className="register-label">
          <input
            type="text"
            placeholder="Email"
            className="register-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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