import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CreateUser = ({ url }) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const onCreate = async (e) => {
    e.preventDefault();
    let res = await axios.post(`${url}/create`, data);
    if (res.data.success) {
      toast(res.data.message);
      localStorage.setItem("token", res.data.token);
      navigate("/home");
    } else {
      toast(res.data.message);
    }
  };

  const onchangeHnadler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  return (
    <div className="login-container">
      <h2>Create User</h2>
      <form onSubmit={onCreate}>
        <input
          type="email"
          name="email"
          onChange={onchangeHnadler}
          placeholder="Email"
          value={data.email}
          required
        />
        <input
          type="password"
          name="password"
          onChange={onchangeHnadler}
          placeholder="Password"
          value={data.password}
          required
        />
        <button type="submit">Login</button>
        <a href="/forget" className="forgot-password">
          Forgot Password?
        </a>
        <a href="/" className="forgot-password">
          Already account user?
        </a>
      </form>
    </div>
  );
};

export default CreateUser;
