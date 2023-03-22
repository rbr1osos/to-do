import '../style.css'

function createProjectPage(name){
    const content_container = document.createElement('div')
    content_container.classList.add('content-container');

    const title_container = document.createElement('div');
    title_container.classList.add('title-container')

    const projectPage_title = document.createElement('h1');
    projectPage_title.innerHTML= name

    const tasks = document.createElement('h2');
    tasks.classList.add('task-title')
    tasks.textContent='Tasks'

    const projectPage_tasks_container = document.createElement('div')
    projectPage_tasks_container.classList.add('tasks-container')
    
    title_container.appendChild(projectPage_title)
    content_container.appendChild(title_container)
    content_container.appendChild(tasks);
    content_container.appendChild(projectPage_tasks_container)

    return content_container;
}

function loadProjectPage(name){
    const main = document.querySelector('#main-content');
    main.textContent='';
    main.appendChild(createProjectPage(name));
}

export default loadProjectPage;