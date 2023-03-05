//ini untuk memasukkan nama dan jika user sudah memasukkan nama maka value akan di tampilkan di alert
// const tamu = prompt('Masukkan Nama')
// alert(`selamat datang ${tamu}`)

const heading = document.getElementsByTagName('h1')

//for of untuk menangkap semua elemen ber tag h1 dan memberikan style pada h1
for(let head of heading){
    head.style.color = 'red'
}

