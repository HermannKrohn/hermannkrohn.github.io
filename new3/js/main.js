/* ============================================================
   Hermann Krohn — Portfolio  (new3)  ·  main.js
   ============================================================ */

/* ---------- Content data ---------- */
const education = [
  {
    title: "Queen's University",
    sub: 'B.A.Sc. Computer Engineering — Entrepreneurship & Innovation Stream',
    date: 'Sep 2017 – Apr 2022',
    body: "Completed the Computer Engineering program. Teaching assistant for intro C & assembly courses, member of QMIND (AI/ML design team), completed a 16-month internship (QUIP) at Cisco Meraki, and made the Dean's List every year for academic excellence."
  },
  {
    title: 'Flatiron School',
    sub: 'Software Engineering Bootcamp',
    date: 'May 2019 – Aug 2019',
    body: 'An immersive software engineering bootcamp diving deep into full-stack web development.'
  }
];

const experience = [
  {
    role: 'Software Engineer',
    company: 'Cisco Meraki',
    date: 'Jul 2022 – Present',
    blocks: [
      { sub: 'Hardware Telemetry Project', points: [
        'Built Scala grabbers and firmware handlers that collect and integrate telemetry from 6.5M+ devices across the fleet into Snowflake — improving analytics, sustaining visibility, and device-failure prediction.',
        'Metrics include power consumption, memory utilization, component temperature, fan health, and more.'
      ]},
      { sub: 'System-on-Chip Evaluation — next-gen MV cameras', points: [
        "Evaluated an SoC's image-processing capability, power efficiency, and real-time performance.",
        'Helped Meraki make an informed SoC decision for the next camera generation.',
        "Ported Yocto recipes into the build system and integrated the vendor SDK into Meraki's codebase."
      ]}
    ]
  },
  {
    role: 'Co-Founder & CTO',
    company: 'BetRewards',
    date: 'Dec 2019 – Nov 2023',
    blocks: [
      { sub: 'Platform & Application Development (acquired by VipBets)', points: [
        'Led design and software architecture of betreward(.ca/.us) — a cashback rewards platform for bets and purchases from partner brands.',
        'Architected and implemented the full product: admin panel, blog, CMS, API, database, and the user-facing front-end & UX.',
        'Implemented web security: JWT auth and protections against XSS, CSRF, and database injection.'
      ]}
    ]
  },
  {
    role: 'Software Engineer Intern',
    company: 'Cisco Meraki',
    date: 'May 2020 – Aug 2021',
    blocks: [
      { sub: 'Firmware — MX & MT product lines', points: [
        'Assisted in board bring-up, developed the fan-control algorithm, and wrote drivers for an IoT air-quality sensor.',
        'Added PSU support to accurately relay PSU status to the dashboard.'
      ]}
    ]
  },
  {
    role: 'ML Engineer',
    company: "QMIND — Queen's University Design Team",
    date: 'Sep 2019 – Apr 2020',
    blocks: [
      { sub: 'Model Development — RBC AI Trading Team', points: [
        'Worked on an ML project in capital markets: implemented UMAP compression and built an autoencoder to compress time-series stock-market data.'
      ]}
    ]
  }
];

const projects = [
  {
    title: 'Smart IoT Pantry',
    icon: 'box',
    body: 'An IoT pantry that tracks items via RFID. Two scanners — one in the pantry, one by the trash — automatically add and remove items from a database as they\'re stored or discarded. A companion web app lets you check your pantry on the go. <a class="link" target="_blank" rel="noopener" href="https://www.youtube.com/watch?v=CY0KQ3sL9Nw">Watch the demo →</a>'
  },
  {
    title: "Alzheimer's Wristband",
    icon: 'watch',
    body: "A wristband prototype that tracks the geo-location of Alzheimer's patients and alerts responsible personnel the moment a patient leaves a predefined safe perimeter."
  },
  {
    title: 'Library Seat Tracker',
    icon: 'seat',
    body: 'A live seat-availability system for the library. Ultrasonic sensors under each seat detect occupancy and report to a server, updating an interactive seat-map web app in real time.'
  }
];

const icons = {
  box: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 8v8a2 2 0 0 1-1 1.7l-7 4a2 2 0 0 1-2 0l-7-4A2 2 0 0 1 3 16V8a2 2 0 0 1 1-1.7l7-4a2 2 0 0 1 2 0l7 4A2 2 0 0 1 21 8z"/><polyline points="3.3,7 12,12 20.7,7"/><line x1="12" y1="22" x2="12" y2="12"/></svg>',
  watch: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="6"/><polyline points="12,10 12,12 13.5,13.5"/><path d="M9 4.5 9.5 2h5l.5 2.5M9 19.5 9.5 22h5l.5-2.5"/></svg>',
  seat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 4v8a2 2 0 0 0 2 2h7"/><path d="M19 21v-5a2 2 0 0 0-2-2H7"/><path d="M5 14v7M19 11V8"/></svg>'
};

/* ---------- Render ---------- */
function renderEducation() {
  document.getElementById('education-grid').innerHTML = education.map(e => `
    <article class="card">
      <h3 class="card-title">${e.title}</h3>
      <p class="card-sub">${e.sub}</p>
      <p class="card-date">${e.date}</p>
      <div class="card-body"><p>${e.body}</p></div>
    </article>`).join('');
}

