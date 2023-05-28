const http = require('http');
const host = 'localhost';
const port = 8000;
const server = http.createServer();


const requestListener = (req, res) => {
  res.setHeader("Content-Type", "aplication/json");
  res.setHeader("X-Powered-By", "Node.js");

  res.statusCode = 200;

  const { url, method } = req;

    if (url === '/') {
        if(method === 'GET'){
            res.end('<h1>This is the home page</h1>');
        } else {
            res.end(`<h1>Invalid request</h1>`);
        }
    }
    else if (url === '/about') {
        res.end('<h1>This is the about page</h1>');
    }
    else{
        res.end(`<h1>The page you are looking for does not exist</h1>`);
    }
};

server.on('request', requestListener);

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});


module.exports = server;