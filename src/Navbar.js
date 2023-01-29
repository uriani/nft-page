import React, { useEffect } from 'react';
import './Navbar.css';
import { AiOutlineShop } from "react-icons/ai";
import { CgMenuLeft } from "react-icons/cg";
import NavbarDropDownmenu from './NavbarDropdownMenu';
import { useState} from 'react';
import useWindowDimensions from './UseWindowDimensionHook';
import { Link, NavLink } from 'react-router-dom';


export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const width = useWindowDimensions();

  useEffect(() => {
    if(width > 1279) {
      setToggleMenu(true);
    }else {
      setToggleMenu(false);
    }
  }, [width])

  const handleClickOnNavbar = () => {
    if(width < 1280) {
      setToggleMenu(false);
    }
  }

  const handleClickOnDrowdownMenu = () => {
    if(width < 1280 && toggleMenu === true) {
      setToggleMenu(false);
    }
  }

  const handleClickOnNavbarIcon = () => {
    if(width < 1280) {
      setToggleMenu(!toggleMenu);
    }
  }


  return (
    <div className='navbar' onClick={handleClickOnDrowdownMenu}>
      <div className="nav-logo" onClick={handleClickOnNavbar}>
        <NavLink to='/' >
        <div className="marketplace-logo">
          <AiOutlineShop className='marketplace-logo-icon' style={{color: '#A259FF'}}/>
        </div>
        <div className='marketplace-logo-text'>NFT Marketplace</div>
        </NavLink>
      </div>
      <div className="navbar-menu" onClick={handleClickOnNavbarIcon}>
        <CgMenuLeft  style={{color: '#FFFFFF'}} onClick={() => width > 1279 ? setToggleMenu(true) : setToggleMenu(!toggleMenu)}/>
      </div>
      {toggleMenu && <NavbarDropDownmenu />}
    </div>
  )
}
