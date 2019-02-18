const routeHandler = (req, res) =>{
    const url = req.url;
    const method = req.method;


    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>Hello World</title></head>');
        res.write(`
        <body>
            <h1>Hello world</h1>
            <form method="POST" action="/create-user">
            <input type="text" name="username" placeholder="username" />
            <button>Create</button>
            </form>
            <a href="/users">See the user list</a>
        </body>`);
        res.write('</html>');  
        return res.end();
    }

    if(url === '/users'){
        res.write('<html>');
        res.write('<head><title>User list</title></head>');
        res.write(`
        <body>
            <h1>User list</h1>
            <ul>
                <li>Dummy User 1</li>
                <li>Dummy User 2</li>
            </ul>
            <a href="/">Back to the user list</a>
        </body>`);
        res.write('</html>');  
        return res.end();
    }

    if(url === '/create-user' && method === "POST"){
        const body = [];
        req.on('data', (chunk) =>{
            body.push(chunk);
        })

        req.on('end', ()=>{
            const parsedBody = Buffer.concat(body).toString();
            const user = parsedBody.split('=')[1];
            console.log(user);
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        })
    };


}


module.exports = routeHandler;