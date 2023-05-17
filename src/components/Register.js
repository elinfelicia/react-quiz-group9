import { useState } from "react";
import axios from "axios";


const Register = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const checkUser = (users) => {
    const user = users.find((user) => user.username === username)
    if (user) return user;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
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
    <div className="log-container">
      <form className="form-container">
        <label className="form-label">
          <input
            type="text"
            placeholder="Pick new username"
            className="form-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label className="form-label">
          <input
            type="password"
            placeholder="Pick new password"
            className="form-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button className="log-btn" type="submit" onClick={handleSubmit}>Register</button>
      </form>
    </div>
  );
};

export default Register;