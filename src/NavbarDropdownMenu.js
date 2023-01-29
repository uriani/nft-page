import './NavbarDropdownMenu.css';
import {BiUser } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function NavbarDropDownmenu(props) {
  const [toggleMenu, setToggleMenu] = useState('');
  const handleClick = () => {
    setToggleMenu(false);
  }

  return (
    <div className='NavbarDropDownmenu'>
       <nav>
        <ul>
          <li><Link to='/marketplace'>Marketplace</Link></li>
          <li><Link to='/Rankings'>Rankings</Link></li>
          <li><Link to='/ConnectWallet:id'>Connect a wallet</Link> </li>
          <li>
            <button className='signup-button'>
              <Link to='/createAccount' style={{width: '100%', height: '100%'}} onClick={handleClick}>
              <BiUser /><div>Sign Up</div>
              </Link>
            </button>
          </li>
        </ul>
       </nav>
    </div>
  )
}

