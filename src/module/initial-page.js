import loadAll from './all';
import loadToday from './today';
import loadUpcoming from './upcoming'
import loadProjectPage from './addProject'
import {allList} from './all'
import {todayList} from './today'
import {upcomingList} from './upcoming'
import '../style.css'

function createHeader(){
    const header = document.createElement('div')
    header.classList.add('header')

    const header_img = document.createElement('img')
    header_img.classList.add('header-logo')
    header_img.src='./images/logo.png'

    const logo_title = document.createElement('h1')
    logo_title.classList.add('logo-title')
    logo_title.innerHTML='Todo list'

    header.appendChild(header_img)
    header.appendChild(logo_title)
    return header;
}


function createSidebar(){

    const sidebar = document.createElement('div')
    sidebar.classList.add('sidebar')

    //create option container
    const sidebar_container = document.createElement('div')
    sidebar_container.classList.add('sidebar-container')

    //all button
    const all_item = document.createElement('div')
    all_item.classList.add('sidebar-item')

    //left-side
    const left_all = document.createElement('div')
    left_all.classList.add('left-side')

    const all_img = document.createElement('img')
    all_img.src='./images/calendar_all_wht.png'
    all_img.classList.add('icon')
    const all_button = document.createElement('button')
    all_button.classList.add('button-nav')
    all_button.classList.add('button-side')

    all_button.innerHTML='All'
    all_button.addEventListener('click',(e)=>{
        if(e.target.classList.contains('active'))return;
        setActiveButton(all_button);
        loadAll();
    });


    //number
    const all_total = document.createElement('div')
    all_total.classList.add('total-items')
    all_total.setAttribute('id','all-number')
    all_total.innerHTML= allList.length

    //today button
    const today_item = document.createElement('div')
    today_item.classList.add('sidebar-item')

    //left-side
    const left_today = document.createElement('div')
    left_today.classList.add('left-side')

    const today_img = document.createElement('img')
    today_img.src='./images/calendar_today.png'
    today_img.classList.add('icon')
    const today_button = document.createElement('button')
    today_button.classList.add('button-nav')
    today_button.classList.add('button-side')

    today_button.innerHTML='Today'
    today_button.addEventListener('click',(e)=>{
        if(e.target.classList.contains('active'))return;
        setActiveButton(today_button);
        loadToday();
    });

    //number
    const today_total = document.createElement('div')
    today_total.classList.add('total-items')
    today_total.setAttribute('id','total-today')
    today_total.innerHTML=todayList.length

    //upcoming button
    const upcoming_item = document.createElement('div')
    upcoming_item.classList.add('sidebar-item')

    //left-side
    const left_upcoming = document.createElement('div')
    left_upcoming.classList.add('left-side')

    const upcoming_img = document.createElement('img')
    upcoming_img.src='./images/calendar_upcoming.png'
    upcoming_img.classList.add('icon')
    const upcoming_button = document.createElement('button')
    upcoming_button.classList.add('button-nav')
    upcoming_button.classList.add('button-side')

    upcoming_button.innerHTML='Upcoming'
    upcoming_button.addEventListener('click',(e)=>{
        if(e.target.classList.contains('active'))return;
        setActiveButton(upcoming_button);
        loadUpcoming();
    });

    //number
    const upcoming_total = document.createElement('div')
    upcoming_total.classList.add('total-items')
    upcoming_total.setAttribute('id','total-upcoming')
    upcoming_total.innerHTML=upcomingList.length


    //create project section
    const project_container = document.createElement('div')
    project_container.classList.add('projects')

    //project title
    const project_title = document.createElement('h2')
    project_title.classList.add('projectTitle')
    project_title.textContent='Projects'

    //------- Work Project Tab ------- //
    

    //project item-container
    const project_items = document.createElement('div')
    project_items.classList.add('project-items')

    //project item-name
    const project_item = document.createElement('div')
    project_item.classList.add('project-item')
    project_item.innerHTML='Work'

    //project delete
    const project_delete = document.createElement('div')
    project_delete.classList.add('close-button')
    project_delete.innerHTML='x'

    //------- Footer Tab ------- //
    const footer_container = document.createElement('div')
    footer_container.classList.add('footer-container')

    const left_footer = document.createElement('div')
    left_footer.classList.add('left-footer')

    const footer_createdby = document.createElement('p')
    footer_createdby.classList.add('created-by')
    footer_createdby.innerHTML='created by'

    const gitlink = document.createElement('a')
    gitlink.classList.add('footer-link')
    gitlink.href='https://github.com/rbr1osos'
    gitlink.innerHTML='rbr1osos'
    
    const sourceLink = document.createElement('a')
    sourceLink.classList.add('footer-link')
    sourceLink.href='https://github.com/rbr1osos/todo-list-'
    sourceLink.innerHTML='source'

    left_footer .appendChild(footer_createdby)
    left_footer .appendChild(gitlink)
    footer_container.appendChild(left_footer)
    footer_container.appendChild(sourceLink)

    left_all.appendChild(all_img)
    left_all.appendChild(all_button)
    all_item.appendChild(left_all)
    all_item.appendChild(all_total)
    sidebar_container.appendChild(all_item)

    left_today.appendChild(today_img)
    left_today.appendChild(today_button)
    today_item.appendChild(left_today)
    today_item.appendChild(today_total)
    sidebar_container.appendChild(today_item)

    left_upcoming.appendChild(upcoming_img)
    left_upcoming.appendChild(upcoming_button)
    upcoming_item.appendChild(left_upcoming)
    upcoming_item.appendChild(upcoming_total)
    sidebar_container.appendChild(upcoming_item)
    sidebar.appendChild(sidebar_container);

    project_container.appendChild(project_title)
    project_items.appendChild(project_item)
    project_items.appendChild(project_delete)

    project_container.appendChild(project_items)
    project_container.appendChild(add_project())
    sidebar.appendChild(project_container)
    sidebar.appendChild(footer_container)
    return sidebar;
}
function createProject(name){
    //project item-container
    const project_items = document.createElement('div')
    project_items.classList.add('project-items')

     //project item-name
     const project_item = document.createElement('button')
     project_item.classList.add('button-nav')
     project_item.setAttribute('id','project_name')
     project_item.innerHTML= name;
     project_item.addEventListener('click',(e)=>{
        if(e.target.classList.contains('active'))return;
        setActiveButton(project_item);
        loadProjectPage(e.target.textContent)
    });
 
     //project delete
     const project_delete = document.createElement('div')
     project_delete.classList.add('close-button')
     project_delete.innerHTML='x'
     project_delete.addEventListener('click',(e)=>{
        e.target.parentNode.remove();
    });
 
     project_items.appendChild(project_item)
     project_items.appendChild(project_delete)
     
     const project_container = document.querySelector('.projects')
     project_container.appendChild(project_items)
     return project_items
 }


