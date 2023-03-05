
// const newElement = document.createElement('h1')
// newElement.innerText = 'Hello I am new Element create from javascript'

// let tes = document.getElementById("tes")
// tes.innerHTML = newElement.outerHTML

const gambar = document.getElementById('gambar')

//ini untuk memanipulasi atribut dengan javascript
//javascript mengambil gambar dengan atribut width dan height di dalam html
gambar.setAttribute('width', 300)
gambar.setAttribute('height', 215)

//mengambil class button di index ke 3
const button = document.getElementsByClassName('button')[3]

//mengambil elemen child dari elemen class button di index ke 3
const getFirstButton = button.children[0]

getFirstButton.setAttribute('type', 'submit')

const links = document.getElementById('links')

//inner text adalah memasukkan text ke dalam html sementara innerhtml memasukkan element html dari javascript ke html


//inner text menggantikan teks yang ada di dalam element link dengan id dicodingLink
const dicodingLinks = document.getElementById('dicodingLink') 
dicodingLinks.innerText = "belajar dicoding"


