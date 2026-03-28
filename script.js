document.addEventListener("DOMContentLoaded", function(){

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
    return name.split(" ").slice(-1)[0];
  }

  const loginForm = document.getElementById("loginForm");
  const msg = document.getElementById("loginMsg");
  const section = document.getElementById("students");
  const grid = document.getElementById("studentsGrid");

  if(loginForm){
    loginForm.addEventListener("submit",(e)=>{
      e.preventDefault();

      msg.innerText="Login Successful";
      section.classList.remove("hidden");

      students.sort((a,b)=>{
        return getSurname(a.name).localeCompare(getSurname(b.name));
      });

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
    });
  }

  /* Volunteer Form */
  const volForm = document.getElementById("volForm");
  if(volForm){
    volForm.addEventListener("submit",(e)=>{
      e.preventDefault();
      document.getElementById("formMsg").innerText="Application Submitted!";
    });
  }

  /* NAV ACTIVE */
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

  /* ITEM SELECT (MAIN FEATURE 🔥) */
  const itemSelect = document.getElementById("itemSelect");
  const itemNameBox = document.getElementById("itemNameBox");

  if(itemSelect){
    itemSelect.addEventListener("change", function(){

      console.log("Selected:", this.value);

      if(this.value === "Other"){
        itemNameBox.style.display = "block";
      } else {
        itemNameBox.style.display = "none";
      }

    });
  }

});

/* OUTSIDE (OK) */
function toggleMode(){
  document.body.classList.toggle("dark");
}

function toggleMenu(){
  document.querySelector(".main-nav").classList.toggle("show");
}
window.onload = function(){
  window.scrollTo(0,0);
}