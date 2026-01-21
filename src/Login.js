// // // import React from "react";
// // // import { Form, Input, Button, Card, Typography } from "antd";
// // // import { UserOutlined, LockOutlined } from "@ant-design/icons";
// // // import { useNavigate } from "react-router-dom";
// // // import { message } from "antd";


// // // const { Title, Text } = Typography;

// // // const Login = () => {
// // //   const navigate = useNavigate();

// // //   const handleLogin = (values) => {
// // //     const { email, password } = values;

// // //     if (email === "admin@gmail.com" && password === "1234") {
// // //       message.success({
// // //         content: "Login Successfully",
// // //         duration: 3,
// // //       });
// // //      // navigate("/Patient");
// // //       //alert("Login Successful");
// // //       navigate("/dashboard");
// // //     } else {
// // //       // alert("Invalid Credentials");

// // //       message.warning({
// // //         content: "Invalid Credentials",
// // //         duration: 3,
// // //       });
// // //     }
// // //   };

// // //   return (
// // //     <div style={styles.container}>
// // //       <Card style={styles.card}>
// // //         <Title level={3} style={{ textAlign: "center" }}>
// // //           🏥 Hospital Login
// // //         </Title>

// // //         <Text type="secondary" style={{ display: "block", textAlign: "center", marginBottom: 20 }}>
// // //           Please login to continue
// // //         </Text>

// // //         <Form
// // //           name="login"
// // //           onFinish={handleLogin}
// // //           layout="vertical"
// // //         >
// // //           <Form.Item
// // //             label="Email"
// // //             name="email"
// // //             rules={[
// // //               { required: true, message: "Please enter your email" },
// // //               { type: "email", message: "Enter a valid email" }
// // //             ]}
// // //           >
// // //             <Input
// // //               prefix={<UserOutlined />}
// // //               placeholder="admin@gmail.com"
// // //             />
// // //           </Form.Item>

// // //           <Form.Item
// // //             label="Password"
// // //             name="password"
// // //             rules={[{ required: true, message: "Please enter your password" }]}
// // //           >
// // //             <Input.Password
// // //               prefix={<LockOutlined />}
// // //               placeholder="Enter password"
// // //             />
// // //           </Form.Item>

// // //           <Form.Item>
// // //             <Button type="primary" htmlType="submit" block>
// // //               Login
// // //             </Button>

// // //           </Form.Item>
// // //         </Form>
// // //       </Card>
// // //     </div>
// // //   );
// // // };

// // // const styles = {
// // //   container: {
// // //     height: "100vh",
// // //     display: "flex",
// // //     justifyContent: "center",
// // //     alignItems: "center",
// // //     background: "linear-gradient(135deg, #1890ff, #e6f7ff)",
// // //   },
// // //   card: {
// // //     width: 380,
// // //     borderRadius: 10,
// // //     boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
// // //   },
// // // };

// // // export default Login;




// // import React from "react";
// // import { Form, Input, Button, Card, message } from "antd";
// // import { useNavigate } from "react-router-dom";

// // const Login = () => {
// //   const navigate = useNavigate();

  // const onFinish = async (values) => {
  //   try {
  //     const res = await fetch(
  //       "http://localhost/Hospital_mgmt/Home/login",
  //       {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify(values),
  //       }
  //     );

  //     const data = await res.json();

  //     if (data.status) {
  //       localStorage.setItem("user", JSON.stringify(data.user));
  //       navigate("/dashboard");
  //     } else {
  //       message.error("Invalid email or password");
  //     }
  //   } catch {
  //     message.error("Server error");
  //   }
  // };

// // //   return (
// //     <Card title="Login" style={{ maxWidth: 400, margin: "auto" }}>
// //       <Form layout="vertical" onFinish={onFinish}>
// //         <Form.Item name="email" label="Email" rules={[{ required: true }]}>
// //           <Input />
// //         </Form.Item>

// //         <Form.Item name="password" label="Password" rules={[{ required: true }]}>
// //           <Input.Password />
// //         </Form.Item>

// //         <Button type="primary" htmlType="submit" block>
// //           Login
// //         </Button>
// //       </Form>
// //     </Card>
// //   );
// // };

// // export default Login;

// import React from "react";
// import { Form, Input, Button, Card, Typography, message } from "antd";
// import { useNavigate } from "react-router-dom";


// const { Text } = Typography;

// const Login = () => {
//   const navigate = useNavigate();

//   const onFinish = async (values) => {
//     try {
//       const res = await fetch(
//         "http://localhost/Hospital_mgmt/Home/login",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(values),
//         }
//       );

//       const data = await res.json();

//       if (data.status) {
//         localStorage.setItem("user", JSON.stringify(data.user));
//         navigate("/dashboard");
//       } else {
//         message.error("Invalid email or password");
//       }
//     } catch {
//       message.error("Server error");
//     }
//   };


//   return (
//     <Card title="Login" style={{ maxWidth: 400, margin: "auto" }}>
//       <Form layout="vertical" onFinish={onFinish}>
//         <Form.Item
//           label="Email"
//           name="email"
//           rules={[{ required: true, type: "email" }]}
//         >
//           <Input />
//         </Form.Item>

//         <Form.Item
//           label="Password"
//           name="password"
//           rules={[{ required: true }]}
//         >
//           <Input.Password />
//         </Form.Item>

//         <Button type="primary" htmlType="submit" block>
//           Login
//         </Button>

//         {/* SIGNUP LINK */}
//         <div style={{ marginTop: 15, textAlign: "center" }}>
//           <Text>
//             Not registered?{" "}
//             <span
//               style={{ color: "#1890ff", cursor: "pointer" }}
//               onClick={() => navigate("/signup")}
//             >
//               Sign up here
//             </span>
//           </Text>
//         </div>
//       </Form>
//     </Card>
//   );
// };

// export default Login;



import React from "react";
import { Form, Input, Button, Card, Typography, message } from "antd";
import { useNavigate } from "react-router-dom";
import { MailOutlined, LockOutlined} from "@ant-design/icons";

const { Text } = Typography;

const Login = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const res = await fetch(
        "http://localhost/Hospital_mgmt/index.php/Home/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        }
      );

      const data = await res.json();

      if (data.status) {
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/dashboard");
      } else {
        message.error("Invalid email or password");
      }
    } catch {
      message.error("Server error");
    }
  };
  return (
    <div style={styles.background}>
      <Card title="Hospital Login" style={styles.card}>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Email"
            name="email"
            
            rules={[{ required: true, type: "email" }]}
            
          >
           <Input
    //prefix={<MailOutlined />}
    placeholder="Enter email"
    size="small"
  />
         </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true }]}
            //prefix={<LockOutlined/>}
            

          >
            <Input.Password
   // prefix={<LockOutlined />}
    placeholder="Enter password"
    size="small"
  />  
          </Form.Item>

          <Button type="primary" htmlType="submit" block>
            Login
          </Button>

          <div style={{ marginTop: 15, textAlign: "center" }}>
            <Text>
              Not registered?{" "}
              <span
                style={{ color: "#1890ff", cursor: "pointer" }}
                onClick={() => navigate("/signup")}
              >
                Sign up here
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
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: 400,
    borderRadius: 10,
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
  },
};

export default Login;
