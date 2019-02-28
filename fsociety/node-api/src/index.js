// Requirements
const mongoose = require('mongoose');
const routes = require('./routes');
// Init fastify
const fastify = require('fastify')({
    logger: true
})


// Swagger
// Import Swagger Options
const swagger = require('./config/swagger')
// Register Swagger
fastify.register(require('fastify-swagger'), swagger.options)

// Connect to the db
mongoose.connect(`mongodb://localhost/mycargarage`, {useNewUrlParser: true})
    .then(() => console.log('MongoDB connected..'))
    .catch(err => console.log(err));



// Declare a route
routes.forEach((route, index) =>{
    fastify.route(route);
})

// Start the server

const start = async () =>{
    try{
        await fastify.listen(3000);
        fastify.swagger()
        fastify.log.info(`server is listening on ${fastify.server.address().port}`)
    } catch (err){
        fastify.log.error(err);
        process.exit(1);
    }
}
start();


