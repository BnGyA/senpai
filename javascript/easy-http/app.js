const http = new easyHTTP;

const data = {
    userId: 1,
    title: 'Custom Post',
    body: 'This is a custome post',
}


// GET 
/*http.get('https://jsonplaceholder.typicode.com/posts', function(error, response){
    console.log(response)
});*/

// GET one

/*http.get('https://jsonplaceholder.typicode.com/posts/1', function(error, response){
    console.log(response)
});*/

// POST

/* http.post('https://jsonplaceholder.typicode.com/posts', data, function(error, post){
    if(error){
        console.log(err);
    } else {
        console.log(post)
    }
});*/

// PUT

/* http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(error, post){
    if(error){
        console.log(err);
    } else {
        console.log(post)
    }
}); */


// DELETE

http.delete('https://jsonplaceholder.typicode.com/posts/1', function(error, response){
    if(error){
        console.log(err);
    } else {
        console.log(response)
    }
});