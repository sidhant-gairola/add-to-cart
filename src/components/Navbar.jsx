import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { MdMenuOpen } from "react-icons/md";
import { useSelector } from "react-redux";
import './Navbar.css';


const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => setOpenMenu(!openMenu);

  const cartCount = useSelector((state) => state.cart.items.reduce((acc, item) => acc + item.quantity, 0));

  return (
    <>
      <nav className="navbar-container">
        <div className="navbar-image-container">
          <NavLink to={'/'} ><img src="logo.png" alt="logo" className="navbar-image" /></NavLink>
        </div>
        <div className="navbar-menu">
          <NavLink to={'/'} className="navbar-links ">Home</NavLink>
          <NavLink to={'/about'} className="navbar-links">About us</NavLink>
          <NavLink to={'/cart'} className="navbar-links cart-link">
            <FaShoppingCart />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </NavLink>
        </div>
        <div className="menu-button">
          <button onClick={toggleMenu}><MdMenuOpen size={40} /></button>
        </div>
      </nav>
      {openMenu && (
        <div className="show-button-menu">
          <NavLink to={'/'} className=" button-menu-link" onClick={() => setOpenMenu(false)}>Home</NavLink>
          <NavLink to={'/about'} className=" button-menu-link" onClick={() => setOpenMenu(false)}>About us</NavLink>
          <NavLink to='/cart' className=" button-menu-link" onClick={() => setOpenMenu(false)}>
            <span className="cart-icon-wrapper">
              <FaShoppingCart />
              {cartCount > 0 && <span className="cart-count-dropdown">{cartCount}</span>}
            </span>
          </NavLink>
        </div>
      )}
    </>
  )
}
export default Navbar;
