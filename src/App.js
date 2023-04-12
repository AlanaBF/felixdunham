import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "../src/Pages/Home/index";
import Photos from './Pages/Photos';
import Videos from './Pages/Videos'
import Contact from './Pages/Contact';
import {Footer, Header} from "./components";
import '../src/assets/style.css';

function App() {
  return (
    <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Photos" element={<Photos />} />
          <Route path="/Videos" element={<Videos />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer/>
    </Router>
  )
}

export default App;
