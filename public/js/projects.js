const projects = [
  {
    title: 'Smart IoT Pantry',
    text: 'Developed an IoT Pantry to keep track of items. All items were tagged with RFID tags and there were two RFID scanners, one in the pantry and one by the garbage bin. When an item was inserted into the pantry, the pantry scanner would add the item to a database if the item was not already stored. And when the item or its packaging was discarded, the RFID scanner by the garbage bin would remove it from the database. A web application was then built to view items in the pantry while on the go. Check out a video demo <a class="link" href="https://www.youtube.com/watch?v=CY0KQ3sL9Nw">here</a>.'
  },
  {
    title: 'Alzheimer&#39s Wrist Band',
    text: 'Prototyped a wristband to track the location of Alzheimer&#39s patients. The application would track the geo-location of patients and alert responsible personnel when a patient would leave the predefined perimeter.'
  },
  {
    title: 'Library Seat Availability Tracker',
    text: 'Designed an application to keep track of available seats at the library. Each seat contained an ultra-sound sensor which could measure the distance to objects in front of it. In this case, the sensor underneath the seat would detect the legs of the person seating on the seat and notify a server that the seat is occupied. A web application with a seat map would then be updated.'
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
