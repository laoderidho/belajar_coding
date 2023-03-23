//xhr adalah objeck yang memanggil htttp request
const xhr = new XMLHttpRequest();

//ini jika dia berhasil
xhr.onload = function () {
  console.log(JSON.parse(this.responseText));
};

//ini jika dia gagal
xhr.onerror = function () {
  console.log("Ups something error");
};

//open memanggil method, dan alamat API
xhr.open("GET", "https://books-api.dicoding.dev/list");


//send untuk mengirimkan data
xhr.send();
