import {
  Avatar,
  Button,
  Card,
  Col,
  Divider,
  Layout,
  Row,
  Select,
  Space,
  Table,
  Tabs,
  Tag,
} from "antd";
import React from "react";
import SiderComponent from "../../components/global/sider/sidex";
import HeaderComponent from "../../components/global/header/header";
import "./dashboard.css";
import Headname from "../../components/local/headname";
import {
  AntDesignOutlined,
  ArrowDownOutlined,
  ArrowUpOutlined,
  BookOutlined,
  ContainerOutlined,
  KeyOutlined,
  UserOutlined,
} from "@ant-design/icons";
import ReactApexChart from "react-apexcharts";
const { Content } = Layout;

const Dashboard = () => {
  const IconBadge = (props) => {
    return (
      <>
        <Col className="icon--badge" lg={8} style={{ marginBottom: "10px" }}>
          <Avatar
            size={50}
            icon={props.icon}
            style={{
              backgroundColor: props.bgColor,
              marginBottom: "19px",
            }}
          />
          <h6 style={{ margin: "0", marginBottom: "5px" }}>{props.head}</h6>
          <h1 style={{ margin: "0", marginBottom: "23px" }}>{props.number}</h1>
          <span
            className={props.status ? "icon--up" : "icon--down"}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
            }}
          >
            {props.status ? <ArrowUpOutlined /> : <ArrowDownOutlined />}

            <h6 style={{ margin: "0" }}>{props.percent}</h6>
          </span>
        </Col>
      </>
    );
  };

  const chartOptions = {
    series: [44, 55, 13],
    options: {
      chart: {
        type: "donut",
      },
      labels: ["Estimated", "Approved", "Pending"],
      dataLabels: {
        enabled: false,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <p>Invite {record.name}</p>
          <p>Delete</p>
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];
  const { TabPane } = Tabs;

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === "Disabled User",

      name: record.name,
    }),
  };
  return (
    <>
      <Layout>
        <SiderComponent />
        <Layout style={{ backgroundColor: "#e6eeff" }}>
          <HeaderComponent />
          <Content style={{ margin: 40 }}>
            <div>
              <Headname />
              <Divider plain />
              <Row align="middle" justify="space-around" gutter={[32, 32]}>
                <Col lg={16} md={24} sm={24}>
                  <div className="card-grid">
                    <h1 className="p-2">Works Overview</h1>
                    <Row
                      justify="start"
                      align="top"
                      style={{ display: "flex" }}
                    >
                      <Col lg={24} md={24} style={{ flex: 1 }}>
                        <Row justify="start" gutter={[2, 12]}>
                          <IconBadge
                            status={true}
                            icon={<KeyOutlined />}
                            head="Total Work orders"
                            number="456"
                            percent="56% uploaded"
                            bgColor="#b3d9ff"
                          />
                          <IconBadge
                            status={false}
                            icon={<BookOutlined />}
                            head="Estimated Works"
                            number="142"
                            percent="56% uploaded"
                            bgColor="#ffb366"
                          />
                          <IconBadge
                            status={true}
                            icon={<ContainerOutlined />}
                            head="Approved Works"
                            number="116"
                            percent="56% uploaded"
                            bgColor="#4da6ff"
                          />
                        </Row>
                      </Col>

                      <Col lg={24} md={24} style={{ flex: 1 }}>
                        <ReactApexChart
                          options={chartOptions.options}
                          series={chartOptions.series}
                          type="donut"
                        />
                      </Col>
                    </Row>
                  </div>
                </Col>

                <Col lg={8} md={24}>
                  <Card title="Works Category">
                    <ReactApexChart
                      options={chartOptions.options}
                      series={chartOptions.series}
                      type="donut"
                    />
                  </Card>
                </Col>
              </Row>
              <h1>My Tasks</h1>
              <Card>
                <div style={{ backgroundColor: "white", padding: "15px" }}>
                  <Tabs>
                    <TabPane tab="Approved List" key="1">
                      <Row>
                        <Select style={{ width: "200px" }} placeholder="Select">
                          <Select.Option key="1">New</Select.Option>
                          <Select.Option key="2">Estimated</Select.Option>
                        </Select>
                        <Button style={{ marginLeft: "10px" }} type="primary">
                          Filter
                        </Button>
                      </Row>
                    </TabPane>
                    <TabPane tab="New Work Orders" key="2">
                      Content of Tab 2
                    </TabPane>
                    <TabPane tab="Estimates" key="3">
                      Content of Tab 3
                    </TabPane>
                  </Tabs>
                </div>
              </Card>
              <div className="table-container">
                <Table
                  className="custom-table"
                  rowSelection={{
                    type: "checkbox",
                    ...rowSelection,
                  }}
                  columns={columns}
                  dataSource={data}
                  width="100%"
                />
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default Dashboard;
