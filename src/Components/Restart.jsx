import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Restart = ({ url }) => {
  const [data, setData] = useState({
    password: "",
  });
  const navigate = useNavigate();
  const { id, token } = useParams();
  const onchangeHnadler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await axios.post(`${url}/reset/${id}/${token}`, data);
    if (res.data.success) {
      toast(res.data.message);
      navigate("/");
    }
  };

  return (
    <div className="login-container">
      <h2>Restart Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          name="password"
          placeholder="New Password"
          onChange={onchangeHnadler}
          value={data.password}
          required
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Restart;
