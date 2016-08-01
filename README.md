# FCC-URL-Shortener

## Install
In order to use this project, you must install Node.js and Express.js You can acquire
node through the [Node.js](https://nodejs.org/en/) website. After you have it, you can
install Express globally with the following command:
`npm install -g express`

If you would like to try out my test files as well, you can install the rest of the dependencies
with this command: `npm install`.

## How to Use
In order to run this program, you can use this command to start the server on localhost:8080:
```
npm start

```
Provided that you've installed the devDependencies, you can use this command to
run all of the tests:
```
npm test
```
or this command to test files individually, go into the test folder and run:
```
mocha fileTest.js
```
where fileTest is the filename of the testing script.

## Note
This project uses [mLab](https://mlab.com/) which means that after installation of
the dependencies, it will still not work completely. This can be worked around by
commenting out the 'insertURL' call in the 'handleNewURL' function. This will allow
the usage of the project minus the use of mongodb to store URL's. The other way is to create a mongoDB
database (local or otherwise) with at least a 'url' collection.

## Project Description:
This is a back end project on FreeCodeCamp where I reverse engineer the functionality of
[this project](https://little-url.herokuapp.com/ ). I add the enhancement that the user must be able to
enter a URL on the page itself.

### Requirements
1. **User Story:** I can pass a URL as a parameter and I will receive a shortened URL in the JSON response.
2. **User Story:** If I pass an invalid URL that doesn't follow the valid http://www.example.com format, the JSON response will contain an error instead.
3. **User Story:** When I visit that shortened URL, it will redirect me to my original link.
4. **personal enhancement** Create a way for the user to enter a URL on the page itself.

### Technologies used:
+ Node
+ Express
+ Mocha
+ Chai
+ MongoDB
+ Heroku

### Live Demo:
https://sta-url.herokuapp.com
<!-- ### How it was made: -->
