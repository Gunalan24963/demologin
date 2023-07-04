import React from "react";
import { Avatar, Col, Input, Layout, Row, Space } from "antd";
import logo from "../../../images/logo.png";
import {
  AppstoreOutlined,
  BellOutlined,
  PlusCircleOutlined,
  SearchOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "./header.css";
const { Header } = Layout;
const HeaderComponent = () => {
  return (
    <Header
      style={{
        backgroundColor: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <img
          src={logo}
          width={100}
          alt="normal"
          style={{ display: "flex", alignItems: "center" }}
        />
      </div>
      <div
        className="header-flex1"
        style={{
          display: "flex",
          gap: "5px",
          alignItems: "center",
          fontSize: "20px",
        }}
      >
        <Space size={16} >
          <Input placeholder="Search" prefix={<SearchOutlined />} />
          <PlusCircleOutlined />
          <AppstoreOutlined />
          <BellOutlined />
          <Avatar icon={<UserOutlined />} />
        </Space>
      </div>
    </Header>
  );
};

export default HeaderComponent;
