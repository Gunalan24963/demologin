import axios from "axios";
import React, { useState } from "react";
import { url } from "../url";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
import { message } from "antd";

const LoginPage = () => {
  let formProperties = {
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(formProperties);
  const navigate = useNavigate();
  const handlepost = async (e) => {
    e.preventDefault();
    try {
      const SendData = await axios.post(`${url}/login`, { formData });
      const response = await SendData.data;
      if (response.status === "ok") {
        message.success("Successfully Logged In");
        navigate("/homepage");
        localStorage.setItem("token", response.user);
      } else {
        message.error("Incorrect username or password");
      }
    } catch (error) {
      console.log(error);
      message.error("something went wrong");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="body">
      <h1>Login Page</h1>
      <div class="form-container">
        <form onSubmit={handlepost}>
          <label for="email">Email</label>
          <input
            required
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
          <label for="password">Password</label>
          <input
            required
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <p>
        Don't have a account <Link to="/register">Sign Up</Link>
      </p>
    </div>
  );
};

export default LoginPage;
