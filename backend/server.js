
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
mongoose.connect("mongodb://vedantrawlani1_db_user:abcdEFG123@ac-vzfcgqd-shard-00-00.9ipzeyw.mongodb.net:27017,ac-vzfcgqd-shard-00-01.9ipzeyw.mongodb.net:27017,ac-vzfcgqd-shard-00-02.9ipzeyw.mongodb.net:27017/ngo?ssl=true&replicaSet=atlas-4sextd-shard-0&authSource=admin")
  .then(() => console.log("MongoDB Connected ✅"))
  .catch(err => console.log(err));


// routes
app.get("/", (req, res) => {
  res.send("Backend is running");
});


// 🔥 ADD HERE
app.get("/add-demo", async (req, res) => {
  await student.insertMany([
    

  {
    name: "Pooja More",
    age: 7,
    class: "2nd",
    gender: "Female"
  },
  {
    name: "Khushi Pathare",
    age: 8,
    class: "4th",
    gender: "Female"
  },
  {
    name: "Sakshi Dhrup Prakash Chourasiya",
    age: 11,
    class: "4th",
    gender: "Female"
  },
  {
    name: "Srushti Kharatmol",
    age: 9,
    class: "3rd",
    gender: "Female"
  },
  {
    name: "Purva Waghmare",
    age: 11,
    class: "4th",
    gender: "Female"
  },
  {
    name: "Ifat Lokhandwala",
    age: 8,
    class: "3rd",
    gender: "Female"
  },
  {
    name: "Aaradhya Santosh Gupta",
    age: 8,
    class: "2nd",
    gender: "Female"
  },
  {
    name: "Sana Shaikh",
    age: 10,
    class: "4th",
    gender: "Female"
  },
  {
    name: "Sahista Jubair Ahmed Khan",
    age: 10,
    class: "3rd",
    gender: "Female"
  },
  {
    name: "Fathima Sakeel Pathan",
    age: 12,
    class: "6th",
    gender: "Female"
  },
  {
    name: "Sagira Anzar Ansari",
    age: 8,
    class: "3rd",
    gender: "Female"
  },
  {
    name: "Shradha Vinod Ram",
    age: 9,
    class: "4th",
    gender: "Female"
  },
  {
    name: "Saloni Vinod Patwa",
    age: 6,
    class: "1st",
    gender: "Female"
  },
  {
    name: "Priti Pramod Ram",
    age: 4,
    class: "N/A",
    gender: "Female"
  },
  {
    name: "Deepti Dhrup Prakash Chourasiya",
    age: 9,
    class: "3rd",
    gender: "Female"
  },
  {
    name: "Anamika Sunil Chaurasiya",
    age: 7,
    class: "1st",
    gender: "Female"
  },
  {
    name: "Mansi Vijay Yadav",
    age: 9,
    class: "4th",
    gender: "Female"
  },
  {
    name: "Anshika Jitendra Mourya",
    age: 9,
    class: "3rd",
    gender: "Female"
  },
  {
    name: "Shraddha Vinod Ram",
    age: 10,
    class: "4th",
    gender: "Female"
  },
  {
    name: "Gauri Sunil Pawar",
    age: 12,
    class: "3rd",
    gender: "Female"
  },
  {
    name: "Anjali Gupta",
    age: 7,
    class: "2nd",
    gender: "Female"
  },
  {
    name: "Sana Sikander Shaikh",
    age: 10,
    class: "3rd",
    gender: "Female"
  },

  {
    name: "Anubhav Shankar Sharma",
    age: 8,
    class: "3rd",
    gender: "Male"
  },
  {
    name: "Anurag Shankar Sharma",
    age: 8,
    class: "3rd",
    gender: "Male"
  },
  {
    name: "Ranveer Rajesh Prajapati",
    age: 8,
    class: "3rd",
    gender: "Male"
  },
  {
    name: "Nithin Bhane Kumar Pal",
    age: 10,
    class: "3rd",
    gender: "Male"
  },
  {
    name: "Naveen Bhane Kumar Pal",
    age: 9,
    class: "2nd",
    gender: "Male"
  },
  {
    name: "Krishna Kumar Promod Ram",
    age: 10,
    class: "5th",
    gender: "Male"
  },
  {
    name: "Karan Promod Ram",
    age: 8,
    class: "3rd",
    gender: "Male"
  },
  {
    name: "Sunny Kumar Sharma",
    age: 1,
    class: "6th",
    gender: "Male"
  },
  {
    name: "Noman Jubair Ahmed Shaikh",
    age: 6,
    class: "1st",
    gender: "Male"
  },
  {
    name: "Avinash",
    age: 10,
    class: "4th",
    gender: "Male"
  },
  {
    name: "Arun",
    age: 11,
    class: "4th",
    gender: "Male"
  },
  {
    name: "Krishna Gupta",
    age: 12,
    class: "5th",
    gender: "Male"
  },
  {
    name: "Mustafa Shaikh",
    age: 8,
    class: "2nd",
    gender: "Male"
  },
  {
    name: "Sujit",
    age: 10,
    class: "1st",
    gender: "Male"
  },
  {
    name: "Sachin Rathore",
    age: 12,
    class: "5th",
    gender: "Male"
  },
  {
    name: "Ayan Jubair Ahmed Khan",
    age: 13,
    class: "5th",
    gender: "Male"
  },
  {
    name: "Abhinandan Kumar",
    age: 10,
    class: "2nd",
    gender: "Male"
  },
  {
    name: "Md. Harsh Gufran",
    age: 9,
    class: "3rd",
    gender: "Male"
  },
  {
    name: "Md. Hasad Gufran",
    age: 11,
    class: "4th",
    gender: "Male"
  },
  {
    name: "Heeresh",
    age: 13,
    class: "5th",
    gender: "Male"
  },
  {
    name: "Saksham Dhruv Prakash",
    age: 13,
    class: "4th",
    gender: "Male"
  },
  {
    name: "Aadharsh Chaurasiya",
    age: 10,
    class: "5th",
    gender: "Male"
  },
  {
    name: "Aman Ali Qureshi",
    age: 9,
    class: "2nd",
    gender: "Male"
  },
  {
    name: "Sameer Sikander Shaikh",
    age: 12,
    class: "4th",
    gender: "Male"
  },

  // ===== PRE-SCHOOL FEMALE =====

  {
    name: "Priyanshi Bhane Kumar Pal",
    age: 4,
    class: "Play School",
    gender: "Female"
  },
  {
    name: "Haya MD Jamil Shaikh",
    age: 4,
    class: "Play School",
    gender: "Female"
  },
  {
    name: "Anushka Kumari Kapil Singh",
    age: 5,
    class: "Play School",
    gender: "Female"
  },
  {
    name: "Halima MD Saddam",
    age: 3,
    class: "Play School",
    gender: "Female"
  },
  {
    name: "Zara Khawaja Shaikh",
    age: 4,
    class: "Play School",
    gender: "Female"
  },
  {
    name: "Sabiha Karam Singh",
    age: 5,
    class: "Play School",
    gender: "Female"
  },
  {
    name: "Rasidha Kharib Aburan",
    age: 4,
    class: "Play School",
    gender: "Female"
  },
  {
    name: "Anvi Dubey",
    age: 4,
    class: "Play School",
    gender: "Female"
  },
  {
    name: "Nidhi Kumari",
    age: 6,
    class: "Play School",
    gender: "Female"
  },
  {
    name: "Darshika",
    age: 5,
    class: "Play School",
    gender: "Female"
  },
  {
    name: "Zainab Muzeeb Shekh",
    age: 6,
    class: "Play School",
    gender: "Female"
  },
  {
    name: "Sejal Rahul Prajapati",
    age: 3,
    class: "Play School",
    gender: "Female"
  },
  {
    name: "Hasiba Khurshid Khan",
    age: 6,
    class: "Play School",
    gender: "Female"
  },
  {
    name: "Bushra Kamre Aalam",
    age: 5,
    class: "Play School",
    gender: "Female"
  },
  {
    name: "Aparna Akash Kasabe",
    age: 5,
    class: "Play School",
    gender: "Female"
  },
  {
    name: "Anchal",
    age: 5,
    class: "Play School",
    gender: "Female"
  },
  {
    name: "Aaradhya Saynal Suddhar",
    age: 10,
    class: "Play School",
    gender: "Female"
  },
  {
    name: "Aabiha Nawaz Baig",
    age: 3,
    class: "Play School",
    gender: "Female"
  },
  {
    name: "Khushi Sanjay Gupta",
    age: 6,
    class: "Play School",
    gender: "Female"
  },
  {
    name: "Sakshi Laxman",
    age: 5,
    class: "Play School",
    gender: "Female"
  },
  {
    name: "Mahek Husan Shaikh",
    age: 7,
    class: "Play School",
    gender: "Female"
  },
  {
    name: "Shradha Saynal Suddhar",
    age: 7,
    class: "Play School",
    gender: "Female"
  },
  {
    name: "Roshni Rajbar",
    age: 9,
    class: "Play School",
    gender: "Female"
  },
  {
    name: "Ayesha",
    age: 5,
    class: "Play School",
    gender: "Female"
  },

  // ===== PRE-SCHOOL MALE =====

  {
    name: "Kartik Virendra Kanojiya",
    age: 5,
    class: "Play School",
    gender: "Male"
  },
  {
    name: "Hasanain MD Jamil Shaikh",
    age: 5,
    class: "Play School",
    gender: "Male"
  },
  {
    name: "Rajveer Vinod Ram",
    age: 3,
    class: "Play School",
    gender: "Male"
  },
  {
    name: "Salman Mehtab Aalam Shaikh",
    age: 4,
    class: "Play School",
    gender: "Male"
  },
  {
    name: "Rushab Ramu Kanojiya",
    age: 4,
    class: "Play School",
    gender: "Male"
  },
  {
    name: "Divyansh Prajapati",
    age: 6,
    class: "Play School",
    gender: "Male"
  },
  {
    name: "Hasan Shaikh",
    age: 4,
    class: "Play School",
    gender: "Male"
  },
  {
    name: "Aayan Najere Ansari",
    age: 8,
    class: "Play School",
    gender: "Male"
  },
  {
    name: "Muntazir Zohur Shaikh",
    age: 4,
    class: "Play School",
    gender: "Male"
  },
  {
    name: "Zaid Zohur Shaikh",
    age: 6,
    class: "Play School",
    gender: "Male"
  },
  {
    name: "Rajeev Umesh Patel",
    age: 8,
    class: "Play School",
    gender: "Male"
  },
  {
    name: "Aayan Faizan Shaikh",
    age: 6,
    class: "Play School",
    gender: "Male"
  },
  {
    name: "Ravi",
    age: 3,
    class: "Play School",
    gender: "Male"
  },
  {
    name: "Farhad Sameer Ahmad Shaikh",
    age: 5,
    class: "Play School",
    gender: "Male"
  },
  {
    name: "Raj Rajesh Prajapati",
    age: 7,
    class: "Play School",
    gender: "Male"
  },
  {
    name: "Amar Kumar Patel",
    age: 6,
    class: "Play School",
    gender: "Male"
  },
  {
    name: "Aslam Shaikh",
    age: 6,
    class: "Play School",
    gender: "Male"
  },
  {
    name: "Rehan Najere Ansari",
    age: 10,
    class: "Play School",
    gender: "Male"
  },
  {
    name: "Shahunoor Mehtab Aalam Shaikh",
    age: 12,
    class: "Play School",
    gender: "Male"
  },
  {
    name: "Aman Kahniya Choudhary",
    age: 3,
    class: "Play School",
    gender: "Male"
  },
  {
    name: "Omkar",
    age: 3,
    class: "Play School",
    gender: "Male"
  },
  {
    name: "Rehan Hussain Shaikh",
    age: 3,
    class: "Play School",
    gender: "Male"
  },
  {
    name: "Aman Ali Qureshi",
    age: 6,
    class: "Play School",
    gender: "Male"
  },
  {
    name: "Rudra Rampal Kanojiya",
    age: 5,
    class: "Play School",
    gender: "Male"
  },

  // ===== OPTIONAL =====

  {
    name: "Muntazir Ansari",
    age: "",
    class: "Play School",
    gender: "Male"
  },
  {
    name: "Azaid Ansari",
    age: "",
    class: "Play School",
    gender: "Male"
  },
  {
    name: "Sunny Shah",
    age: "",
    class: "Play School",
    gender: "Male"
  },
  {
    name: "Ansh Pintu Bharti",
    age: 5,
    class: "Play School",
    gender: "Male"
  },
  {
    name: "Rehan Husan Shaikh",
    age: 4,
    class: "Play School",
    gender: "Male"
  },
  {
    name: "Abdullah Roshan Qureshi",
    age: 5,
    class: "Play School",
    gender: "Male"
  },
  {
    name: "Sajid Salman Shaikh",
    age: 4,
    class: "Play School",
    gender: "Male"
  },
  {
    name: "Ali Liyakhat Shaikh",
    age: 5,
    class: "Play School",
    gender: "Male"
  },
  {
    name: "Alfaiz Asif Shaikh",
    age: 4,
    class: "Play School",
    gender: "Male"
  },
  {
    name: "Ganesh Shivkumar Pal",
    age: 8,
    class: "Play School",
    gender: "Male"
  },

  // ===== FEMALE STUDENTS =====

  {
    name: "Devika Vijay Yadav",
    age: 12,
    class: "7th",
    gender: "Female"
  },
  {
    name: "Jyoti Viru Shah",
    age: 12,
    class: "7th",
    gender: "Female"
  },
  {
    name: "Rithika Vijay Yadav",
    age: 14,
    class: "8th",
    gender: "Female"
  },
  {
    name: "Babli Kumari Viru Shah",
    age: 13,
    class: "9th",
    gender: "Female"
  },
  {
    name: "Sangeetha Kumari Viru Shah",
    age: 11,
    class: "6th",
    gender: "Female"
  },
  {
    name: "Heena Akhtar Shaikh",
    age: 11,
    class: "6th",
    gender: "Female"
  },
  {
    name: "Nandini Shankar Sharma",
    age: 14,
    class: "9th",
    gender: "Female"
  },
  {
    name: "Sonali Shankar Sharma",
    age: 12,
    class: "7th",
    gender: "Female"
  },
  {
    name: "Anjum Shaikh",
    age: 14,
    class: "9th",
    gender: "Female"
  },
  {
    name: "Saheen Shaikh",
    age: 11,
    class: "7th",
    gender: "Female"
  },
  {
    name: "Vidyanshi Krishna Prasad Sharma",
    age: 11,
    class: "6th",
    gender: "Female"
  },
  {
    name: "Akansha Budhiram Gupta",
    age: 11,
    class: "6th",
    gender: "Female"
  },
  {
    name: "Renuka Varma",
    age: 11,
    class: "6th",
    gender: "Female"
  },
  {
    name: "Anjum",
    age: "",
    class: "",
    gender: "Female"
  },
  {
    name: "Alisha Shaikh",
    age: 11,
    class: "6th",
    gender: "Female"
  },
  {
    name: "Siddhi Vinod Ram",
    age: 10,
    class: "5th",
    gender: "Female"
  },
  {
    name: "Alfiya Shaikh 1",
    age: 12,
    class: "6th",
    gender: "Female"
  },
  {
    name: "Alfiya Shaikh 2",
    age: 12,
    class: "5th",
    gender: "Female"
  },
  {
    name: "Zoya Md Nafis",
    age: 10,
    class: "",
    gender: "Female"
  },
  {
    name: "Zainab Md Nafis",
    age: 6,
    class: "",
    gender: "Female"
  },
  {
    name: "Gauri Sunil Pawar",
    age: 10,
    class: "3rd",
    gender: "Female"
  },
  {
    name: "Khushi Ramji Kori",
    age: 12,
    class: "6th",
    gender: "Female"
  },
  {
    name: "Anandi Ajay Kumar Jaiswal",
    age: 12,
    class: "7th",
    gender: "Female"
  },
  {
    name: "Saina Anwar Shaikh",
    age: 10,
    class: "5th",
    gender: "Female"
  },
  {
    name: "Aliya Shahir Shaikh",
    age: 13,
    class: "5th",
    gender: "Female"
  },
  {
    name: "Aliya MD Namjim Mansuri",
    age: 13,
    class: "4th",
    gender: "Female"
  },
  {
    name: "Anshika 2",
    age: 11,
    class: "4th",
    gender: "Female"
  },

  // ===== MALE STUDENTS =====

  {
    name: "Sachin Shankar Sharma",
    age: 10,
    class: "5th",
    gender: "Male"
  },
  {
    name: "Krishna Gupta",
    age: 11,
    class: "6th",
    gender: "Male"
  },
  {
    name: "Aayush Prajapati",
    age: 10,
    class: "5th",
    gender: "Male"
  },
  {
    name: "Ranveer Sainath",
    age: 12,
    class: "6th",
    gender: "Male"
  },
  {
    name: "Arshad Gufran Shaikh",
    age: 10,
    class: "3rd",
    gender: "Male"
  },
  {
    name: "Ali Muzeeb Shekh",
    age: 10,
    class: "1st",
    gender: "Male"
  },
  {
    name: "Husain Muzeeb Shekh",
    age: "",
    class: "",
    gender: "Male"
  },
  {
    name: "Sameer Anzar Ansari",
    age: 10,
    class: "5th",
    gender: "Male"
  },
  {
    name: "Ayan Zubair Ahmed Khan",
    age: 12,
    class: "6th",
    gender: "Male"
  },
  {
    name: "Arsh Mohmmad Rufran Shaikh",
    age: 6,
    class: "",
    gender: "Male"
  },
  {
    name: "Golu Rajbar",
    age: 7,
    class: "3rd",
    gender: "Male"
  }

  ]);

  res.send("142 Students Added ✅");
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
  console.log("Donation Data:", req.body); // 🔥 ADD THIS

  await otherdonation.create(req.body);

  res.send("Donation Saved ✅"); // 🔥 MUST
});
app.get("/other-donations", async (req, res) => {
  const data = await otherdonation.find();
  res.json(data);
});

// server start
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
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
