import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import View from "./components/View";
import Home from "./components/Home";
import FileUploader from "./components/FileUploader";
import Error from "./components/Error";


function App() {
  return (
    <>
      <div className="App">
        <Router>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/View" element={<View/>} />
              <Route path="/fileUploader" element={<FileUploader />} />
              <Route path="*" element={<Error/>} />
            </Routes>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
