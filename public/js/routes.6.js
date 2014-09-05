var routes = ($routeProvider) => {

  $routeProvider.when('/home', {
    templateUrl: 'partials/home.html',
    controller: 'HomeController' });

  $routeProvider.otherwise({
    redirectTo: '/home' });
};

export var initializeRoutes = (app) => { app.config(['$routeProvider', routes]); };
