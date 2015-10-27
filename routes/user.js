var routes = [
{
  method: 'GET',
  path: '/user',
  handler: function (request, reply) {
    return reply('Hello world');
    }
  }
];

exports.routes = function (server) {
  server.route(routes);
};
