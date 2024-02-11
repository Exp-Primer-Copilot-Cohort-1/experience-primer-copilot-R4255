
// 1.1. Import the http module
const http = require('http');

// 1.2. Create a web server
const server = http.createServer((req, res) => {
    res.end('Welcome to the comments page');
});

// 1.3. Start the web server
server.listen(3000, 'localhost', () => {
    console.log('Server is listening on port 3000');
});

// Step 2: Create a route for the home page
// 2.1. Import the http module
const http = require('http');

// 2.2. Create a web server
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to the home page');
    } else {
        res.end('Page not found');
    }
});

// 2.3. Start the web server
server.listen(3000, 'localhost', () => {
    console.log('Server is listening on port 3000');
});

// Step 3: Create a route for the comments page
// 3.1. Import the http module
const http = require('http');

// 3.2. Create a web server
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to the home page');
    } else if (req.url === '/comments') {
        res.end('Welcome to the comments page');
    } else {
        res.end('Page not found');
    }
});

// 3.3. Start the web server
server.listen(3000, 'localhost', () => {
    console.log('Server is listening on port 3000');
});

// Step 4: Start the web server
// 4.1. Import the http module
const http = require('http');

// 4.2. Create a web server
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to the home page');
    } else if (req.url === '/comments') {
        res.end('Welcome to the comments page');
    } else {
        res.end('Page not found');
    }
});

// 4.3. Start the web server
server.listen(3000, 'localhost', () => {
    console.log('Server is listening on port