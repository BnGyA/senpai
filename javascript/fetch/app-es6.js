document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getApi);


// Get Text
function getText(){
    fetch('test.txt')
    .then(res => res.text())
    //get the promise from res.text()
    .then(data => {
        document.getElementById('output').innerHTML = data;
    })
    .catch(err => console.log(err));
}

// Get Json
function getJson(){
    fetch('test.json')
    .then(res => res.json())
    .then(data =>{
        let output = '';
        data.forEach(function(post){
            output += `<li>${post.title}</li>`;
        });
        document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err));
}



// Get API
function getApi(){
    document.getElementById('output').innerHTML = 'Loading';
    fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(data => {
        let output = '';
        data.forEach(function(user){
            output += `<li>${user.login}</li>`;
        });
        document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err));
}