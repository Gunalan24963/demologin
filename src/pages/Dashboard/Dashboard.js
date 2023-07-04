import { Layout } from "antd";
import React from "react";
import SiderComponent from "../../components/global/sider/sidex";
import HeaderComponent from "../../components/global/header/header";

const Dashboard = () => {
  return (
    <>
      <Layout>
        <SiderComponent />
        <Layout>
          <HeaderComponent />
        </Layout>
      </Layout>
    </>
  );
};

export default Dashboard;
