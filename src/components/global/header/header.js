import React from "react";
import { Col, Input, Layout, Row } from "antd";
import logo from "../../../images/logo.png";
import {
  AppstoreOutlined,
  BellOutlined,
  PlusCircleOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import "./header.css";
const { Header } = Layout;
const HeaderComponent = () => {
  return (
    <Header
      style={{
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        justifyContent:'center'
      }}
    >
      <div className="header-flex">
        <div>
          <img src={logo} width={100} alt="normal" />
        </div>
        <div className="header-flex1">
          <Input placeholder="Search" prefix={<SearchOutlined />} />
          <PlusCircleOutlined />
          <AppstoreOutlined />
          <BellOutlined />
        </div>
      </div>
    </Header>
  );
};

export default HeaderComponent;
