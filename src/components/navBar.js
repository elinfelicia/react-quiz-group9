import {Link} from 'react-router-dom';

const   NavBar= ()=>{
  return  (
    <section className='navBar'>
      <h1 className="nav-heading">Quiz Game</h1>
        <nav className="navigation">
          <button type="submit" className="btn-log-in">
            <Link to='/Login'>Login</Link>
          </button>
          <button type="submit" className="btn-Register">
            <Link to='/Register'> Register</Link></button>
        </nav>
    </section>
  );
};


export default NavBar;