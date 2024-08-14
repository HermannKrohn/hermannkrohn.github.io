const education_experiences = [
  {
    title: 'Queen&#39s University',
    subtitle: 'Computer Engineering - Entreprenuership and Innovation Stream',
    date: 'September 2017 - 2022',
    texts: ['Completed the computer engineering program at Queen&#39s University. While at Queen&#39s, I was a teacher assistant for introductory courses into C and assembly. I was also a member of QMIND, an AI/ML design team, and I also completed a 16-month intership (QUIP) at Cisco Meraki.']
  },
  {
    title: 'Queen&#39s University',
    subtitle: 'Computer Engineering - Entreprenuership and Innovation Stream',
    date: 'September 2017 - 2022',
    texts: ['Completed the computer engineering program at Queen&#39s University. While at Queen&#39s, I was a teacher assistant for introductory courses into C and assembly. I was also a member of QMIND, an AI/ML design team, and I also completed a 16-month intership (QUIP) at Cisco Meraki.']
  }
];

const work_experiences = [
  {
    title: 'Software Engineer',
    subtitle: 'Cisco Meraki',
    date: 'July 2022 - Present',
    texts: [
      'Assisted in the design and implementation of a project. Designed tables based on requirements and constraits, implemented messages to enable communication between nodes and dashboard, added firmware to handle requests for different hardware components. End to end design involving both firmware changes and back-end implementation.',
      'Assisted in the design and implementation of a project. Designed tables based on requirements and constraits, implemented messages to enable communication between nodes and dashboard, added firmware to handle requests for different hardware components. End to end design involving both firmware changes and back-end implementation.'
    ]
  },
  {
    title: 'Software Engineer',
    subtitle: 'Cisco Meraki',
    date: 'July 2022 - Present',
    texts: [
      '&#x2022 Assisted in the design and implementation of a project. Designed tables based on requirements and constraits, implemented messages to enable communication between nodes and dashboard, added firmware to handle requests for different hardware components. End to end design involving both firmware changes and back-end implementation.',
      '&#x2022 Assisted in the design and implementation of a project. Designed tables based on requirements and constraits, implemented messages to enable communication between nodes and dashboard, added firmware to handle requests for different hardware components. End to end design involving both firmware changes and back-end implementation.'
    ]
  }
];

function cardTemplate(experience) {
  const {title, subtitle, date, texts} = experience;
  const experienceTexts = texts.map(text => `<p class="experience-text">${text}</p>`);

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
