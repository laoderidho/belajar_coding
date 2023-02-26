const set = new Set([1,2,3,4,5,5,1,4])

//untuk menambahkan nilai set maka dari itu kita harus menggunakan method add()

set.add(6)
set.add(7)
set.add(8)
set.add(8)

//untuk menghapus nilai set menggunakan method delete(value)
set.delete(8)

//set memnambah nilai yang tidak duplikat, jika duplikat maka di ambil elemen pertama kali
console.log(set)