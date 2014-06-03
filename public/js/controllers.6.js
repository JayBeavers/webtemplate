var FooController = ($scope)  => {
  $scope.foo = 'bar';
};

var MainController = ($scope, $rootScope, $window, $location) => {
  $scope.slide = '';

  $rootScope.back = function() {
    $scope.slide = 'slide-right';
    $window.history.back();
  };
  
  $rootScope.go = function(path){
    $scope.slide = 'slide-left';
    $location.url(path);
  };
};

export var initializeControllers = (app) => {
  app.
  controller('MainController', ['$scope', '$rootScope', '$window', '$location', MainController]).
  controller('FooController', ['$scope', FooController]);
};