import { allList } from "./all";
import {todayList} from './today'
import { upcomingList } from "./upcoming";
import {addTask} from './all';
import isToday from 'date-fns/isToday'
import isFuture from "date-fns/isFuture";
import parseISO from 'date-fns/parseISO';
import {loadTaskInfo} from './task-info'
import '../style.css'

import {setActiveButton} from './initial-page'

export function createForm(){
    const formContainer= document.createElement('div')
    formContainer.classList.add('todo-container')

    const form = document.createElement('FORM')
    form.setAttribute('id','create-todo-form')

    const title_input = document.createElement('INPUT')
    title_input.setAttribute('id','todo-title')
    title_input.setAttribute('type','text')
    title_input.setAttribute('name','title')
    title_input.setAttribute('placeholder','task title')

    const desc_input = document.createElement('TEXTAREA')
    desc_input.setAttribute('id','todo-desc')
    desc_input.setAttribute('type','textbox')
    desc_input.setAttribute('placeholder','Details: e.g pay internet, phone, go to work.')
    desc_input.setAttribute('name','desc')

    const date_input = document.createElement('INPUT')
    const date_label = document.createElement('label')
    date_label.innerHTML='Due Date'
    date_input.setAttribute('id','todo-date')
    date_input.setAttribute('type','date')
    date_input.setAttribute('name','date')

    const bottom_form_container = document.createElement('div')
    bottom_form_container.classList.add('bottom-form-container')

    const priority_container = document.createElement('div')
    priority_container.setAttribute('id','priority-container')
    const priority_label = document.createElement('label')
    priority_label.classList.add('priority-label')
    priority_label.innerHTML='Priority Level'

    const low_button = document.createElement('RADIO')
    low_button.setAttribute('id','priority-button')
    low_button.classList.add('low-button')
    low_button.classList.add('button-nav')

    low_button.innerHTML='Low'
    low_button.addEventListener('click',(e)=>{
        const priority_container = document.getElementById('priority-container')
        priority_container.value=e.target.innerHTML
        if(e.target.classList.contains('active'))return;
        setActiveButton(low_button);
    })
    priority_container.appendChild(low_button)

    const med_button = document.createElement('RADIO')
    med_button.setAttribute('id','priority-button')
    med_button.classList.add('med-button')
    med_button.classList.add('button-nav')

    med_button.innerHTML='Medium'
    med_button.addEventListener('click',(e)=>{
        const priority_container = document.getElementById('priority-container')
        priority_container.value=e.target.innerHTML
        setActiveButton(med_button);
        
    })
    priority_container.appendChild(med_button)

    const high_button = document.createElement('RADIO')
    high_button.setAttribute('id','priority-button')
    high_button.classList.add('high-button')
    high_button.classList.add('button-nav')

    high_button.innerHTML='High'
    high_button.addEventListener('click',(e)=>{
        const priority_container = document.getElementById('priority-container')
        priority_container.value=e.target.innerHTML
        setActiveButton(high_button);
    })
    priority_container.appendChild(high_button)


    const bottom_right_container = document.createElement('div')
    bottom_right_container.classList.add('bottom-right-container')

    //submit button
    const form_submit = document.createElement('INPUT')
    form_submit.setAttribute('id','add')
    form_submit.setAttribute('type','image');
    form_submit.src='./images/confirm.svg'
    form_submit.addEventListener('click',(e)=>{
   
        const content_container1 = document.querySelector('.content-container');
        content_container1.appendChild(addTask())
 
        const title= document.getElementById('todo-title')
        const date =document.getElementById('todo-date')
        const priority=document.getElementById('priority-container')
        const desc=document.getElementById('todo-desc')

        let newTitle= title.value
        let newDate= date.value
        let newPriority=priority.value
        let newDesc=desc.value

        additemToList(newPriority,newTitle,newDate,newDesc);
        const total_number = document.querySelector('#all-number')
        total_number.innerHTML=allList.length;
        const today_number = document.querySelector('#total-today')
        today_number.innerHTML=todayList.length;
        const upcoming_number = document.querySelector('#total-upcoming')
        upcoming_number.innerHTML=upcomingList.length;

        const submit_form = document.querySelector('.todo-container')
        submit_form.remove();
        e.preventDefault();
    })

    const form_cancel_container = document.createElement('div')
    const form_cancel = document.createElement('img')
    form_cancel.classList.add('cancel')
    form_cancel.src='./images/close.svg'
    form_cancel_container.appendChild(form_cancel)
    form_cancel_container.addEventListener('click',()=>{
        const submit_form = document.querySelector('.todo-container')
        submit_form.remove();
           
        const content_container1 = document.querySelector('.content-container');
        content_container1.appendChild(addTask())
 
    })

    bottom_right_container.appendChild(form_submit)
    bottom_right_container.appendChild(form_cancel_container)
    form.appendChild(title_input)
    form.appendChild(desc_input)

    form.appendChild(date_label)
    form.appendChild(date_input)
    form.appendChild(priority_label)
    bottom_form_container.appendChild(priority_container)
    bottom_form_container.appendChild(bottom_right_container)
    form.appendChild(bottom_form_container)

    formContainer.appendChild(form)
    return formContainer
}


export function displayList(priority,title,date){
    const all_tasks_container = document.querySelector('.tasks-container')
 //task container
 const task_container = document.createElement('div')
 task_container.classList.add('task-container')

 //left side

 const task_left =document.createElement('div')
 task_left.classList.add('task-left')

function checkPriority(priority){
 if(priority==='High'){
 const priority_button = document.createElement('div')
 priority_button.classList.add('priority-high')
 return priority_button
 }
 else if(priority==='Medium'){
    const priority_button = document.createElement('div')
    priority_button.classList.add('priority-med')
    return priority_button

 }
 else {
    const priority_button = document.createElement('div')
    priority_button.classList.add('priority-low')
    return priority_button

 }
}

 const task1 = document.createElement('div')
 task1.classList.add('task1');
 task1.innerHTML=title
 task1.addEventListener('click',(e)=>{
     const name = e.target.innerHTML
     const overlay = document.getElementById('overlay')
     overlay.style.display='flex';
    loadTaskInfo(name)
 })

//right side
const task_right=document.createElement('div')
task_right.classList.add('task-right')

const date_input =document.createElement('div')
date_input.innerHTML=date

const icon_container = document.createElement('div')
icon_container.classList.add('icon-container')



const delete_icon =document.createElement('img')
delete_icon.src='./images/trash.svg'
delete_icon.addEventListener('click',(e)=>{

        e.target.parentNode.parentNode.parentNode.remove();

})

task_right.appendChild(date_input)
task_right.appendChild(icon_container)

// icon_container.appendChild(edit_icon)
icon_container.appendChild(delete_icon)
// icon_container.appendChild(info_icon)

 task_left.appendChild(checkPriority(priority))
 task_left.appendChild(task1)
 task_container.appendChild(task_left)
 task_container.appendChild(task_right)
 all_tasks_container.appendChild(task_container)

}

function List(priority,title,date,desc){
    this.priority=priority
    this.title=title
    this.date = date
    this.desc = desc
  }
  
  function additemToList(priority,title,date,desc) {
    const list= new List(priority,title,date,desc);  
    allList.push(list)
    displayList(priority,title,date,desc); //creates visual book

    if(isToday(parseISO(date))){
        todayList.push(list)
    }
    else if(isFuture(parseISO(date))){
        upcomingList.push(list)
    }
    else{
        return
    }
  }

function loadForm(){
    const content= document.querySelector('.content-container')
    content.appendChild(createForm());
}

export default loadForm;