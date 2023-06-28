import React, { useEffect, useRef, useState } from "react";
import "./homepage.css";
import { url } from "../url";
import axios from "axios";
import { Button, Input, Modal, message } from "antd";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  let personDetails = {
    name: "",
    height: "",
    weight: "",
  };
  const [personData, setPersonData] = useState(personDetails);
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [update, setUpdate] = useState("");
  const formRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
    const fetchData = async () => {
      try {
        const response = await axios.get(`${url}/products/get`);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handlePost = async (e) => {
    e.preventDefault();
    console.log(personData);
    try {
      const submitData = await axios.post(`${url}/products/create`, {
        personData,
      });
      const data = submitData.data;

      setData((prev) => [...prev, data]);
      message.success("Successfully Created");
      setPersonData({
        name: "",
        height: "",
        weight: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setPersonData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdateChange = (e) => {
    const { name, value } = e.target;

    setUpdate((prev) => ({ ...prev, [name]: value }));
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`${url}/products/delete/${id}`);
      console.log(response);
      setData(data.filter((item) => item._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`${url}/products/update`, {
        update,
      });
      const datas = await response.data;
      setData(
        data.map((record) =>
          record._id === update._id ? { ...record, ...datas } : record
        )
      );
      console.log(response);
      message.success("Update Successfully");
      handleClose();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleOpen = (details) => {
    setOpen(true);
    setUpdate(details);
  };
  const handleClose = () => {
    setOpen(false);
    setUpdate("");
  };
  return (
    <div style={{ backgroundColor: "#cdcbe6", height: "100vh" }}>
      <h1 style={{ display: "flex", justifyContent: "center" }}>
        Person Details
      </h1>

      <Modal
        title="Basic Modal"
        open={open}
        onOk={handleUpdate}
        onCancel={handleClose}
      >
        <form>
          <div>
            <label htmlFor="name">Name:</label>
            <Input
              type="text"
              id="name"
              onChange={handleUpdateChange}
              name="name"
              value={update.name}
            />
          </div>
          <div>
            <label htmlFor="weight">Weight:</label>
            <Input
              type="number"
              id="weight"
              onChange={handleUpdateChange}
              name="weight"
              value={update.weight}
            />
          </div>
          <div>
            <label htmlFor="height">Height:</label>
            <Input
              type="number"
              id="height"
              onChange={handleUpdateChange}
              name="height"
              value={update.height}
            />
          </div>
        </form>
      </Modal>
      <div>
        <form className="input-container" ref={formRef} onSubmit={handlePost}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              required
              type="text"
              id="name"
              onChange={handleChange}
              name="name"
              value={personData.name}
            />
          </div>
          <div>
            <label htmlFor="weight">Weight:</label>
            <input
              required
              type="number"
              id="weight"
              onChange={handleChange}
              name="weight"
              value={personData.weight}
            />
          </div>
          <div>
            <label htmlFor="height">Height:</label>
            <input
              required
              type="number"
              id="height"
              onChange={handleChange}
              name="height"
              value={personData.height}
            />
          </div>

          <input type="submit" value="Submit" />
        </form>
      </div>
      <div>
        {data.map((details) => (
          <div key={details._id} className="list-person">
            <p style={{ marginBottom: "8px", fontWeight: "bold" }}>
              Name: {details.name}
            </p>
            <p style={{ marginBottom: "8px" }}>Weight: {details.weight}</p>
            <p style={{ marginBottom: "8px" }}>Height: {details.height}</p>
            <Button
              type="primary"
              style={{ backgroundColor: "blue" }}
              onClick={() => handleOpen(details)}
            >
              Update
            </Button>
            <Button
              style={{ backgroundColor: "red",color:'white' }}
              onClick={() => handleDelete(details._id)}
            >
              Delete
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
