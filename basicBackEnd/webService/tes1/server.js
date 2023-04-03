const http = require('http')
const host = 'localhost'
const port = 3100

//parameter pertama adalah request dan parameter kedua adalah response
const requestListener = (req, res)=>{
    res.setHeader('Content-Type', 'text/html');

    res.statusCode = 200;

    res.end(`<h1>Hallo Server anda berjalan</h1>`)
};


//memamnggil fungsi requestListener dan memasukkannya ke dalam server
const server = http.createServer(requestListener)


//server menampilkan sebuah fungsi yang di masukkan dan menampilkannya di port browser dan hostnya
server.listen(port, host, ()=>{
    console.log(`Server berjalan di http://${host}:${port}`)
})

/* 
    Method listen() dapat menerima 4 parameter, berikut detailnya:
        port (number) : jalur yang digunakan untuk mengakses HTTP server.
        hostname (string) : nama domain yang digunakan oleh HTTP server.
        backlog (number) : maksimal koneksi yang dapat ditunda (pending) pada HTTP server.
        listeningListener (function) : callback yang akan terpanggil ketika HTTP server sedang bekerja (listening).
*/