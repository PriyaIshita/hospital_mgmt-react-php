import React from "react";
import { Card, Row, Col, Typography } from "antd";
import {
  UserOutlined,
  TeamOutlined,
  CalendarOutlined,
  MedicineBoxOutlined,
} from "@ant-design/icons";

const { Title } = Typography;



const Dashboard = () => {
  return (
    <div style={{ padding: 24 }}>
      <Title level={3}>🏥 Hospital Dashboard</Title>

      <Row gutter={16}>
        <Col span={6}>
          <Card>
            <UserOutlined style={{ fontSize: 30 }} />
            <h3>Total Patients</h3>
            <h2>120</h2>
          </Card>
        </Col>

        <Col span={6}>
          <Card>
            <TeamOutlined style={{ fontSize: 30 }} />
            <h3>Total Doctors</h3>
            <h2>25</h2>
          </Card>
        </Col>

        <Col span={6}>
          <Card>
            <CalendarOutlined style={{ fontSize: 30 }} />
            <h3>Today Appointments</h3>
            <h2>18</h2>
          </Card>
        </Col>

        <Col span={6}>
          <Card>
            <MedicineBoxOutlined style={{ fontSize: 30 }} />
            <h3>Departments</h3>
            <h2>6</h2>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
