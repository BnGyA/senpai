const fs = require('fs');

const requestHandler = (req, res) =>{

    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>Hello World</title></head>');
        res.write('<body><form method="POST" action="/message"><input type="text" name="message"><button>Send</button></form></body>');
        res.write('</html>');    
        return res.end(); // we are return because we don't want the code to continue if we are in the if statement
    }
    if(url === '/message' && method === 'POST'){
        const body = [];
        req.on('data', (chunk) =>{
            console.log(chunk);
            body.push(chunk)
        });
        /*req.on('end', () =>{
            const parsedBody = Buffer.concat(body).toString();
            // split to only see the message not message=...
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt', message);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
        */
    // Using a callback for non-blocking code
    req.on('end',() => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt', message, err =>{
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
    });
        
        
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Hello World</title></head>');
    res.write('<body><h1>Hello World</h1></body>');
    res.write('</html>');
};

module.exports = requestHandler;


//module.exports = {
//    handler: requestHandler,
//    someText: 'Some hard coded text'
//}