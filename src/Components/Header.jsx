import React from 'react'
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <nav>
      <h1>Welcome</h1>
      <main>
        <HashLink to={"/#Home"}>Home</HashLink>
        <HashLink to={"/Contact"}>Contact</HashLink>
        <HashLink to={"/#About"}>About</HashLink>
        <HashLink to={"/#Brand"}>Brand</HashLink>
        <HashLink to={"/Services"}>Services</HashLink>
      </main>
    </nav>
  );
};

export default Header;