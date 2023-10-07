import React from "react";
import "./index.css"
import About from "./routes/About";
import Home from "./routes/Home";
import Project from "./routes/Project";
import Contact from "./routes/Contact";
import { Route,Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/project" element={<Project/>}/>
    <Route path="/conatct" element={<Contact/>}/>
    <Route path="/about" element={<About/>}/>
    </Routes>
    

    </div>
  );
}

export default App;
