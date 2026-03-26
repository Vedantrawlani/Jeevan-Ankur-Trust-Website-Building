const students = [
  {name:"Anshika Chourasiya", age:8, class:"3rd", gender:"Female"},
  {name:"Sana Shaikh", age:10, class:"4th", gender:"Female"},
  {name:"Radhika Chourasiya", age:12, class:"4th", gender:"Female"},
  {name:"Krishna Ram", age:10, class:"5th", gender:"Male"},
  {name:"Sachin Rathore", age:12, class:"5th", gender:"Male"},
  {name:"Devika Yadav", age:12, class:"7th", gender:"Female"},
  {name:"Rithika Yadav", age:14, class:"8th", gender:"Female"}
];

function getSurname(name){
  return name.split(" ").slice(-1)[0]; // last word
}

const loginForm = document.getElementById("loginForm");
const msg = document.getElementById("loginMsg");
const section = document.getElementById("students");
const grid = document.getElementById("studentsGrid");

loginForm.addEventListener("submit",(e)=>{
  e.preventDefault();

  msg.innerText="Login Successful";
  section.classList.remove("hidden");

  // SORT BY SURNAME
  students.sort((a,b)=>{
    return getSurname(a.name).localeCompare(getSurname(b.name));
  });

  // SEPARATE MALE & FEMALE
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
      <h3> Female Students</h3>
      ${females.map(s => `
        <div class="student-card">
          <h4>${s.name}</h4>
          <p>Age: ${s.age}</p>
          <p>Class: ${s.class}</p>
        </div>
      `).join("")}
    </div>
  `;
});



/* Volunteer Form */
document.getElementById("volForm").addEventListener("submit",(e)=>{
  e.preventDefault();
  document.getElementById("formMsg").innerText="Application Submitted!";
});


window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
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
window.addEventListener("load", () => {
  document.getElementById("loader").classList.add("hidden");
});
//LOADER NOT IMP IN CSS AND IN JS
function toggleMode(){
  document.body.classList.toggle("dark");
}
window.addEventListener("scroll", ()=>{
  document.querySelectorAll(".fade").forEach(el=>{
    const top = el.getBoundingClientRect().top;
    if(top < window.innerHeight - 50){
      el.classList.add("show");
    }
  });
});