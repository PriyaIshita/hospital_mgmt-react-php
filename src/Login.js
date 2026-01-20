import React from "react";
import { Form, Input, Button, Card, Typography } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { message } from "antd";


const { Title, Text } = Typography;

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (values) => {
    const { email, password } = values;

    if (email === "admin@gmail.com" && password === "1234") {
      message.success({
        content: "Login Successfully",
        duration: 3,
      });
     // navigate("/Patient");
      //alert("Login Successful");
      navigate("/dashboard");
    } else {
      // alert("Invalid Credentials");

      message.warning({
        content: "Invalid Credentials",
        duration: 3,
      });
    }
  };

  return (
    <div style={styles.container}>
      <Card style={styles.card}>
        <Title level={3} style={{ textAlign: "center" }}>
          🏥 Hospital Login
        </Title>

        <Text type="secondary" style={{ display: "block", textAlign: "center", marginBottom: 20 }}>
          Please login to continue
        </Text>

        <Form
          name="login"
          onFinish={handleLogin}
          layout="vertical"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Enter a valid email" }
            ]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="admin@gmail.com"
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter your password" }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Enter password"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Login
            </Button>

          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #1890ff, #e6f7ff)",
  },
  card: {
    width: 380,
    borderRadius: 10,
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
  },
};

export default Login;
