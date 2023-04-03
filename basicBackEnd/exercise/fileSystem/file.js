const fs = require('fs')


//ini versi singkat untuk read file di dalam file tes
const data = fs.readFileSync('tes.docx', 'utf-8')

console.log(data)