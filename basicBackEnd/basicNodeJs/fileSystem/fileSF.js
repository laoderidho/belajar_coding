const fs = require('fs')

const fileRead = (err, data)=>{
    if(err){
        console.log('gagal membaca berkas')
        return;
    }

    console.log(data)
}

//ini fungsi untuk membaca file txt 
fs.readFile('todo.txt', 'UTF-8', fileRead)