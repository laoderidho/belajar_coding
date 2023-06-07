const { nanoid } = require('nanoid')
const books = require('./books')

const addBookHandler = (req, h)=>{
    const { name, year, author, summary, publisher, pageCount, readPage, reading } = req.payload;

    const id = nanoid(16)
    
    const createdAd = new Date().toISOString()
    const updatedAt = createdAd;

    const newBook = {
        name, year, author, summary, publisher, pageCount, readPage, reading, id, createdAd, updatedAt
    }

    books.push(newBook)

    const isSuccess = books.filter((book)=>book.id === id).length > 0

    if(!name){
        const responser = h.response({
            status: 'fail',
            message: 'Gagal menambahkan buku. Mohon isi nama buku'
        })
        responser.code(400)
        return responser
    }

    if(pageCount < readPage){
        const response = h.response({
            status: 'fail',
            message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount'
        })
        response.code(400)
        return response
    }
    if(isSuccess){
        const response = h.response({
            status: 'success',
            message: 'Buku berhasil ditambahkan',
            data:{
                bookId: id
            }
        })
        response.code(201)
        return response
    }
    else{
        const response = h.response({
            status: 'fail',
            message: 'Buku gagal ditambahkan'
        })
        response.code(500)
        return response
    }
}

module.exports = { addBookHandler }