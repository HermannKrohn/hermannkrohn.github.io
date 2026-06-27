// Data from the original site
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
    title: "Software Engineer",
    subtitle: "Cisco Meraki",
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
    title: "Co-Founder, CTO",
    subtitle: "BetRewards",
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
    title: "Software Engineer Intern",
    subtitle: "Cisco Meraki",
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
    title: "ML Engineer",
    subtitle: "QMIND, Queen's University Design Team",
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

// Utility function to escape HTML
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// Render Education
function renderEducation() {
  const container = document.getElementById('education-list');
  if (!container) return;

  const html = educationData.map(item => `
    <div class="education-item">
      <div class="education-header">
        <div>
          <div class="education-title">${escapeHtml(item.title)}</div>
          <div class="education-subtitle">${escapeHtml(item.subtitle)}</div>
        </div>
        <div class="education-date">${escapeHtml(item.date)}</div>
      </div>
      <div class="education-description">${escapeHtml(item.description)}</div>
    </div>
  `).join('');

  container.innerHTML = html;
}

// Render Work Experience
function renderExperience() {
  const container = document.getElementById('experience-timeline');
  if (!container) return;

  const html = workExperienceData.map(item => {
    const itemsHtml = item.items.map(subItem => {
      const bulletsHtml = subItem.bullets.map(bullet => 
        `<li>${escapeHtml(bullet)}</li>`
      ).join('');
      
      return `
        <div style="margin-bottom: 1rem;">
          <div style="font-weight: 600; color: var(--color-text); margin-bottom: 0.5rem;">
            ${escapeHtml(subItem.subheader)}
          </div>
          <ul class="experience-bullets">
            ${bulletsHtml}
          </ul>
        </div>
      `;
    }).join('');

    return `
      <div class="experience-item">
        <div class="experience-header">
          <div>
            <div class="experience-title">${escapeHtml(item.title)}</div>
            <div class="experience-subtitle">${escapeHtml(item.subtitle)}</div>
          </div>
          <div class="experience-date">${escapeHtml(item.date)}</div>
        </div>
        <div class="experience-description">
          ${itemsHtml}
        </div>
      </div>
    `;
  }).join('');

  container.innerHTML = html;
}

// Render Projects
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

// Set current year in footer
function setCurrentYear() {
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

// Smooth scroll for navigation links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const offsetTop = target.offsetTop - 80; // Account for fixed nav
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Add scroll effect to navigation
function initNavScroll() {
  const nav = document.querySelector('.nav');
  if (!nav) return;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
      nav.style.boxShadow = 'none';
    } else {
      nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
  });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  renderEducation();
  renderExperience();
  renderProjects();
  setCurrentYear();
  initSmoothScroll();
  initNavScroll();
});

