const http = require('http')
const host = 'localhost'
const port = 5000

const requestListener = (req, res)=>{
    let body = []
    
    res.setHeader('Content-Type', 'text/html')
    res.statusCode = 200

    const {method} = req

    if(method === 'GET'){
        res.end('<h1>hello</h1>')
    }

    if(method === 'POST'){


        req.on('data', (chunk)=>{
            body.push(chunk)
        })

        req.on('end', ()=>{
            body = Buffer.concat(body).toString();
            const {name} = JSON.parse(body)
            res.end(`<h1>Hai, ${name}</h1>`)
        })
    }
}

const server = http.createServer(requestListener)

server.listen(port, host, ()=>{
    console.log(`server berjalan pada http://${host}:${port}`)
})