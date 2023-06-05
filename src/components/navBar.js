import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();
  const userLoggedIn = localStorage.getItem('user');

  const handleLogout = () => {
    localStorage.removeItem('user'); // Remove the user item from localStorage to log out the user
    navigate('/Login'); // Redirect to the login page after logout
  };

  return (
    <section className='navBar'>
      <h1 className="nav-heading">Quiz Game</h1>
      <nav className="navigation">
        {userLoggedIn ? (
          <button type="button" className="btn-logout" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <>
            <button type="button" className="btn-log-in">
              <Link to='/Login'>Login</Link>
            </button>
            <button type="button" className="btn-Register">
              <Link to='/Register'>Register</Link>
            </button>
          </>
        )} 
        {/* this ternary decides whether to show the login/register buttons OR the Logout button, based on whether the user is logged in or not */}
      </nav>
    </section>
  );
};

export default NavBar;
