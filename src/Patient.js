import React, { useState, useEffect } from "react";
import { Card, Input, Button, Space, DatePicker, Table, Typography } from "antd";
const { Title } = Typography;
const Patient = () => {
  const [records, setRecords] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState({
    patient_name: "",
    address: "",
    department: "",
    docter: "",
    date: "",
    time: "",
    booking_no: "",

  });

  useEffect(() => {
    fetch("http://localhost/Hospital_mgmt/index.php/Home/showallrecords")
      .then((res) => res.json())
      .then((data) => {
        setRecords(data);
        setFilteredItems(data);
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  const handleSearch = () => {
    const filtered = records.filter(item =>
      item.patient_name.toLowerCase().includes(searchTerm.patient_name.toLowerCase()) &&
      item.department.toLowerCase().includes(searchTerm.department.toLowerCase()) &&

      item.docter.toLowerCase().includes(searchTerm.docter.toLowerCase()) &&
      item.date.includes(searchTerm.date) &&
      item.booking_no.includes(searchTerm.booking_no)
    );
    setFilteredItems(filtered);
  };

  const handleChange = (key, value) => {
    setSearchTerm(prev => ({ ...prev, [key]: value }));
  };

  const columns = [
    {
      title: "Patient Name",
      dataIndex: "patient_name",
      key: "patient_name",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Department",
      dataIndex: "department",
      key: "department",
    },
    {
      title: "Doctor",
      dataIndex: "docter",
      key: "docter",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Time",
      dataIndex: "time",
      key: "time",
    },
    {
      title: "Booking_no",
      dataIndex: "booking_no",
      key: "booking_no",
    },
  ];

  return (
    <div style={styles.container}>
      <Card style={styles.card}>
        <Title level={3}>📋 Booked Appointments</Title>

        {/* Search Section */}
        <Space wrap size="middle" style={{ marginBottom: 16 }}>
          <Input
            placeholder="Search Patient Name"
            value={searchTerm.patient_name}
            onChange={(e) => handleChange("patient_name", e.target.value)}
          />
          <Input
            placeholder="Search By Department"
            value={searchTerm.department}
            onChange={(e) => handleChange("department", e.target.value)}
          />
          <Input
            placeholder="Search Doctor"
            value={searchTerm.docter}
            onChange={(e) => handleChange("docter", e.target.value)}
          />

          <DatePicker
            allowClear
            placeholder="Search by Date"
            format="YYYY-MM-DD"
            onChange={(date, dateString) =>
              handleChange("date", dateString || "")
            }
          />

          <Button type="primary" onClick={handleSearch}>
            Search
          </Button>

          <Button
            onClick={() => {
              setSearchTerm({
                patient_name: "",
                address: "",
                department: "",
                docter: "",
                date: "",
                time: "",
                booking_no: "",
              });
              setFilteredItems(records);
            }}
          >
            Reset
          </Button>
        </Space>

        {/* Table Section */}
        <Table
          columns={columns}
          dataSource={filteredItems}
          rowKey={(record, index) => index}
          pagination={{ pageSize: 8 }}
          bordered
        />
      </Card>
    </div>
  );
};

const styles = {
  container: {
    padding: 24,
    minHeight: "100vh",
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
    borderRadius: 12,
    boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
  },

};
export default Patient;
