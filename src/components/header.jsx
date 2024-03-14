import { useState } from 'react'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineStatus'
import '../../index.css';

const Header=()=>{
    const [authState, setAuthState]=useState("Login")
    const onlineStatus = useOnlineStatus();
    const LOGO_URL = "https://png.pngtree.com/png-vector/20220706/ourmid/pngtree-food-logo-png-image_5687717.png"
    return (
        <>
            <div className="flex justify-between m-0 bg-gray-100 border-gray font-light">
                <div className="logo-container">
                    <img className="rounded m-5 h-12" src={LOGO_URL} alt="logo" />
                </div>
                <div className="pr-5 pl-5">
                    <ul className='flex justify-between'>
                        <li className='p-2.5 m-2.5'><Link to="/" className="no-underline text-black font-medium">Home</Link></li>
                        <li className='p-2.5 m-2.5'><Link to="/about" className="no-underline text-black font-medium">About Us</Link></li>
                        <li className='p-2.5 m-2.5'><Link to="/contact" className="no-underline text-black font-medium">Contact Us</Link></li>
                        <li className='p-2.5 m-2.5'><Link to="/grocery" className="no-underline text-black font-medium">Grocery</Link></li>
                        <li className='p-2.5 m-2.5 text-black font-medium'> Online Status: {onlineStatus? "✅" : "🔴"}</li>
                        {/* <li><button className='login-btn' onClick={()=>{setAuthState("Logout")}}>{authState}</button></li> */}
                    </ul>
                </div>
            </div>
        </>
    );
}


export default Header;