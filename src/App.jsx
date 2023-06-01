import React, { useState } from "react";
import { Route, Routes } from "react-router";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Home from "./components/Home";
import KiteSchool from "./components/KiteSchool";
import Navbar from "./components/Navbar";
import Price from "./components/Price";
import WingSchool from "./components/WingSchool";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/school/kite" element={<KiteSchool />} />
        <Route path="/school/wing" element={<WingSchool />} />
        <Route path="/price" element={<Price />} />
        <Route path="/wing" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
