import { initializeControllers } from './controllers.6';
import { initializeRoutes } from './routes.6';

var app = angular.module('myApp', ['ngTouch', 'ngRoute', 'ngAnimate', 'ngResource']);

initializeControllers(app);
initializeRoutes(app);