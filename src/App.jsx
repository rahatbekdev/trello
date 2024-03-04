import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
// import Header from "./components/Header";

const App = () => {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
