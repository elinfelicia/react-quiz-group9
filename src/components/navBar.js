import {Link} from 'react-router-dom';
const   NavBar= ()=>{
    return  (
<body>
        
            <input type="checkbox" id="check"></input>
            <label for="check">
            <i className="fa fa-bars" id="btn"></i>
            <i className="fa fa-times" id="cancel"></i></label>
            <div className="sidebar">
                <header>Quiz Game</header>
        <ul>
        <li><Link className='links' to = "/login"><i class="fa fa-sign-in fa-x">  Sign in </i>  </Link>
          </li>
            <li><Link className='links' to = "/Register"><i class="fa fa-user-plus">  Sign up </i>  </Link>
          </li>
          <li><Link className='links' to = "/quiz"> <i class="fa fa-hourglass-start">  Start quiz </i>  </Link>
          </li>
        
            <li><a href="https://Facebook.com"><i class="fa fa-facebook-official"></i> Facebook</a></li>
            <li><a href="https://instagram.com"><i class="fa fa-instagram"></i> Instagram</a></li>

        </ul>
            </div>
</body>


);
};

export default NavBar;