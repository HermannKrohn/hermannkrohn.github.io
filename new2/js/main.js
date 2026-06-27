// ============================================
// Data from original site
// ============================================

const educationData = [
  {
    title: "Queen's University",
    subtitle: "Computer Engineering - Entrepreneurship and Innovation Stream",
    date: "September 2017 - April 2022",
    description: "Completed the computer engineering program at Queen's University. While at Queen's, I was a teacher assistant for introductory courses into C and assembly. I was also a member of QMIND, an AI/ML design team, completed a 16-month internship (QUIP) at Cisco Meraki, and was on Dean's list all years for high academic excellence."
  },
  {
    title: "Flatiron School",
    subtitle: "Software Engineering Bootcamp",
    date: "May 2019 - August 2019",
    description: "Attended a software engineering bootcamp to dive into full stack web development."
  }
];

const workExperienceData = [
  {
    company: "Cisco Meraki",
    title: "Software Engineer",
    date: "July 2022 - Present",
    items: [
      {
        subheader: "Hardware Telemetry Project",
        bullets: [
          "Developed Scala grabbers and firmware handlers, enabling seamless collection and integration of telemetry data from over 6.5 million devices across the fleet into Snowflake to enhance data availability, analytics, visibility in sustaining products to better design future products, and predict device failure.",
          "Telemetry metrics include power consumption, memory utilization, component temperature data, fan health etc."
        ]
      },
      {
        subheader: "System-on-Chip Evaluation for next generation MVs (Cameras)",
        bullets: [
          "Evaluated the SoC's suitability, performance, and compatibility, considering factors such as image processing capabilities, power efficiency, and real-time performance.",
          "Facilitated Meraki in making informed decisions regarding the SoC for the next generation cameras.",
          "Ported over Yocto recipes for the build system and integrated the vendor SDK into Meraki's code base."
        ]
      }
    ]
  },
  {
    company: "BetRewards",
    title: "Co-Founder, CTO",
    date: "December 2019 - November 2023",
    items: [
      {
        subheader: "Platform and Application Development",
        bullets: [
          "Acquired by VipBets.",
          "Assisted in the design and software architecture of betreward(.ca/.us), a platform that gives users cashback rewards on bets and purchases from the listed partners.",
          "Involved in the architecture of the service and implementation of the entire product including the admin panel, the blog site, the content management system, the API, the database architecture, and the platform's front-end and user experience.",
          "Implemented several web security features such as JSON Web Tokens (JWT), and implemented measures against cross-site scripting, Cross Site Request Forgery (CSRF), and database injections."
        ]
      }
    ]
  },
  {
    company: "Cisco Meraki",
    title: "Software Engineer Intern",
    date: "May 2020 - August 2021",
    items: [
      {
        subheader: "Firmware Development for the MX and MT Product Lines",
        bullets: [
          "Assisted in board bring-up, developed the fan control algorithm, and implemented drivers for an IoT air quality sensor.",
          "Incorporated PSU support to accurately relay the PSU status to dashboard."
        ]
      }
    ]
  },
  {
    company: "QMIND, Queen's University Design Team",
    title: "ML Engineer",
    date: "September 2019 - April 2020",
    items: [
      {
        subheader: "Model Development",
        bullets: [
          "The RBC AI Trading Team with QMIND (AI design team) worked on a Machine Learning project in Capital Markets. My team implemented UMAP compression and developed an autoencoder to help compress time series stock market data."
        ]
      }
    ]
  }
];

const projectsData = [
  {
    title: "Smart IoT Pantry",
    text: "Developed an IoT Pantry to keep track of items. All items were tagged with RFID tags and there were two RFID scanners, one in the pantry and one by the garbage bin. When an item was inserted into the pantry, the pantry scanner would add the item to a database if the item was not already stored. And when the item or its packaging was discarded, the RFID scanner by the garbage bin would remove it from the database. A web application was then built to view items in the pantry while on the go. Check out a video demo <a class='link' href='https://www.youtube.com/watch?v=CY0KQ3sL9Nw' target='_blank' rel='noopener noreferrer'>here</a>."
  },
  {
    title: "Alzheimer's Wrist Band",
    text: "Prototyped a wristband to track the location of Alzheimer's patients. The application would track the geo-location of patients and alert responsible personnel when a patient would leave the predefined perimeter."
  },
  {
    title: "Library Seat Availability Tracker",
    text: "Designed an application to keep track of available seats at the library. Each seat contained an ultra-sound sensor which could measure the distance to objects in front of it. In this case, the sensor underneath the seat would detect the legs of the person seating on the seat and notify a server that the seat is occupied. A web application with a seat map would then be updated."
  }
];

// ============================================
// Utility Functions
// ============================================

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// ============================================
// Particle Animation
// ============================================

