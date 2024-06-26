const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 4000;
app.use(
  cors({
    origin: ["*"],
    methods: ["GET", "POST"],
    
  })
);
const data = [
  {
    id: 1,
    name: "Vaibhav",
    email: "vaibhav@gmail.com",
    phone: "1234567890",
    enrollNumber: "1234567305477760",
    dateOfAdmission: "8 Dec, 2021",
  },
  {
    id: 2,
    name: "John Doe",
    email: "john@example.com",
    phone: "9876543210",
    enrollNumber: "9876543200012345",
    dateOfAdmission: "15 Jan, 2022",
  },
  {
    id: 3,
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "8765432109",
    enrollNumber: "8765432100012345",
    dateOfAdmission: "20 Feb, 2022",
  },
  {
    id: 4,
    name: "Alice Johnson",
    email: "alice@example.com",
    phone: "7654321098",
    enrollNumber: "7654321090012345",
    dateOfAdmission: "10 Mar, 2022",
  },
  {
    id: 5,
    name: "Bob Brown",
    email: "bob@example.com",
    phone: "6543210987",
    enrollNumber: "6543210980012345",
    dateOfAdmission: "5 Apr, 2022",
  },
];

app.get("/api/data", (req, res) => {
  res.json(data);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
