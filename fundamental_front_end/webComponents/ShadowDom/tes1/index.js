//membuat shadow host
const createDiv = document.createElement('div')


//element yang berada di dalam Shadow DOM
const heading = document.createElement('h1')
heading.innerText = 'Ini adalah konten di dalam shadow DOM'

//menangkap variable createDiv dan memberikan shadow root

const getShadowDOM = createDiv.attachShadow({mode: 'open'})

//memasukkan elemen heading ke createDiv
getShadowDOM.appendChild(heading)

//menampilkan div ke body
document.body.appendChild(createDiv)

