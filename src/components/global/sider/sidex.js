import { Button, Layout, Menu } from "antd";
import { useState } from "react";
import {
  AppstoreOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ProfileOutlined,
  UploadOutlined,
  UserOutlined,
  UsergroupAddOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
const { Sider } = Layout;

const SiderComponent = () => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        theme="light"
        style={{ height: "auto", boxShadow: " 2px 0 6px rgba(0, 0, 0, 0.1)" }}
      >
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: "16px",
            color: "black",
            width: 64,
            height: 64,
          }}
        />
        <div className="demo-logo-vertical" />
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <AppstoreOutlined />,
              label: "Dashboard",
            },
            {
              key: "2",
              icon: <UsergroupAddOutlined />,
              label: "User",
            },
            {
              key: "3",
              icon: <ProfileOutlined />,
              label: "Add Task",
            },
          ]}
        />
      </Sider>
    </>
  );
};

export default SiderComponent;
