// server.js

const express = require('express');
const http = require('http');
const path = require('path');

//const api = require('server/routes/api');

const app = express();

// Run the app by serving the static files
// in the dist directory

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const port = process.env.PORT || '3001';
app.set( 'port', port );
const server = http.createServer(app);
server.listen(port,()=>console.log('Running'));

// Start the app by listening on the default
// Heroku port

//app.listen(process.env.PORT || 8080);