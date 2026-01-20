import React, { useState } from "react";
import { message, Form, Input, Button, Card, Select, DatePicker, TimePicker, Typography } from "antd";
import { UserOutlined, HomeOutlined, MedicineBoxOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Modal } from "antd";

const { Title, Text } = Typography;
const { Option } = Select;

const BookAppointment = () => {
  const [department, setDepartment] = useState("");
  const [docter, setDocter] = useState("");


  const departmentDocters = {
    Cardiology: ["Dr. Amit Sharma", "Dr. Neha Verma"],
    Neurology: ["Dr. Rahul Mehta", "Dr. Pooja Singh"],
    Orthopedic: ["Dr. Suresh Patil", "Dr. Anjali Desai"],
    Pediatrics: ["Dr. Kiran Joshi", "Dr. Sneha Kulkarni"]
  };




  const navigate = useNavigate();
  const handleSubmit = async (values) => {
    const formData = {
      patient_name: values.patient_name,
      address: values.address,
      department: values.department,
      docter: values.docter,
      date: values.date.format("YYYY-MM-DD"),
      time: values.time.format("HH:mm"),
    };

    console.log(formData)

    try {
      const response = await fetch(
        "http://localhost/Hospital_mgmt/Home/registeruser",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();
      if (result.status) {
        Modal.success({
          title: "Booking Confirmed",
          content: (
            <>
              <p><b>Booking No:</b> {result.booking_no}</p>
              <p><b>Date:</b> {formData.date}</p>
              <p><b>Doctor:</b> {formData.docter}</p>
            </>
          ),
        });
        navigate("/Patient");
      } else {
        message.error(result.message);
      }
    } catch (error) {
      message.error("Server error");
    }
  };

  return (
    <div style={styles.container}>
      <Card style={styles.card}>
        <Title level={3} style={{ textAlign: "center" }}>
          🗓️ Book Appointment
        </Title>

        <Text type="secondary" style={{ display: "block", textAlign: "center", marginBottom: 20 }}>
          Fill patient details to schedule an appointment
        </Text>

        <Form layout="vertical" onFinish={handleSubmit}>
          <Form.Item
            label="Patient Name"
            name="patient_name"
            rules={[{ required: true, message: "Please enter patient name" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Enter patient name" />
          </Form.Item>

          <Form.Item
            label="Address"
            name="address"
            rules={[{ required: true, message: "Please enter address" }]}
          >
            <Input prefix={<HomeOutlined />} placeholder="Enter address" />
          </Form.Item>



          <Form.Item
            label="Department"
            name="department"
            rules={[{ required: true, message: "Please select department" }]}
          >
            <Select
              placeholder="Select Department"
              onChange={(value) => setDepartment(value)}
            >
              {Object.keys(departmentDocters).map((dept) => (
                <Option key={dept} value={dept}>
                  {dept}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <br /><br />

          <Form.Item
            label="Doctor"
            name="docter"
            rules={[{ required: true, message: "Please select doctor" }]}
          >
            <Select
              placeholder="Select Doctor"
              disabled={!department}
            >
              {department &&
                departmentDocters[department].map((doc) => (
                  <Option key={doc} value={doc}>
                    {doc}
                  </Option>
                ))}
            </Select>
          </Form.Item>

          <Form.Item
            label="Appointment Date"
            name="date"
            rules={[{ required: true, message: "Please select date" }]}
          >
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item
            label="Appointment Time"
            name="time"
            rules={[{ required: true, message: "Please select time" }]}
          >
            <TimePicker style={{ width: "100%" }} format="HH:mm" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block size="large">
              Book Appointment
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f0f2f5",
  },
  card: {
    width: 420,
    borderRadius: 12,
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
  },
};

export default BookAppointment;
