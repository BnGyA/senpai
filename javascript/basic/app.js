const li = document.createElement('li');

li.className = 'class';
li.id = 'id';
li.setAttribute('title', 'New item');

li.appendChild(document.createTextNode('Hello')); 



const link = document.createElement('a');

link.className = 'link';
link.innerHTML = '<b>x</b>';

li.appendChild(link);

const ul = document.querySelector('ul').appendChild(li);

console.log(ul);

// Remove

const newTitle = document.createElement('h1');

newTitle.style.color = 'red';
newTitle.appendChild(document.createTextNode('JavaScript Power'))

// 
const oldTitle = document.querySelector('h1');

console.log(oldTitle);

const container = document.querySelector('.container').replaceChild(newTitle, oldTitle);

console.log(container);

const lis = document.querySelectorAll('li');

lis[0].remove();




const button = document.querySelector('button');

button.addEventListener('click', buttonClick);

function buttonClick(e){
    e.preventDefault();
    console.log('prevented')
}

const input = document.querySelector('.input');
const text = document.querySelector('.input-text');
input.addEventListener('keyup', inputWatcher);

function inputWatcher(e){
    let val = e.target.value;
    console.log(val);
    text.innerText = val;
}