function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const particleCount = 50;

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 1;
      this.speedX = Math.random() * 0.5 - 0.25;
      this.speedY = Math.random() * 0.5 - 0.25;
      this.opacity = Math.random() * 0.5 + 0.2;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      if (this.x > canvas.width) this.x = 0;
      if (this.x < 0) this.x = canvas.width;
      if (this.y > canvas.height) this.y = 0;
      if (this.y < 0) this.y = canvas.height;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(99, 102, 241, ${this.opacity})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(particle => {
      particle.update();
      particle.draw();
    });

    // Draw connections
    particles.forEach((particle, i) => {
      particles.slice(i + 1).forEach(otherParticle => {
        const dx = particle.x - otherParticle.x;
        const dy = particle.y - otherParticle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(99, 102, 241, ${0.2 * (1 - distance / 150)})`;
          ctx.lineWidth = 1;
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(otherParticle.x, otherParticle.y);
          ctx.stroke();
        }
      });
    });

    requestAnimationFrame(animate);
  }

  animate();

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}

// ============================================
// Navigation
// ============================================

function initNavigation() {
  const nav = document.getElementById('nav');
  const navLinks = document.querySelectorAll('.nav-link');
  const navToggle = document.getElementById('nav-toggle');
  const navLinksContainer = document.getElementById('nav-links');

  // Scroll effect
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }

    // Update active nav link
    const sections = document.querySelectorAll('.section, #hero');
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (currentScroll >= sectionTop && currentScroll < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });

    lastScroll = currentScroll;
  });

  // Mobile menu toggle
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navLinksContainer.classList.toggle('active');
      navToggle.classList.toggle('active');
    });
  }

  // Close mobile menu when clicking a link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinksContainer.classList.remove('active');
      navToggle.classList.remove('active');
    });
  });
}

// ============================================
// Smooth Scrolling
// ============================================

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        const offsetTop = target.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
}

// ============================================
// Scroll to Top Button
// ============================================

function initScrollToTop() {
  const scrollTopBtn = document.getElementById('scroll-top');
  if (!scrollTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// ============================================
// Experience Tabs
// ============================================

function renderExperience() {
  const tabsContainer = document.getElementById('experience-tabs');
  const contentContainer = document.getElementById('experience-content');
  
  if (!tabsContainer || !contentContainer) return;

  // Create tabs
  let tabsHTML = '';
  let contentHTML = '';

  workExperienceData.forEach((experience, index) => {
    const isActive = index === 0;
    
    // Tab button
    tabsHTML += `
      <button class="experience-tab ${isActive ? 'active' : ''}" data-index="${index}">
        ${experience.company}
      </button>
    `;

    // Content panel
    const itemsHTML = experience.items.map(item => {
      const bulletsHTML = item.bullets.map(bullet => 
        `<li>${escapeHtml(bullet)}</li>`
      ).join('');
      
      return `
        <div class="experience-item">
          <div class="experience-item-title">${escapeHtml(item.subheader)}</div>
          <ul class="experience-bullets">
            ${bulletsHTML}
          </ul>
        </div>
      `;
    }).join('');

    contentHTML += `
      <div class="experience-panel ${isActive ? 'active' : ''}">
        <div class="experience-title">${escapeHtml(experience.title)}</div>
        <div class="experience-company">${escapeHtml(experience.company)}</div>
        <div class="experience-date">${escapeHtml(experience.date)}</div>
        <div class="experience-description">
          ${itemsHTML}
        </div>
      </div>
    `;
  });

  tabsContainer.innerHTML = tabsHTML;
  contentContainer.innerHTML = contentHTML;

  // Add event listeners to tabs
  const tabs = tabsContainer.querySelectorAll('.experience-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const index = parseInt(tab.getAttribute('data-index'));
      
      // Update active states
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      const panels = contentContainer.querySelectorAll('.experience-panel');
      panels.forEach((panel, i) => {
        panel.classList.toggle('active', i === index);
      });
    });
  });
}

// ============================================
// Education
// ============================================

function renderEducation() {
  const container = document.getElementById('education-grid');
  if (!container) return;

  const html = educationData.map(item => `
    <div class="education-card">
      <div class="education-title">${escapeHtml(item.title)}</div>
      <div class="education-subtitle">${escapeHtml(item.subtitle)}</div>
      <div class="education-date">${escapeHtml(item.date)}</div>
      <div class="education-description">${escapeHtml(item.description)}</div>
    </div>
  `).join('');

  container.innerHTML = html;
}

// ============================================
// Projects
// ============================================

function renderProjects() {
  const container = document.getElementById('projects-grid');
  if (!container) return;

  const html = projectsData.map(item => `
    <div class="project-card">
      <div class="project-title">${escapeHtml(item.title)}</div>
      <div class="project-text">${item.text}</div>
    </div>
  `).join('');

  container.innerHTML = html;
}

// ============================================
// Set Current Year
// ============================================

function setCurrentYear() {
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

// ============================================
// Intersection Observer for Animations
// ============================================

function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe all sections
  document.querySelectorAll('.section, .hero').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
  });
}

// ============================================
// Initialize Everything
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  initParticles();
  initNavigation();
  initSmoothScroll();
  initScrollToTop();
  renderExperience();
  renderEducation();
  renderProjects();
  setCurrentYear();
  initScrollAnimations();
  
  // Initial hero animation
  const hero = document.getElementById('hero');
  if (hero) {
    setTimeout(() => {
      hero.style.opacity = '1';
      hero.style.transform = 'translateY(0)';
    }, 100);
  }
});



