# d3-server-side-demo

This demo app uses d3.js to render svg charts on the server-side with node.js.


## Requirements

* Node.js - [http://nodejs.org](http://nodejs.org) node --version (v5.8.0)
* GCC Compiler - the d3 node module uses jsdom which requires a C++ compiler:
[https://github.com/tmpvar/jsdom#contextify](https://github.com/tmpvar/jsdom#contextify)


## Getting Started

* Clone the repo
* Install dependencies with `npm install`
* Run development server with `npm start` and go here:
[http://localhost:3000/](http://localhost:3000/)

* image from SVG is found here:
[http://localhost:3000/image](http://localhost:3000/image)


## Test it
* SVG - [https://d3serversidedemo.herokuapp.com/](https://d3serversidedemo.herokuapp.com/)
* PNG - [https://d3serversidedemo.herokuapp.com/image](https://d3serversidedemo.herokuapp.com/image)

## To Generate Percentage Amounts
http://localhost:4000/image?green=40&blue=15&grey=45
