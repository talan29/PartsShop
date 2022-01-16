import React, {useState} from 'react';
import Logo from '../assets/pistonLogo.jpg'
import {Link} from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css';
function Navbar() {
        const [openLinks, setOpenLinks] = useState(false)
    return (
        <div className='navbar'>
            <div className='leftSide' id={openLinks}>
                <img src={Logo} alt='logo' />
                <div className='hiddenLinks'></div>
            </div>
            <div className='rightSide'></div> 
                <Link to="/"> Home </Link>
                <Link to="/menu"> Menu </Link>   
                <Link to="/about"> About </Link>   
                <Link to="/contact"> Contact </Link>
                <button>
                    <ReorderIcon />    
                </button>    
        </div>
    )
}

export default Navbar
