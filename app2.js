// How Node.js handele requests and responses
const http = require('http');
const fs = require('fs');

console.log('Before file read');

fs.readFile('myfile.txt', 'utf8', (err, data) => {
    if (err) throw err;

    console.log('File contents:', data);
});

console.log('After file read');



// Blocking code example
console.log('Start of blocking code');
const data = fs.readFileSync('myfile.txt', 'utf8'); // Blocks here
console.log('Blocking operation completed');

// Non-blocking code example
console.log('Start of non-blocking code');
fs.readFile('myfile.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('Non-blocking operation completed');
});
console.log('This runs before the file is read');



const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    res.end('Hello from my Node.js server!');
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});