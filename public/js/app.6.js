import { initializeControllers } from './controllers.6';
import { initializeRoutes } from './routes.6';

var app = angular.module('myApp', ['ngRoute']);

initializeControllers(app);
initializeRoutes(app);
