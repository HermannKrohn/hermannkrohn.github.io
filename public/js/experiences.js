const education_experiences = [
  {
    title: 'Queen&#39s University',
    subtitle: 'Computer Engineering - Entreprenuership and Innovation Stream',
    date: 'September 2017 - April 2022',
    texts: [
      {
        subheader: null,
        descriptions: [
          'Completed the computer engineering program at Queen&#39s University. While at Queen&#39s, I was a teacher assistant for introductory courses into C and assembly. I was also a member of QMIND, an AI/ML design team, completed a 16-month intership (QUIP) at Cisco Meraki, and was on Dean&#39s list all years for high academic excellence.'
        ]
      }
    ]
  },
  {
    title: 'Flatiron School',
    subtitle: 'Software Engineering Bootcamp',
    date: 'May 2019 - August 2019',
    texts: [
      {
        subheader: null,
        descriptions: [
          'Attended a software engineering bootcamp to dive into full stack web developement.'
        ]
      }
    ]
  }
];

const work_experiences = [
  {
    title: 'Software Engineer',
    subtitle: 'Cisco Meraki',
    date: 'July 2022 - Present',
    texts: [
      {
        subheader: 'Hardware Telemetry Project',
        descriptions: [
          'Developed Scala grabbers and firmware handlers, enabling seamless collection and integration of telemetry data from over 6.5 million devices across the fleet into Snowflake to enhance data availability, analytics, visibility in sustaining products to better design future products, and predict device failure.',
          'Telemetry metrics include power consumption, memory utilization, component temperature data, fan health etc.',
        ]
      },
      {
        subheader: 'System-on-Chip Evaluation for next generation MVs (Cameras)',
        descriptions: [
          'Evaluated the SoC&#39s suitability, performance, and compatibility, considering factors such as image processing capabilities, power efficiency, and real-time performance.',
          'Facilitated Meraki in making informed decisions regarding the SoC for the next generation cameras.',
          'Ported over Yocto recipes for the build system and integrated the vendor SDK into Meraki&#39s code base.'
        ]
      }
    ]
  },
  {
    title: 'Co-Founder, CTO',
    subtitle: 'BetRewards',
    date: 'December 2019 - November 2023',
    texts: [
      {
        subheader: 'Platform and Application Development',
        descriptions: [
          'Acquired by VipBets.',
          'Assisted in the design and software architecture of betreward(.ca/.us), a platform that gives users cashback rewards on bets and purchases from the listed partners.',
          'Involved in the architecture of the service and implementation of the entire product including the admin panel, the blog site, the content management system, the API, the database architecture, and the platform&#39s front-end and user experience.',
          'Implemented several web security features such as JSON Web Tokens (JWT), and implemented measures against cross-site scripting, Cross Site Request Forgery (CSRF), and database injections.'
        ]
      }
    ]
  },
  {
    title: 'Software Engineer Intern',
    subtitle: 'Cisco Meraki',
    date: 'May 2020 - August 2021',
    texts: [
      {
        subheader: 'Firmware Development for the MX and MT Product Lines',
        descriptions: [
          'Assisted in board bring-up, developed the fan control algorithm, and implemented drivers for an IoT air quality sensor.',
          'Incorporated PSU support to accurately relay the PSU status to dashboard.'
        ]
      }
    ]
  },
  {
    title: 'ML Engineer',
    subtitle: 'QMIND, Queen&#39s University Design Team',
    date: 'September 2019 - April 2020',
    texts: [
      {
        subheader: 'Model Development',
        descriptions: [
          'The RBC AI Trading Team with QMIND (AI design team) worked on a Machine Learning project in Capital Markets. My team implemented UMAP compression and developed an autoencoder to help compress time series stock market data.'
        ]
      }
    ]
  }
];

function textTemplate(subheader, descriptions) {
  const descriptionsArray = descriptions.map(description => {
    return subheader === null ? `<p class="experience-text">${description}</p>` : `<li class="experience-text">${description}</li>`;
  });

  return `
    ${subheader === null ? '' : `<p class="experience-text experience-text-subheader">${subheader}</p>`}
    ${subheader === null ? descriptionsArray.join('') : `<ul class="ul-experience-bullet-points">${descriptionsArray.join('')}</ul>`}`;
}


function cardTemplate(experience) {
  const {title, subtitle, date, texts} = experience;
  const experienceTexts = texts.map(text => {
    const {subheader, descriptions} = text;
    return textTemplate(subheader, descriptions);
  });

  return `<div class="card-padding light-text">
            <div class="experience-header flex">
              <div class="experience-title-wrapper">
                <div class="card-title">
                  ${title}
                </div>
                <div class="experience-subtitle">
                  ${subtitle}
                </div>
              </div>
              <div class="experience-date-wrapper">
                <div class="experience-date">
                  ${date}
                </div>
              </div>
            </div>
            ${experienceTexts.join('')}
          </div>`;
}

function createExperienceCards(experiences, elementId) {
  let innerHTML = '';

  experiences.forEach(experience => {
    innerHTML += cardTemplate(experience);
  });


  document.getElementById(elementId).innerHTML = innerHTML;
}

createExperienceCards(education_experiences, 'education-section');
createExperienceCards(work_experiences, 'work-experience-section');
