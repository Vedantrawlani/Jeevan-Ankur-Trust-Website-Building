
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Razorpay = require("razorpay");

const student = require("./models/student");
const otherdonation = require("./models/otherdonation");
const payment = require("./models/payment");

const app = express();

// middleware
app.use(cors());
app.use(express.json());


// routes
app.get("/", (req, res) => {
  res.send("Backend is running");
});
// routes
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// 🔥 ADD HERE
app.get("/add-demo", async (req, res) => {
  await student.create({
    name: "Test Student",
    age: 10,
    class: "5th",
    gender: "Male"
  });

  res.send("Student Added");
});
app.post("/volunteer", (req, res) => {
  console.log("Volunteer Data:", req.body);
  res.send("Form data received");
});
// ✅ Students from DB
app.get("/students", async (req, res) => {
  const data = await student.find();
  res.json(data);
});



// ✅ Other Donation save
app.post("/donate", async (req, res) => {
  await otherdonation.create(req.body);
  res.send("Donation Saved ✅");
});

// server start
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});

app.post("/add-student", async (req, res) => {
  const newStudent = await student.create(req.body);
  res.json(newStudent);
});


const razorpay = new Razorpay({
  key_id: "YOUR_KEY_ID",
  key_secret: "YOUR_KEY_SECRET"
});
app.post("/create-order", async (req, res) => {
  const { amount } = req.body;

  const options = {
    amount: amount * 100, // ₹ to paise
    currency: "INR",
    receipt: "receipt_" + Date.now()
  };

  try {
    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error creating order");
  }
});
app.post("/verify-payment", async (req, res) => {
  const { name, amount, razorpay_payment_id, razorpay_order_id } = req.body;

  await payment.create({
    name,
    amount,
    paymentId: razorpay_payment_id,
    orderId: razorpay_order_id,
    status: "success"
  });

  res.json({ message: "Payment Saved ✅" });
});
mongoose.connect("mongodb://vedantrawlani1_db_user:abcdEFG123@ac-vzfcgqd-shard-00-00.9ipzeyw.mongodb.net:27017,ac-vzfcgqd-shard-00-01.9ipzeyw.mongodb.net:27017,ac-vzfcgqd-shard-00-02.9ipzeyw.mongodb.net:27017/?ssl=true&replicaSet=atlas-4sextd-shard-0&authSource=admin&appName=Vedantrawlani")
  .then(() => console.log("MongoDB Connected ✅"))
  .catch(err => console.log(err));