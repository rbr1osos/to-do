import {allList} from './all'
import {displayList} from './createForm'
import isToday from 'date-fns/isToday'
import parseISO from 'date-fns/parseISO';
import '../style.css'

export let todayList=[];
// const date =document.getElementById('todo-date')
function loadTodayDisplay(){
    let resultPriority=allList.map(a=>a.priority)
    let resultTitle=allList.map(a=>a.title)
    let resultDate=allList.map(a=>a.date)
    for(let i=0; i<allList.length;i++){
        if(isToday(parseISO(resultDate[i]))){
            displayList(resultPriority[i],resultTitle[i],resultDate[i])
        }
    }
}

function createToday(){
    const content_container = document.createElement('div')
    content_container.classList.add('content-container');

    const title_container = document.createElement('div');
    title_container.classList.add('title-container')
        const today_logo = document.createElement('img')
        today_logo.classList.add('all-logo')
        today_logo.src='./images/calendar_today_blk.png'

    const today_title = document.createElement('h1');
    today_title.innerHTML='Today'

    const tasks = document.createElement('h2');
    tasks.classList.add('task-title')
    tasks.textContent='Tasks'

    const today_tasks_container = document.createElement('div')
    today_tasks_container.classList.add('tasks-container')
    
    title_container.appendChild(today_logo)
    title_container.appendChild(today_title)
    content_container.appendChild(title_container)
    content_container.appendChild(tasks);
    content_container.appendChild(today_tasks_container)

    return content_container;
}

function loadToday(){
    const main = document.querySelector('#main-content');
    main.textContent='';
    main.appendChild(createToday());

    loadTodayDisplay()
}

export default loadToday;