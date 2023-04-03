const http = require('http')
const port = 5000
const host = 'localhost'

const requestListener = (req, res)=>{

    res.setHeader('Content-Type', 'text/html')
    res.statusCode = 200

    const { method } = req;

    if(method === 'GET'){
        res.end("<h1>Get Data</h1>");
    }

    if(method === 'POST'){
        res.end("<h1>Post Data</h1>");
    }
}

const server = http.createServer(requestListener)

server.listen(port, host, ()=>{
    console.log(`server berjalan di ${host} dan di port ${port}`)
})