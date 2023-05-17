import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user"); // This will remove the user item from localStorage and log out the user
    navigate("/Login"); // When logged out, the player is taken back to Login
  };

  return (
    <button className="btn-log-out" onClick={handleLogout}>
      Logout!
    </button>
  );
};

export default Logout;