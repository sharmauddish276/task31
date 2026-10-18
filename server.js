const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    let fileName = '';

    if (req.url === '/') {
        fileName = 'home.html';
    } 
    else if (req.url === '/about') {
        fileName = 'about.html';
    } 
    else if (req.url === '/contact') {
        fileName = 'contact.html';
    } 
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 - Page Not Found</h1>');
        return;
    }

    const filePath = path.join(__dirname, fileName);

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/html' });
            res.end('<h1>500 - Server Error</h1>');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    });
});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});