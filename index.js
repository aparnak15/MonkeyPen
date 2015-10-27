var Hapi = require('hapi');

// Create a server with a host and port
var server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 8000
});

// Register the routes
server.register({
  register: require('hapi-routes'),
  options: {dir: 'routes'}
}, function (err) {

  // Start the server
  server.start(function () {
      console.log('Server running at:', server.info.uri);
  });
});
