import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
        <h1>Welcome</h1>
        <main>  
            <Link to ={"/"}>Home</Link>
            <Link to ={"/Contact"}>Contact</Link>
            <Link to ={"/#About"}>About</Link>
            <Link to ={"/#Brand"}>Brand</Link>
            <Link to ={"/Services"}>Services</Link>
        </main>
    </nav>
  );
};

export default Header;