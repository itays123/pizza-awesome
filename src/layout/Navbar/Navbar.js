import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import ProfilePic from '../ProfilePic/ProfilePic';
import './Navbar.css'

const Navbar = () => {
    const { isAuth, setLoginModalShown, signout } = useContext(AuthContext);
    const signedOutLinks = [
        <li key="signup"><NavLink to="/signup">Sign Up</NavLink></li>,
        <li key="login"><button onClick={() => setLoginModalShown(true)}>Login</button></li>
    ];
    const signedInLinks = [(
        <li key="profile" className="do-not-active">
            <NavLink to="/profile">
                <ProfilePic dimen={35} backgroundColor="#e75757" />
            </NavLink>
        </li>
    ), <li key="signout"><button onClick={() => signout()}>Sign Out</button></li> ];
    return ( 
        <div className="navbar">
            <div className="container nav-wrapper">
                <h1 className="logo"><Link to="/">Pizza Awesome</Link></h1>
                <ul className="links">
                    { isAuth ? signedInLinks : signedOutLinks }
                </ul>
            </div>
        </div>
     );
}
 
export default Navbar;