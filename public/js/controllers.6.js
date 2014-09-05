var HomeController = ($scope)  => {
  $scope.foo = 'bar';
};

var MainController = ($scope, $rootScope, $window, $location) => {
};

export var initializeControllers = (app) => {
  app.
  controller('MainController', ['$scope', '$rootScope', '$window', '$location', MainController]).
  controller('HomeController', ['$scope', HomeController]);
};
