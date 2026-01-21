// import React from "react";
// import { Form, Input, Button, Card, DatePicker, Select, message } from "antd";
// import { useNavigate } from "react-router-dom";

// const { Option } = Select;

// const SignUp = () => {
//   const navigate = useNavigate();

//   const onFinish = async (values) => {
//     const payload = {
//       ...values,
//       dateofbirth: values.dateofbirth.format("YYYY-MM-DD"),
//     };

//     try {
//       const res = await fetch(
//         "http://localhost/Hospital_mgmt/Home/signupuser",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(payload),
//         }
//       );

//       const data = await res.json();

//       if (data.status) {
//         message.success("Registration successful");
//         navigate("/login");
//       } else {
//         message.error(data.message);
//       }
//     } catch {
//       message.error("Server error");
//     }
//   };

//   return (
//     <div style={styles.background}>
// <Card title="Patient Registration" style={{ ...styles.card }}>
//         <Form layout="vertical" onFinish={onFinish} >
//           <Form.Item name="firstname" label="First Name" rules={[{ required: true }]}>
//            <Input size="small" />
//           </Form.Item>

//           <Form.Item name="lastname" label="Last Name" rules={[{ required: true }]}>
//            <Input size="small" />
//           </Form.Item>

//           <Form.Item
//             name="email"
//             label="Email"
//             rules={[{ required: true, type: "email" }]}
//           >
//             <Input size="small" />
//           </Form.Item>

//           <Form.Item
//             name="mobileno"
//             label="Mobile No"
//             rules={[{ required: true, len: 10 }]}
//           >
//             <Input size="small" />
//           </Form.Item>

//           <Form.Item
//             name="dateofbirth"
//             label="Date of Birth"
//             rules={[{ required: true }]}
//           >
//             <DatePicker size="small" style={{ width: "100%" }} />
//           </Form.Item>

//           <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
//             <Select size="large" placeholder="Select gender">
//               <Option value="Male">Male</Option>
//               <Option value="Female">Female</Option>
//               <Option value="Other">Other</Option>
//             </Select>
//           </Form.Item>

//           <Form.Item name="password" label="Password" rules={[{ required: true }]}>
//             <Input.Password size="samll" />
//           </Form.Item>

//           <Button type="primary" htmlType="submit" block size="large">
//             Register
//           </Button>
//         </Form>
//       </Card>
//     </div>
//   );
// };

// const styles = {
//   background: {
//     backgroundImage:
//       'url("https://www.designopedia.in/wp-content/uploads/2019/11/Dental-Clinic-Dr.Ameen-3-1024x650.jpg")',
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     backgroundRepeat: "no-repeat",
//     minHeight: "100vh",
//     width: "100vw",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   card: {
//     width: 550,              // ⬅️ wider card
//     borderRadius: 8,
//     boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
//   },
// };

// export default SignUp;

import React from "react";
import { Form, Input, Button, Card, DatePicker, Select, message, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { UserOutlined, LockOutlined, MailOutlined, PhoneOutlined, CalendarOutlined,TeamOutlined   } from "@ant-design/icons";


const { Text , Title } = Typography;
const { Option } = Select;

const SignUp = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    const payload = {
      ...values,
      dateofbirth: values.dateofbirth.format("YYYY-MM-DD"),
    };

    try {
      const res = await fetch(
        "http://localhost/Hospital_mgmt/Home/signupuser",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const data = await res.json();

      if (data.status) {
        message.success("Registration successful");
        navigate("/login");
      } else {
        message.error(data.message);
      }
    } catch {
      message.error("Server error");
    }
  };

  return (
    <div style={styles.background}>
      <Card style={styles.card}>
       <Title level={3} style={{ textAlign: "center" }}>
          🗓️ Patient Registration
        </Title>
        <Form layout="vertical" onFinish={onFinish} size="small">
          <Form.Item name="firstname" label="First Name" rules={[{ required: true }]}>
            <Input size="small"  prefix={<UserOutlined />} placeholder="First Name"/>
          </Form.Item>

          <Form.Item name="lastname" label="Last Name" rules={[{ required: true }]}>
            <Input size="small" prefix={<UserOutlined />} placeholder="Last Name" />
          </Form.Item>

          <Form.Item name="email" label="Email" rules={[{ required: true, type: "email" }]}>
            <Input size="small" placeholder="Email"  prefix={<MailOutlined />} />
          </Form.Item>

          <Form.Item name="mobileno" label="Mobile No" rules={[{ required: true, len: 10 }]}>
            <Input size="small"  prefix={<PhoneOutlined />} placeholder="Mobile no" />
          </Form.Item>

          <Form.Item name="dateofbirth" label="Date of Birth" rules={[{ required: true }]}>
            <DatePicker style={{ width: "100%" }} prefix={<CalendarOutlined />} size="small" />
          </Form.Item>

          <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
            <Select size="small" prefix={<TeamOutlined />} placeholder="Select gender">
              <Option value="Male">Male</Option>
              <Option value="Female">Female</Option>
              <Option value="Other">Other</Option>
            </Select>
          </Form.Item>

          <Form.Item name="password" label="Password" rules={[{ required: true }]}>
            <Input.Password size="small" placeholder="Enter Password" prefix={<LockOutlined />}/>
          </Form.Item>

          <Button type="primary" htmlType="submit" block size="large">
            Register
          </Button>

          <div style={{ marginTop: 15, textAlign: "center" }}>
            <Text>
              Already registered?{" "}
              <span
                style={{ color: "#1890ff", cursor: "pointer" }}
                onClick={() => navigate("/login")}
              >
                Login here
              </span>
            </Text>
          </div>
        </Form>
      </Card>
    </div>
  );
};

const styles = {
  background: {
    backgroundImage:
      'url("https://www.designopedia.in/wp-content/uploads/2019/11/Dental-Clinic-Dr.Ameen-3-1024x650.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: 500,              // same width as BookAppointment
    borderRadius: 12,
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    padding: "20px",
  },
};

export default SignUp;
