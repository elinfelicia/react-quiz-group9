import React from 'react';
import Logout from './LogoutBtn';


const   Footer= ()=>{

    return  (



<div className="footer">
    <div className="footer__contact">
        <p className="footer__contact__info">Email: quizgame@gmail.com</p>
        <p className="footer__contact__info">Telephone number: +4642-19 38 00</p>
        <p className="footer__contact__info">Address:Sweden Örbyvägen 10, 257 30 Rydebäck</p>
    </div>
    <button className="btn-log-out"><Logout /> {/* Add the Logout component */}</button>
</div>

);
};

export default Footer;