import { allList } from "./all";
import './style.css';

function createTaskInfo(name){
    const selectedTask = allList.filter(e=>e.title.includes(name))
    const title = selectedTask[0].title
    const date = selectedTask[0].date
    const desc = selectedTask[0].desc
    const priority =selectedTask[0].priority
    displayTask(title,desc,date,priority)
}

function displayTask(title,desc,date,priority){
const display_task_container = document.createElement('div')
display_task_container.classList.add('display-task-container')
//exit
const popup_exit = document.createElement('h1')
popup_exit.classList.add('popup-exit')
popup_exit.innerHTML='&times;'
popup_exit.addEventListener('click',()=>{
    display_task_container.remove();
    const overlay = document.getElementById('overlay')
    overlay.style.display='none';
})
display_task_container.appendChild(popup_exit)
//title
const task_title = document.createElement('h1')
task_title.classList.add('pop-task-title')
task_title.innerHTML= title
display_task_container.appendChild(task_title)

//desc
const desc_container = document.createElement('div')
desc_container.classList.add('pop-desc-container')

const task_desc_name = document.createElement('div')
task_desc_name.classList.add('task_names')
task_desc_name.innerHTML='Description:'
desc_container.appendChild(task_desc_name)

const task_desc = document.createElement('div')
task_desc.classList.add('desc-content')
task_desc.innerHTML= desc
desc_container.appendChild(task_desc)

//date
const date_container = document.createElement('div')
date_container.classList.add('pop-desc-container')

const task_date_name = document.createElement('div')
task_date_name.classList.add('task_names')
task_date_name.innerHTML='Due Date:'
date_container.appendChild(task_date_name)

const task_date = document.createElement('h2')
task_date.classList.add('desc-content')
task_date.innerHTML= date
date_container.appendChild(task_date)

display_task_container.appendChild(desc_container)
display_task_container.appendChild(date_container)

//priority
function checkPriority(priority){
    if(priority==='High'){
        display_task_container.classList.add('red')
    }
    else if(priority==='Medium'){
        display_task_container.classList.add('orange')
   
    }
    else {
        display_task_container.classList.add('green')   
    }
   }
   checkPriority(priority);
// //edit
const edit_button = document.createElement('button')
edit_button.classList.add('edit-button')
edit_button.innerHTML='Edit'
display_task_container.appendChild(edit_button)


const main_container=document.querySelector('.main-container')
main_container.appendChild(display_task_container)
}

export function loadTaskInfo(name){
    // const content= document.querySelector('#main-content')
    createTaskInfo(name);
}