import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Link to={"/View"} className="btn">
          <b>View 3D models here</b>
        </Link>
        <Link to={"/FileUploader"} className="btn">
          <b>Upload</b>
        </Link>
        <footer className="footer">
          <p>Copyright &copy; My3D.com </p>
        </footer>
      </div>
    </>
  );
};

export default Home;
