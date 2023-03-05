const createNew = document.createElement('li')
createNew.innerText = 'Selamat Menikmati'

//memanggil ordered list dan menambahkan element ke element child 'createNew' menggunakan method appenChild
const daftar = document.getElementById('daftar').appendChild(createNew)

