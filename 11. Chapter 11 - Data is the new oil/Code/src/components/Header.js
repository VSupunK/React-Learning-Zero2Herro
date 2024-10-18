import { useContext, useState } from 'react';
import { LOGO_URL } from '../utils/constants'
import { Link } from "react-router-dom";
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState('Login');
    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);

    return (
        <div className="flex justify-between items-center bg-slate-200 shadow-md mb-2">
        <div className="logo-container">
            <img className="h-20" src= {LOGO_URL} />
        </div>
        <div className="nav-items">
            <ul className='flex justify-center gap-10 mr-10'>
                <li>Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact Us</Link></li>
                <li><Link to='/grocery'>Grocery</Link></li>
                <li><Link to='/cart'>Cart</Link></li>
                <button className='loginBtn' onClick={() => {
                    btnNameReact === 'Login' ? setBtnNameReact("Logout") : setBtnNameReact("Login")
                }}>
                    {btnNameReact}
                </button>
                <li><Link to='/'>{loggedInUser}</Link></li>

            </ul>
        </div>
    </div>
    );
};

export default Header;