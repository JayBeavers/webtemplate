# REST Server Template #

Starting template for new REST server development, based around NodeJS, Express 4.x, and Traceur as a starting point.  Leverages NPM and Grunt to automate the installation and build process.  Optimized for hosting on Azure Websites with Github source hosting and CircleCI build/test automation.

## Installing Development Environment ##

Assumes you have NodeJS 0.10.26+ installed with grunt-cli and bower:

	npm install -g grunt-cli
	npm install -g bower

To install dependencies:

	npm install
	bower install

## Run locally ##

To prepare the service for running,

	npm test

To run the service locally,

	npm start

## Deployment ##

Set up Github web hook for Circle CI.

Use Azure create new website wizard -> custom -> Deploy from Source Control -> Github.
