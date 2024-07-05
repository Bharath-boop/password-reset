import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Forget = ({ url }) => {
  const [data, setData] = useState({
    email: "",
  });
  const navigate = useNavigate();
  const onchangeHnadler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await axios.post(`${url}/forget`, data);
    if (res.data.success) {
      toast(res.data.message);
      navigate("/");
    }
    else{
      toast(res.data.message)
    }
  };

  return (
    <div className="login-container">
      <h2>Forget Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={onchangeHnadler}
          value={data.email}
          required
        />
        <button type="submit">Send</button>
        <a href="/" className="forgot-password">
          Login
        </a>
      </form>
    </div>
  );
};

export default Forget;
