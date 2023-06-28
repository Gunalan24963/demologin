import axios from "axios";
import React, { useState } from "react";
import { url } from "../url";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
import { message } from "antd";

const SignupPage = () => {
  let formProperties = {
    name: "",
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(formProperties);
  const navigate = useNavigate();

  const handlepost = async (e) => {
    e.preventDefault();
    try {
      const SendData = await axios.post(`${url}/register`, { formData });
      message.success("Successfully user created");
      navigate("/");
    } catch (error) {
      message.error("something went wrong");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="body">
      <h1>Signup Page</h1>
      <div class="form-container">
        <form onSubmit={handlepost}>
          <label for="name">Name</label>
          <input
            required
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
          />
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
        Already have an account ? <Link to="/">log in</Link>
      </p>
    </div>
  );
};

export default SignupPage;
