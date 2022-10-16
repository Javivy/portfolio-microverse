import projectObj from './projectsObj.js';

const projectData = projectObj;

const projectsContainer = document.querySelector('.projects');

export default function createProject(index) {
  const { name, mobileSnapshot, technologies } = projectData[index];
  const projectSample = document.createElement('div');
  const projectDetails = document.createElement('div');
  const projectName = document.createElement('h3');
  const projectUl = document.createElement('ul');
  const seeProjectBtn = document.createElement('button');

  projectSample.classList.add('project-sample');
  projectDetails.classList.add('details');
  projectUl.classList.add('tech-used');
  seeProjectBtn.classList.add('green-btn', 'popup-open-btn');

  projectName.textContent = name;
  seeProjectBtn.textContent = 'See Project';

  projectSample.style.backgroundImage = `url('../${mobileSnapshot}')`;
  projectSample.style.backgroundPosition = 'center';
  projectSample.style.backgroundSize = 'cover';

  seeProjectBtn.type = 'button';
  seeProjectBtn.id = `project-${index}`;

  for (let i = 0; i < technologies.length; i += 1) {
    const projectLi = document.createElement('li');
    const a = document.createElement('a');

    projectLi.classList.add('tech-used-item');

    a.setAttribute('href', '#');
    a.textContent = technologies[i];
    projectLi.append(a);
    projectUl.append(projectLi);
  }

  projectDetails.append(projectName, projectUl, seeProjectBtn);
  projectSample.append(projectDetails);
  projectsContainer.append(projectSample);
  return projectsContainer;
}