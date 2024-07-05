import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <h1>welcome to the home page</h1>
      <p>your succefully reset the password</p>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </>
  );
};

export default Home;
