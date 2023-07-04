
import { Button, Layout, Menu } from "antd";
import { useState } from "react";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
  } from '@ant-design/icons';
const {Sider} = Layout


const SiderComponent = () => {
    const [ collapsed , setCollapsed] = useState(true);

  return (
    <>
     <Sider trigger={null} collapsible collapsed={collapsed} theme="light" style={{height:'100vh'}}>
     <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              color:'black',
              width: 64,
              height: 64,
            }}
          />
        <div className="demo-logo-vertical" />
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'nav 1',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3',
            },
          ]}
        />
      </Sider>
    </>
  );
};

export default SiderComponent;
