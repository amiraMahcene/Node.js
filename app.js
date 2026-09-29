// Install Node.js
/*

    Go to https://nodejs.org
    Download the LTS (Long Term Support) version
    Run the installer and follow the instructions

    */

// Getting started with Node.js
//npm init -y


// Importation du module HTTP
const http = require('http');



http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(3000);
console.log('Server running at http://localhost:3000');
