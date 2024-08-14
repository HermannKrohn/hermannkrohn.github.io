const projects = [
  {
    title: 'Queen&#39s University',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptatem sequi hic mollitia maiores doloribus similique enim et ipsum fugiat reiciendis, ad dicta architecto aspernatur quod voluptate necessitatibus nobis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptatem sequi hic mollitia maiores doloribus similique enim et ipsum fugiat reiciendis, ad dicta architecto aspernatur quod voluptate necessitatibus nobis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptatem sequi hic mollitia maiores doloribus similique enim et ipsum fugiat reiciendis, ad dicta architecto aspernatur quod voluptate necessitatibus nobis cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptatem sequi hic mollitia maiores doloribus similique enim et ipsum fugiat reiciendis, ad dicta architecto aspernatur quod voluptate necessitatibus nobis cum.'
  },
  {
    title: 'The Flatiron School',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptatem sequi hic mollitia maiores doloribus similique enim et ipsum fugiat reiciendis, ad dicta architecto aspernatur quod voluptate necessitatibus nobis cum.'
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
