import React from 'react';
import { Link } from 'react-router-dom';
import  { useState } from 'react';

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [height, setheight] = useState('auto');

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  const changeheight=()=>{
    setheight('200px');
  }
  
  return (
   <nav style={{height: height}}>
     <div className="menu-icon" onClick={toggleMenu}>
          <i id='bar' className={menuOpen ? 'fas fa-2x fa-times' : 'fas fa-2x fa-bars'}  onClick={changeheight}></i>
     </div>

    <ul className={menuOpen ? 'menu active' : 'menu'}>   
      <li>
        <Link to="/" className='home'>Home</Link>
      </li>
      <li>
        <Link to="/features">Features</Link>
      </li>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
      <li>
        <Link to="/resume">Resume</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </nav>
  );
}

export default Navbar;