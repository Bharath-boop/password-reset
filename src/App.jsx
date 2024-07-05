import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Restart from "./Components/Restart";
import Forget from "./Components/forget";
import Home from "./Components/Home";
import CreateUser from "./Components/CreateUser";
const App = () => {
  // const url = "http://localhost:8000";
  const url ="https://reset-password-be.onrender.com"
  return (
    <>
      <Routes>
        <Route path="/" element={<Login url={url} />} />
        <Route path="/forget" element={<Forget url={url} />} />
        <Route path="/restart/:id/:token" element={<Restart url={url} />} />
        <Route path="/home" element={<Home url={url} />} />
        <Route path="/create" element={<CreateUser url={url} />} />
      </Routes>
    </>
  );
};

export default App;
