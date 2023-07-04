import { UserOutlined } from "@ant-design/icons";
import { Col, DatePicker, Row, Select } from "antd";
import React from "react";
import { BsFillGeoAltFill } from "react-icons/bs";
const { RangePicker } = DatePicker;

const Headname = () => {
  return (
    <>
      <Row align="middle" justify="space-between" style={{ display: "flex" }}>
        <Col>
          <h1>Hello There,</h1>
          <p>Designer engineer</p>
        </Col>
        <Col span={12}>
          <Select
          placeholder='Location'
            prefix={<UserOutlined />}
            style={{ width: "200px", marginRight: "20px" }}
          >
            <Select.Option>Chennai</Select.Option>
            <Select.Option>Chennai-2</Select.Option>
           
          </Select>
          <RangePicker />
        </Col>
      </Row>
    </>
  );
};

export default Headname;
