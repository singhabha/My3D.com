import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar"

const FileUploader = (props) => {
  const hiddenFileInput = React.useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    props.handleFile(fileUploaded);
  };
  return (
    <>
    <Navbar/>
      <button
        className="btn"
        onClick={handleClick} >
        Upload a file
      </button>
      <input
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{ display: "none" }}
      />
      <Link to={"/"} className="btn">
        back to home page
      </Link>
    </>
  );
};
export default FileUploader;
