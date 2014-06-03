var routes = ($routeProvider) => {

  $routeProvider.when('/foo', {
    templateUrl: 'partials/foo.html',
    controller: 'FooController' });

  $routeProvider.otherwise({
    redirectTo: '/foo' });
};

export var initializeRoutes = (app) => { app.config(['$routeProvider', routes]); };