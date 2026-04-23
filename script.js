console.log("JS Loaded");
document.addEventListener("DOMContentLoaded", function(){
 // loadOtherDonations();

/* ================= DONATION FORM ================= */
const otherForm = document.getElementById("otherForm");


otherForm.addEventListener("submit", function(e){
  e.preventDefault();

  const item = document.getElementById("itemSelect").value;
  const itemName = document.querySelector('#itemNameBox input')?.value || "";
  const quantity = document.querySelector('input[type="number"]').value;
  const name = document.querySelector('input[placeholder="Donor Name"]').value;
  const phone = document.querySelector('input[placeholder="Contact Number"]').value;

  fetch("https://jeevan-ankur-trust-website-building.onrender.com/donate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      item,
      itemName,
      quantity,
      name,
      phone
    })
  })
  .then(res => res.text())
  .then(data => {
    alert("Donation Submitted Successfully ✅");
  })
  .catch(err => {
    alert("Backend not responding ❌");
    console.log(err);
  });
});

/* ================= LOGIN ================= */
const loginForm = document.getElementById("loginForm");
const msg = document.getElementById("loginMsg");
const section = document.getElementById("students");
const allowedEmail = "jeevanankur226@gmail.com";
const allowedPassword = "jeevan@123";

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (email === allowedEmail && password === allowedPassword) {
    msg.innerText = "Login Successful ✅";
    section.classList.remove("hidden");
    loadStudents();
  } else {
    msg.innerText = "Invalid Email or Password ❌";
  }
});


/* ================= LOAD STUDENTS ================= */
function loadStudents() {
fetch("https://jeevan-ankur-trust-website-building.onrender.com/students")
.then(res => res.json())
.then(data => {
displayStudents(data);
})
.catch(err => {
console.log("Error fetching students:", err);
});
}

/* ================= DISPLAY STUDENTS ================= */
function displayStudents(students) {
const grid = document.getElementById("studentsGrid");


const males = students.filter(s => s.gender === "Male");
const females = students.filter(s => s.gender === "Female");

grid.innerHTML = `
  <div class="student-column">
    <h3>Male Students</h3>
    ${males.map(s => `
      <div class="student-card">
        <h4>${s.name}</h4>
        <p>Age: ${s.age}</p>
        <p>Class: ${s.class}</p>
      </div>
    `).join("")}
  </div>

  <div class="student-column">
    <h3>Female Students</h3>
    ${females.map(s => `
      <div class="student-card">
        <h4>${s.name}</h4>
        <p>Age: ${s.age}</p>
        <p>Class: ${s.class}</p>
      </div>
    `).join("")}
  </div>
`;


}

/* ================= VOLUNTEER FORM ================= */
const volForm = document.getElementById("volForm");
if(volForm){
volForm.addEventListener("submit",(e)=>{
e.preventDefault();
document.getElementById("formMsg").innerText="Application Submitted!";
});
}

/* ================= NAV ACTIVE ================= */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".main-nav a");

window.addEventListener("scroll", () => {
let current = "";


sections.forEach(section => {
  const sectionTop = section.offsetTop;
  const sectionHeight = section.clientHeight;

  if (
    pageYOffset >= sectionTop - 150 &&
    pageYOffset < sectionTop + sectionHeight
  ) {
    current = section.getAttribute("id");
  }
});

navLinks.forEach(link => {
  link.classList.remove("active");
  if (link.getAttribute("href") === "#" + current) {
    link.classList.add("active");
  }
});


});

/* ================= ITEM SELECT ================= */
const itemSelect = document.getElementById("itemSelect");
const itemNameBox = document.getElementById("itemNameBox");

if(itemSelect){
itemSelect.addEventListener("change", function(){
if(this.value === "Other"){
itemNameBox.style.display = "block";
} else {
itemNameBox.style.display = "none";
}
});
}

});

/* ================= OUTSIDE FUNCTIONS ================= */
function toggleMode(){
document.body.classList.toggle("dark");
}

function toggleMenu(){
document.querySelector(".main-nav").classList.toggle("show");
}

window.onload = function(){
window.scrollTo(0,0);
}
function toggleProfileMenu(){
  const menu = document.getElementById("profileMenu");
  menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

function openLogin(){
  document.getElementById("student-login").classList.remove("hidden");
  window.scrollTo({
    top: document.getElementById("student-login").offsetTop,
    behavior: "smooth"
  });
}
// MEDIA TOGGLE
const mediaSection = document.getElementById("media");

document.querySelector('a[href="#media"]').addEventListener("click", function(e){
  e.preventDefault();

  mediaSection.classList.remove("hidden");

  window.scrollTo({
    top: mediaSection.offsetTop,
    behavior: "smooth"
  });
});
const images = ["foodtime.jpg", "studytime.jpg", "founder-desk.jpg"];
let index = 0;

function showImage(){
  document.getElementById("sliderImage").src = images[index];
}

function nextSlide(){
  index = (index + 1) % images.length;
  showImage();
}

function prevSlide(){
  index = (index - 1 + images.length) % images.length;
  showImage();
}
document.getElementById("sliderImage").addEventListener("click", function(){
  nextSlide();
});
function payNow() {

  fetch("https://jeevan-ankur-trust-website-building.onrender.com/create-order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ amount: 500 }) // ₹500 fixed for now
  })
  .then(res => res.json())
  .then(order => {

    const options = {
      key: "rzp_test_xxxxx",  // 🔥 change this
      amount: order.amount,
      currency: "INR",
      name: "Jeevan Ankur Trust",
      description: "Donation",
      order_id: order.id,

      handler: function (response) {
        alert("Payment Successful ✅");
        console.log(response);
      },

      theme: {
        color: "#f58529"
      }
    };

    const rzp = new Razorpay(options);
    rzp.open();
  })
  .catch(err => {
    console.log(err);
    alert("Payment Failed ❌");
  });
}
/*function loadOtherDonations() {
  fetch("http://localhost:5000/other-donations")
    .then(res => res.json())
    .then(data => {
      console.log("Other Donations:", data);

      const container = document.getElementById("otherList");

      if (!container) return;

      container.innerHTML = "";

      data.forEach(d => {
        const div = document.createElement("div");
        div.classList.add("student-card");

        div.innerHTML = `
          <h4>${d.item} (${d.quantity})</h4>
          <p>Item Name: ${d.itemName || "-"}</p>
          <p>Donor: ${d.name}</p>
          <p>Phone: ${d.phone}</p>
        `;

        container.appendChild(div);
      });

      });*/
function showForgot() {
    document.getElementById("forgotBox").style.display = "block";
}

function sendReset() {
    const email = document.getElementById("forgotEmail").value;

    fetch("https://jeevan-ankur-trust-website-building.onrender.com/forgot-password", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })
    })
    .then(res => res.json())
    .then(data => {
        alert(data.message);
    });
}