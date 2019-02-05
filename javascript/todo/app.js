// Add on form submit

const form = document.querySelector('form');

form.addEventListener('submit', function(e){

    const task = document.getElementById('task').value;
    
    //localStorage.setItem('tasks', 'yolo')

    let tasks;

    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks')); 
    }

    tasks.push(task);
    createItem(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    e.preventDefault;
});

// List the items fetched 
let todolist = document.getElementById('todolist');
let tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach((task) =>{
    createItem(task);
});

// Delete items
document.body.addEventListener('click', function(e){
    if(e.target.classList.contains('deleter')){

        let parent = e.target.parentElement;
        let title = parent.getAttribute('title');
        
        let tasks = JSON.parse(localStorage.getItem('tasks')); 
        console.log(tasks)

        filteredTasks = tasks.filter(item => item !== title);
        
        localStorage.setItem('tasks', JSON.stringify(filteredTasks));

        // remove from the DOM
        todolist.removeChild(parent);
    }
    
})

function createItem(item){
    let li = document.createElement('li');
    li.className = 'todo';
    li.setAttribute('title', item);
    //li.appendChild(document.createTextNode(item));

    li.innerHTML = '<b>' + item + '</b> <a href="#" class="deleter">x</a>';

    todolist.appendChild(li);
}
