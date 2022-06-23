import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="nav">
        <b>My3D.com</b>
          <Link to={"/"} className="home" >
     home
      </Link>
    
      </div>
    </>
  );
};
export default Navbar;
