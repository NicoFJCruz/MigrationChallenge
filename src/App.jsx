import React, { useState } from "react";
import { Route, Routes } from "react-router";
import Header from "./components/Header";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
