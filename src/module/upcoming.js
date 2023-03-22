import {allList} from './all'
import {displayList} from './createForm'
import isFuture from 'date-fns/isFuture';
import parseISO from 'date-fns/parseISO';
import '../style.css'

export let upcomingList=[];
function loadUpcomingDisplay(){
    let resultPriority=allList.map(a=>a.priority)
    let resultTitle=allList.map(a=>a.title)
    let resultDate=allList.map(a=>a.date)
    for(let i=0; i<allList.length;i++){
        if(isFuture(parseISO(resultDate[i]))){
            displayList(resultPriority[i],resultTitle[i],resultDate[i])
        }

    }
}

function createUpcoming(){
    const content_container = document.createElement('div')
    content_container.classList.add('content-container');

    const title_container = document.createElement('div');
    title_container.classList.add('title-container')
        const upcoming_logo = document.createElement('img')
        upcoming_logo.classList.add('all-logo')
        upcoming_logo.src='./images/calendar_upcoming_blk.png'

    const upcoming_title = document.createElement('h1');
    upcoming_title.innerHTML='Upcoming'

    const tasks = document.createElement('h2');
    tasks.classList.add('task-title')
    tasks.textContent='Tasks'

    const upcoming_tasks_container = document.createElement('div')
    upcoming_tasks_container.classList.add('tasks-container')
    
    title_container.appendChild(upcoming_logo)
    title_container.appendChild(upcoming_title)
    content_container.appendChild(title_container)
    content_container.appendChild(tasks);
    content_container.appendChild(upcoming_tasks_container)

    return content_container;
}

function loadUpcoming(){
    const main = document.querySelector('#main-content');
    main.textContent='';
    main.appendChild(createUpcoming());

    loadUpcomingDisplay()
}


export default loadUpcoming;