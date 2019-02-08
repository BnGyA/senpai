const http = new EasyHTTP;

// GET 
const users = http.get('https://jsonplaceholder.typicode.com/posts')
    .then(data => console.log(data))
    .catch(err => console.log(err))

console.log(users);