const projects = [
  {
    title: 'Smart IoT Pantry',
    text: 'Developed an IoT smart pantry that allows users to view items in their pantry from anywhere (bit.ly/IoT-Pantry).'
  },
  {
    title: 'Alzheimer&#39s Wrist Band',
    text: 'Helped design a prototype IoT wristband system to track patients with Alzheimer&#39s.'
  },
  {
    title: 'Library Availability Seat Tracker',
    text: 'Designed a system to track the availability and location of seats at the library.'
  }
];

function cardTemplate(project) {
  const {title, text} = project;

  return `<div class="card-padding light-text">
            <div class="project-title card-title">
              ${title}
            </div>
            <p class="project-text">
              ${text}
            </p>
          </div>`;
}

function createProjectCards(projects, elementId) {
  let innerHTML = '';

  projects.forEach(project => {
    innerHTML += cardTemplate(project);
  });

  document.getElementById(elementId).innerHTML = innerHTML;
}

createProjectCards(projects, 'personal-projects-section');
