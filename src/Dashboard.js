import React from "react";
import {
  Layout,
  Button,
  Typography,
  Carousel,
  Row,
  Col,
  Card,
} from "antd";
import { PlusOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Header, Content } = Layout;
const { Title, Paragraph } = Typography;

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <Layout style={{ minHeight: "50vh" }}>
      {/* HEADER */}
      <Header
        style={{
          background: "#fff",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 14px",
        }}
      >
        <Title level={4} style={{ margin: 0 }}>
          🏥  Hospital Management System
        </Title>
      </Header>

      {/* CONTENT */}
      <Content style={{ padding: 24 }}>
        {/* IMAGE + SIDE CONTENT */}
        <Row gutter={24} align="middle" style={{ minHeight: "60vh"}} >
          {/* LEFT: IMAGE SLIDER */}
          <Col span={14}>
            <Carousel autoplay>
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef"
                alt="Hospital"
                style={sliderStyle}
              />
              <img
                src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3"
                alt="Doctors"
                style={sliderStyle}
              />
              <img
                src="https://images.unsplash.com/photo-1504439468489-c8920d796a29"
                alt="Care"
                style={sliderStyle}
              />
            </Carousel>
          </Col>

          {/* RIGHT: TEXT + BUTTON */}
          <Col span={10}>
            <Card>
              <Title level={3}>Welcome to Our Hospital</Title>
              <Paragraph>
                We provide quality healthcare with experienced doctors and
                modern facilities. Book your appointment easily in just one
                click.
              </Paragraph>

              <Button
                type="primary"
                size="large"
                icon={<PlusOutlined />}
                onClick={() => navigate("/BookAppointment")}
                style={{ marginBottom: 16 }}
                
               >
                Book Appointment
              </Button>

              <br />

              <Button
                icon={<UnorderedListOutlined />}
                onClick={() => navigate("/Patient")}
              >
                View Appointments
              </Button>
            </Card>
          </Col>
        </Row>

        {/* INFO SECTION */}
        <Row gutter={16} style={{ marginTop: 32 }}>
          <Col span={8}>
            <Card title="👨‍⚕️ Expert Doctors">
              Qualified doctors across multiple departments.
            </Card>
          </Col>

          <Col span={8}>
            <Card title="📅 Easy Appointments">
              Book appointments in just one click.
            </Card>
          </Col>

          <Col span={8}>
            <Card title="🏥 Quality Care">
              Patient-friendly hospital environment.
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

const sliderStyle = {
  width: "100%",
  height: "60vh",      // 👈 Fits desktop height
  minHeight: "300px",  // 👈 Safe for small screens
  maxHeight: "500px",  // 👈 Prevents over-stretching
  objectFit: "cover",
  borderRadius: 12,
};

export default Dashboard;
