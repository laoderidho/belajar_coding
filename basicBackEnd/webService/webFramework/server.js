//Import Hapi module
const Hapi = require('@hapi/hapi');
const routes = require('./route.js');

const init = async () => {  
    //declaration server with a host and port
    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    // register routes
    server.route(routes);

    // create and start server
    await server.start();
    console.log(`Server running on ${server.info.uri}`);
};

init();