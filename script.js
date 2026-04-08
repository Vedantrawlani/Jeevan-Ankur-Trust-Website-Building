document.addEventListener("DOMContentLoaded", function(){

/* ================= DONATION FORM ================= */
const otherForm = document.getElementById("otherForm");


otherForm.addEventListener("submit", function(e){
  e.preventDefault();

  const item = document.getElementById("itemSelect").value;
  const itemName = document.querySelector('#itemNameBox input')?.value || "";
  const quantity = document.querySelector('input[type="number"]').value;
  const name = document.querySelector('input[placeholder="Donor Name"]').value;
  const phone = document.querySelector('input[placeholder="Contact Number"]').value;

  fetch("http://localhost:5000/donate", {
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

if(loginForm){
loginForm.addEventListener("submit",(e)=>{
e.preventDefault();

console.log("LOGIN CLICKED");
  msg.innerText="Login Successful";
  section.classList.remove("hidden");

  loadStudents(); // 🔥 backend call
});


}

/* ================= LOAD STUDENTS ================= */
function loadStudents() {
fetch("http://localhost:5000/students")
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
