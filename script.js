/* script.js
   Full JavaScript for Jeevan Ankur Trust frontend
   - Handles volunteer form (local demo + optional Google Form integration)
   - Smooth scrolling for internal links
   - Lightbox for images (foodtime.jpg, "study time.jpg", founder-desk.jpg)
   - Dynamic student card addition from JSON (client-side)
   - Accessibility helpers (keyboard)
*/

/* ---------- Configuration ---------- */
/* If you later want to POST to Google Forms or a backend, set FORM_ACTION to that URL.
   For now it remains '#' to demonstrate local handling. */
const FORM_ACTION = '#';

/* Sample JSON for students (you can replace or fetch from a file later) */
const SAMPLE_STUDENTS = [
  { name: 'Asha', age: 10, cls: '4th', notes: 'Regular attendee' },
  { name: 'Rohit', age: 12, cls: '6th', notes: 'Needs remedial math' },
  { name: 'Meera', age: 9, cls: '3rd', notes: 'Excellent in arts' }
];

/* ---------- DOM Utilities ---------- */
function qs(sel, ctx = document) { return ctx.querySelector(sel); }
function qsa(sel, ctx = document) { return Array.from(ctx.querySelectorAll(sel)); }

/* ---------- Volunteer Form Handling ---------- */
document.addEventListener('DOMContentLoaded', () => {
  const volForm = qs('#volForm');
  const formMsg = qs('#formMsg');

  if (volForm) {
    // If you want to submit to a real endpoint, set volForm.action = FORM_ACTION;
    volForm.action = FORM_ACTION;

    volForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Collect form data
      const fd = new FormData(volForm);
      const payload = {};
      fd.forEach((v, k) => payload[k] = v);

      // Local demo: show confirmation and clear
      formMsg.textContent = `Thank you ${payload.name || ''}. Your application has been recorded locally.`;
      formMsg.style.display = 'block';

      // Optionally: send to backend using fetch when FORM_ACTION is set
      if (FORM_ACTION && FORM_ACTION !== '#') {
        // Example:
        // fetch(FORM_ACTION, { method: 'POST', body: fd })
        //   .then(r => { /* handle response */ })
        //   .catch(err => { /* handle error */ });
      }

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
        // update focus for accessibility
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
      }
    });
  });

  /* ---------- Populate students grid from SAMPLE_STUDENTS ---------- */
  const studentsGrid = qs('.students-grid');
  if (studentsGrid) {
    // Append sample students (keeps any placeholder cards)
    SAMPLE_STUDENTS.forEach(s => addStudentCard(s, studentsGrid));
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

/* ---------- Helper: add student card to grid ---------- */
function addStudentCard(student, container) {
  const card = document.createElement('article');
  card.className = 'student-card';
  card.innerHTML = `
    <h4>${escapeHtml(student.name)}</h4>
    <p class="small"><strong>Age:</strong> ${escapeHtml(String(student.age))} &nbsp; <strong>Class:</strong> ${escapeHtml(student.cls)}</p>
    <p class="small">${escapeHtml(student.notes || '')}</p>
  `;
  // Optional: click to open details modal or edit later
  card.addEventListener('click', () => {
    alert(`${student.name}\nAge: ${student.age}\nClass: ${student.cls}\nNotes: ${student.notes}`);
  });
  container.appendChild(card);
}

/* ---------- Lightbox Implementation ---------- */
function initLightbox() {
  // Create lightbox element
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

  // Images that should open lightbox: select by class names used in HTML
  const selectors = ['.hero-img', '.founder-img'];
  qsa(selectors.join(',')).forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => {
      openLightbox(img);
    });
    // keyboard support
    img.setAttribute('tabindex', '0');
    img.addEventListener('keydown', (ev) => {
      if (ev.key === 'Enter' || ev.key === ' ') {
        ev.preventDefault();
        openLightbox(img);
      }
    });
  });

  // Close on click outside or Esc
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

/* ---------- Utility: escape HTML to avoid injection ---------- */
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