function showTextbox(){
    
    const form_container = document.createElement('form')
    form_container.setAttribute('id','form-container')

    const form = document.createElement('INPUT')
    form.setAttribute('id','form-text')
    form.setAttribute('type','text')
    form.setAttribute('placeholder','project name')

    const form_button = document.createElement('INPUT')
    form_button.setAttribute('id','text-add-button')
    form_button.setAttribute('type','submit')
    form_button.setAttribute('value','add')

    form_button.addEventListener('click',(e)=>{

        const value=document.getElementById('form-text').value
        createProject(value)
        form_container.remove()
        const content_container = document.querySelector('.projects');
        content_container.appendChild(add_project())
        e.preventDefault();

    });

    form_container.appendChild(form)
    form_container.appendChild(form_button)
    return form_container
}

    //project ADD
function add_project(){
    const project_add = document.createElement('button')
    project_add.setAttribute('id','add-button')
    project_add.innerHTML='+ add project'
    project_add.addEventListener('click',(e)=>{
        const add_project= document.querySelector('#add-button')
        add_project.remove();

        const content = document.querySelector('.projects')
        content.appendChild(showTextbox());

    });
    return project_add;
}

function createMain(){
    const main = document.createElement('div');
    main.classList.add('main-content')
    main.setAttribute('id','main-content')
    return main;
}

//when nav button is pressed, button will be 'active'
export function setActiveButton(button){
    const buttons = document.querySelectorAll('.button-nav');
    buttons.forEach((button)=>{
        if (button !== this){
            
            button.classList.remove('active')
        }
    });
    button.classList.add('active');
}


function pageLoad(){
    const content = document.querySelector('.main-container');

    content.appendChild(createHeader())
    content.appendChild(createSidebar());
    content.appendChild(createMain())

    setActiveButton(document.querySelector('.button-nav'));
    loadAll();
}

export default pageLoad;