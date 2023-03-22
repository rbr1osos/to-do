import loadForm from "./createForm";
import {displayList} from './createForm'
import '../style.css'

export let allList =[];


function loadAllDisplay(){
    let resultPriority=allList.map(a=>a.priority)
    let resultTitle=allList.map(a=>a.title)
    let resultDate=allList.map(a=>a.date)

    for(let i=0; i<allList.length;i++){

        displayList(resultPriority[i],resultTitle[i],resultDate[i])
    }
}

export function addTask(){
    const add_task =document.createElement('button')
    add_task.setAttribute('id','add-task-button')
    add_task.innerHTML='+ add tasks';
    add_task.addEventListener('click',(e)=>{
        const task_button = document.getElementById('add-task-button');
        task_button.remove();

        loadForm();
        e.preventDefault();
    })
    return add_task;
}

function createAll(){
    const content_container = document.createElement('div')
    content_container.classList.add('content-container');

    const title_container = document.createElement('div');
    title_container.classList.add('title-container')
        const all_logo = document.createElement('img')
        all_logo.classList.add('all-logo')
        all_logo.src='./images/calendar_all_blk.png'
    
        const all_title = document.createElement('h1');
        all_title.innerHTML='All'

    const tasks = document.createElement('h2');
    tasks.classList.add('task-title')
    tasks.textContent='Tasks'

    const all_tasks_container = document.createElement('div')
    all_tasks_container.classList.add('tasks-container')


    title_container.appendChild(all_logo)
    title_container.appendChild(all_title)
    content_container.appendChild(title_container)
    content_container.appendChild(tasks);
    content_container.appendChild(all_tasks_container)
    content_container.appendChild(addTask())

    return content_container;
}

export default function loadAll(){
    const main = document.querySelector('#main-content');
    main.textContent='';
    main.appendChild(createAll());

    loadAllDisplay()
}