function renderExperience() {
  document.getElementById('experience-timeline').innerHTML = experience.map(x => `
    <div class="tl-item">
      <span class="tl-dot"></span>
      <div class="tl-head">
        <span class="tl-role">${x.role}</span>
        <span class="tl-company">· ${x.company}</span>
      </div>
      <p class="tl-date">${x.date}</p>
      ${x.blocks.map(b => `
        <div class="tl-block">
          ${b.sub ? `<p class="tl-sub">${b.sub}</p>` : ''}
          <ul>${b.points.map(p => `<li>${p}</li>`).join('')}</ul>
        </div>`).join('')}
    </div>`).join('');
}

function renderProjects() {
  document.getElementById('projects-grid').innerHTML = projects.map(p => `
    <article class="card">
      <div class="proj-icon">${icons[p.icon] || ''}</div>
      <h3 class="card-title">${p.title}</h3>
      <div class="card-body"><p>${p.body}</p></div>
    </article>`).join('');
}

/* ---------- Tech stack (colored logo images from public/icons) ---------- */
const techs = [
  { name: 'C',          file: 'c' },
  { name: 'C++',        file: 'cplusplus' },
  { name: 'Scala',      file: 'scala' },
  { name: 'Python',     file: 'python' },
  { name: 'JavaScript', file: 'javascript' },
  { name: 'TypeScript', file: 'typescript' },
  { name: 'React',      file: 'react' },
  { name: 'Node.js',    file: 'nodejs' },
  { name: 'Snowflake',  file: 'snowflake' },
  { name: 'Git',           file: 'git' },
  { name: 'AWS',           file: 'aws' },
  { name: 'Docker',        file: 'docker' },
  { name: 'Kubernetes',    file: 'kubernetes' },
  { name: 'Grafana',       file: 'grafana' },
  { name: 'Elasticsearch', file: 'elasticsearch' },
  { name: 'Prometheus',    file: 'prometheus' }
];

function renderTechStack() {
  document.getElementById('tech-stack').innerHTML = techs.map(t => `
    <span class="logo-chip" title="${t.name}">
      <img class="logo-img" src="../public/icons/${t.file}.svg" alt="${t.name}" loading="lazy">
    </span>`).join('');
}

renderEducation();
renderExperience();
renderProjects();
renderTechStack();

/* ---------- Year ---------- */
document.getElementById('year').textContent = new Date().getFullYear();

/* ---------- Hero typing effect ---------- */
(function typer() {
  const el = document.getElementById('typer');
  if (!el) return;
  const words = ['firmware to full-stack.', 'backend services', 'secure web platforms.', 'embedded systems.'];
  let w = 0, c = 0, deleting = false;
  function tick() {
    const word = words[w];
    el.textContent = word.slice(0, c);
    if (!deleting && c < word.length) { c++; setTimeout(tick, 70); }
    else if (!deleting && c === word.length) { deleting = true; setTimeout(tick, 1600); }
    else if (deleting && c > 0) { c--; setTimeout(tick, 35); }
    else { deleting = false; w = (w + 1) % words.length; setTimeout(tick, 300); }
  }
  tick();
})();

/* ---------- Reveal on scroll ---------- */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal, .cards-grid, .timeline').forEach(el => revealObserver.observe(el));

/* ---------- Nav: scroll state + mobile toggle ---------- */
const nav = document.getElementById('nav');
const toTop = document.getElementById('to-top');
const progress = document.getElementById('progress-bar');

function onScroll() {
  const y = window.scrollY;
  nav.classList.toggle('scrolled', y > 40);
  toTop.classList.toggle('show', y > 600);
  const h = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');
navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('open');
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  navToggle.classList.remove('open');
  navLinks.classList.remove('open');
}));

/* ============================================================
   Companion character — scene switching on scroll
   ============================================================ */
const companion = document.getElementById('companion');
const bubble = document.getElementById('companion-bubble');
const scenes = document.querySelectorAll('.scene');

const sceneMap = {
  hero:       { scene: 'wave',       say: 'Hey there! 👋' },
  about:      { scene: 'about',      say: 'A bit about me…' },
  education:  { scene: 'education',  say: 'Class of 2022 🎓' },
  experience: { scene: 'experience', say: 'Heads-down, building.' },
  projects:   { scene: 'projects',   say: '> tinkering...' },
  contact:    { scene: 'contact',    say: "Let's talk! ✉️" }
};

let currentScene = null;
let bubbleTimer = null;

function setScene(name) {
  const cfg = sceneMap[name];
  if (!cfg || cfg.scene === currentScene) return;
  currentScene = cfg.scene;

  scenes.forEach(s => s.classList.toggle('active', s.dataset.scene === cfg.scene));

  // hop + speech bubble on each change
  companion.classList.remove('hop');
  void companion.offsetWidth; // restart animation
  companion.classList.add('hop');

  bubble.textContent = cfg.say;
  bubble.classList.add('show');
  clearTimeout(bubbleTimer);
  bubbleTimer = setTimeout(() => bubble.classList.remove('show'), 2600);
}

// Track which section occupies the viewport center
const sections = ['hero', 'about', 'education', 'experience', 'projects', 'contact']
  .map(id => document.getElementById(id))
  .filter(Boolean);

// Deterministic: the active section is the one whose vertical span contains
// the viewport anchor line (55% down the screen). Exactly one match, no flicker.
function updateScene() {
  const anchor = window.scrollY + window.innerHeight * 0.55;
  let active = sections[0];
  for (const s of sections) {
    if (s.offsetTop <= anchor) active = s;   // sections are in document order
    else break;
  }
  setScene(active.id);
}

let sceneTick = false;
window.addEventListener('scroll', () => {
  if (sceneTick) return;
  sceneTick = true;
  requestAnimationFrame(() => { updateScene(); sceneTick = false; });
}, { passive: true });
window.addEventListener('resize', updateScene, { passive: true });

// initialize
updateScene();
