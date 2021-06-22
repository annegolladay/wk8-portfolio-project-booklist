# Favorite Book Reads
As a book lover, displaying all of your favorite books in one place is helpful for the user and other book enthusiasts to see what books are currently at the top of the favorites list. This app is a demonstration of how to use the back end by creating a server. This is a great introduction to back end basics such as: servers, ports, http requests, http responses, and endpoints. We will use Node to build this server.


## Table of Contents
* Technologies Used
* Set Up Favorite Books List
* Run Favorite Books List


## Technologies Used

* Javascript
* JSON
* HTML
* Hypertext Transfer Protocol
* API's
* Node
* CSS


## Set Up Favorite Books List

Follow the instructions to set up your page of favorite books.

###Go to repo: https://github.com/annegolladay/wk8-portfolio-project-booklist

 * Run npm install in the terminal which helps to give us the packages that we want to use such as nodemon.
    * Make sure you have the package.json file which already is set up to use axios, cors, and express in the dependencies object.
    * Make sure there is a db.json file that contains the information on the books array information that includes an id, title, rating, and imageURL.
 * Check to see that there is an index.js file that will be the main server.
    * In index.js, is where we require express and cors.
    * The app.listen should be set up in order to get the port up and running.
    * Use nodemon server/index.js in the terminal to run the port.
 * Go to controller.js file to separate our handler functions in the server folder.
    * Require the db.json file at the top in order for this file to get all of the book information. 
    * In the module.exports object, we set up the getBooks as a endpoint handler. Within this function, we take in a request and response in order to send in the book information. 
    * Send the entire books array with a good 200 status. There is no user input or paramters needed since we are setting up a get request.
 * Navigate to the index.js file.
    * Check to see if controller file is called and set up in order to receive the controller file information.
    * Attach the getBooks function to the app.get endpoint. We need to bring this function in to tell it to run at an endpoint that we define as '/api/books'.
    * If a get request is made to this endpoint, we want to call ctrl.getBooks.


## Run Favorite Books List

 * Save your work. Check to see if nodemon has restarted and is up and running.
 * We should see the entire books list displayed on the web app. 