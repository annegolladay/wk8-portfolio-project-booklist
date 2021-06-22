# Favorite Book Reads
As a book lover, displaying all of your favorite books in one place is helpful for the user and other book enthusiasts to see what books are currently at the top of the favorites list. This app is a demonstration of how to use the back end by creating a server. This is a great introduction to back end basics such as: servers, ports, http requests, http responses, and endpoints. We will use Node to build this server.


## Table of Contents
* [Technologies Used](#technologiesused)
* [Set Up Favorite Book Reads](#setup)
* [Run Favorite Book Reads](#run)

## <a name="technologiesused"></a>Technologies Used

* Javascript
* JSON
* HTML
* Hypertext Transfer Protocol
* API's
* Node
* CSS

(dependencies are listed in requirements.txt)


## <a name="setup"></a>Set Up Favorite Book Reads

Follow the instructions to set up your page of favorite books.

###Fork this project and open in VS Code: https://github.com/annegolladay/wk8-portfolio-project-booklist

 * Run npm install in the terminal which helps to give us the packages that we want to use such as nodemon.
    * Make sure you have the package.json file which already is set up to use axios, cors, and express in the dependencies object.
    * Make sure there is a db.json file that contains the information on the books array information that includes an id, title, rating, and imageURL.
 * Check to see that there is an index.js file that will be the main server.
    * In index.js, is where we require express and cors.


 * Compile your source
    * `source ./build_osrm.sh`
 * Run OSRM
   * "Running OSRM" is here https://github.com/Project-OSRM/osrm-backend/wiki/Running-OSRM 
   However, this is exactly what you need to do for There and Back Again:
  	* `osrm-extract san-francisco_california.osm.pbf -p profiles/foot_crime.lua` (the `*.osm.pbf` file is downloaded from [here](https://mapzen.com/data/metro-extracts))
  	* `osrm-prepare san-francisco_california.osrm -p profiles/foot_crime.lua`
  	* `osrm-routed san-francisco_california.osrm` -- this command is what will actually start your server, as long as the last two steps were successful; you can now go to `localhost:5000/viaroute?…` as described [here](https://github.com/Project-OSRM/osrm-backend/wiki/Server-api#service-viaroute)