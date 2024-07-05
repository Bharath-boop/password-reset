import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = ({ url }) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const onchangeHnadler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onLogin = async (e) => {
    e.preventDefault();
    let res = await axios.post(`${url}/login`, data);
    if (res.data.success) {
      toast("Login successful");
      localStorage.setItem("token", res.data.token);
      navigate("/home");
    } else {
      toast(res.data.message);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={onLogin}>
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
        <a href="/create" className="forgot-password">
          New user?
        </a>
      </form>
    </div>
  );
};

export default Login;
