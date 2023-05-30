'use strict';

const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const server = Hapi.server({
  port: 3000,
  host: 'localhost',
  routes: {
    cors: {
      origin: ['*'],
    },
  },
});

const initServer = async () => {
  await server.start();
  server.route(routes);
  console.log(`Server running at: ${server.info.uri}`);
};

module.exports = { initServer };
