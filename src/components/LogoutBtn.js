import { useNavigate } from "react-router-dom";
import Button from "./Button";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user"); // This will remove the user item from localStorage and log out the user
    navigate("/Login"); // When logged out, the player is taken back to Login
  };

  return (
    <Button className="btn" onClick={handleLogout}>
      Logout!
    </Button>
  );
};

export default Logout;