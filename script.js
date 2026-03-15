/* script.js
   Full JavaScript for Jeevan Ankur Trust frontend
   - Handles volunteer form (local demo + optional Google Form integration)
   - Smooth scrolling for internal links
   - Lightbox for images (foodtime.jpg, "study time.jpg", founder-desk.jpg)
   - Dynamic student card addition from JSON (client-side)
   - Accessibility helpers (keyboard)
   - Login system for student records
*/

/* ---------- Configuration ---------- */
const FORM_ACTION = '#';

/* Student data (simplified from Excel: Name, Age, Std) */
const STUDENTS = [
  { name: "Radhika Chourasiya", age: 12, cls: "4th" },
  { name: "Sudha Kumari Viru Sha", age: 9, cls: "3rd" },
  { name: "Naseema Akhtar Shaikh", age: 9, cls: "2nd" },
  { name: "Anshika Sunil Kumar Chourasiya", age: 8, cls: "3rd" },
  { name: "Sakshi Dhrup Prakash Chourasiya", age: 11, cls: "4th" },
  { name: "Sana Shaikh", age: 10, cls: "4th" },
  { name: "Fathima Sakeel Pathan", age: 12, cls: "6th" },
  { name: "Mansi Vijay Yadav", age: 9, cls: "4th" },
  { name: "Shraddha Vinod Ram", age: 10, cls: "4th" },
  { name: "Krishna Kumar Promod Ram", age: 10, cls: "5th" },
  { name: "Sachin Rathore", age: 12, cls: "5th" },
  { name: "Devika Vijay Yadav", age: 12, cls: "7th" },
  { name: "Jyoti Viru Shah", age: 12, cls: "7th" },
  { name: "Rithika Vijay Yadav", age: 14, cls: "8th" },
  { name: "Babli Kumari Viru Shah", age: 13, cls: "9th" }
  // … add more students from Excel if needed
];

/* ---------- DOM Utilities ---------- */
function qs(sel, ctx = document) { return ctx.querySelector(sel); }
function qsa(sel, ctx = document) { return Array.from(ctx.querySelectorAll(sel)); }

/* ---------- Volunteer Form Handling ---------- */
document.addEventListener('DOMContentLoaded', () => {
  const volForm = qs('#volForm');
  const formMsg = qs('#formMsg');

  if (volForm) {
    volForm.action = FORM_ACTION;
    volForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const fd = new FormData(volForm);
      const payload = {};
      fd.forEach((v, k) => payload[k] = v);

      formMsg.textContent = `Thank you ${payload.name || ''}. Your application has been recorded locally.`;
      formMsg.style.display = 'block';

      setTimeout(() => {
        volForm.reset();
        formMsg.style.display = 'none';
      }, 4500);
    });
  }

  /* ---------- Smooth scroll for internal links ---------- */
  qsa('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (ev) => {
      const href = link.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        ev.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
      }
    });
  });

  /* ---------- Login Handling ---------- */
  const loginForm = qs('#loginForm');
  const loginMsg = qs('#loginMsg');
  const studentsSection = qs('#students');
  const studentsGrid = qs('#studentsGrid');

  const DEMO_USER = { username: "admin@ngo.com", mobile: "9833761939", password: "12345" };

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = qs('#username').value.trim();
      const password = qs('#password').value.trim();

      if ((username === DEMO_USER.username || username === DEMO_USER.mobile) && password === DEMO_USER.password) {
        loginMsg.textContent = "Login successful!";
        studentsSection.classList.remove('hidden');
        showStudents(studentsGrid);
      } else {
        loginMsg.textContent = "Invalid login credentials.";
      }
    });
  }

  /* ---------- Lightbox for images ---------- */
  initLightbox();

  /* ---------- Keyboard accessibility for clickable cards ---------- */
  qsa('.student-card').forEach(card => {
    card.setAttribute('tabindex', '0');
    card.addEventListener('keydown', (ev) => {
      if (ev.key === 'Enter' || ev.key === ' ') {
        ev.preventDefault();
        card.click();
      }
    });
  });
});

/* ---------- Helper: show student cards ---------- */
function showStudents(container) {
  container.innerHTML = "";
  STUDENTS.forEach(s => {
    const card = document.createElement('article');
    card.className = 'student-card';
    card.innerHTML = `
      <h4>${escapeHtml(s.name)}</h4>
      <p class="small"><strong>Age:</strong> ${escapeHtml(String(s.age))} &nbsp; <strong>Class:</strong> ${escapeHtml(s.cls)}</p>
    `;
    container.appendChild(card);
  });
}

/* ---------- Lightbox Implementation ---------- */
function initLightbox() {
  const lb = document.createElement('div');
  lb.className = 'lightbox';
  lb.innerHTML = `
    <div class="lb-inner" role="dialog" aria-modal="true" aria-label="Image preview">
      <img src="" alt="" />
      <div class="caption"></div>
    </div>
  `;
  document.body.appendChild(lb);

  const lbImg = lb.querySelector('img');
  const lbCaption = lb.querySelector('.caption');

  const selectors = ['.hero-img', '.founder-img'];
  qsa(selectors.join(',')).forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => openLightbox(img));
    img.setAttribute('tabindex', '0');
    img.addEventListener('keydown', (ev) => {
      if (ev.key === 'Enter' || ev.key === ' ') {
        ev.preventDefault();
        openLightbox(img);
      }
    });
  });

  lb.addEventListener('click', (ev) => {
    if (ev.target === lb) closeLightbox();
  });
  document.addEventListener('keydown', (ev) => {
    if (ev.key === 'Escape') closeLightbox();
  });

  function openLightbox(imgEl) {
    lbImg.src = imgEl.src;
    lbImg.alt = imgEl.alt || '';
    lbCaption.textContent = imgEl.closest('figure')?.querySelector('figcaption')?.textContent || '';
    lb.classList.add('open');
    lb.setAttribute('tabindex', '-1');
    lb.focus();
  }
  function closeLightbox() {
    lb.classList.remove('open');
    lbImg.src = '';
    lbCaption.textContent = '';
  }
}

/* ---------- Utility: escape HTML ---------- */
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
