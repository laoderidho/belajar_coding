const { nanoid } = require('nanoid')
const books = require('./books')

const addBookHandler = (req, h)=>{
    const { name, year, author, summary, publisher, pageCount, readPage, reading, finished } = req.payload;

    const id = nanoid(16)
    
    const insertedAt = new Date().toISOString()
    const updatedAt = insertedAt;

    const newBook = {
        id,
        name,
        year,
        author,
        summary,
        publisher,
        pageCount,
        readPage,
        finished: pageCount === readPage,
        reading,
        insertedAt,
        updatedAt,
    };
    
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
    books.push(newBook);
    const isSuccess = books.filter((book)=>book.id === id).length > 0
    
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
const getAllBookHandler = () => ({
  status: "success",
  data: {
    books: books.map((book) => ({
      id: book.id,
      name: book.name,
      publisher: book.publisher,
    })),
  },
});


const getBookByIdHandler = (req, h) => {
  const { id } = req.params;

  const book = books.find((book) => book.id === id);

  if (book) {
    return h
      .response({
        status: "success",
        data: {
          book,
        },
      })
      .code(200);
  }

  return h
    .response({
      status: "fail",
      message: "Buku tidak ditemukan",
    })
    .code(404);
};


const editBookByIdHandler = (req, h) => {
  const { id } = req.params;

  const { name, year, author, summary, publisher, pageCount, readPage, reading } = req.payload;

  const updatedAt = new Date().toISOString();

  const index = books.findIndex((book) => book.id === id);

  if(!name){
      const response = h.response({
          status: 'fail',
          message: 'Gagal memperbarui buku. Mohon isi nama buku'
      })
      response.code(400)
      return response
  }

  if(pageCount < readPage){
      const response = h.response({
          status: 'fail',
          message: 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount'
      })
      response.code(400)
      return response
  }

  if(index !== -1){
      books[index] = {
          ...books[index],
          name,
          year,
          author,
          summary,
          publisher,
          pageCount,
          readPage,
          reading,
          updatedAt,
      }
      const response = h.response({
          status: 'success',
          message: 'Buku berhasil diperbarui'
      })
      response.code(200)
      return response
  } else {
      const response = h.response({
          status: 'fail',
          message: 'Gagal memperbarui buku. Id tidak ditemukan'
      })
      response.code(404)
      return response
  }
}

const deleteBookByIdHandler = (req, h) => {
  const { id } = req.params;

  const index = books.findIndex((book) => book.id === id);

  if(index !== -1){
      books.splice(index, 1)
      const response = h.response({
          status: 'success',
          message: 'Buku berhasil dihapus'
      })
      response.code(200)
      return response
  } else {
      const response = h.response({
          status: 'fail',
          message: 'Buku gagal dihapus. Id tidak ditemukan'
      })
      response.code(404)
      return response
  }
}

module.exports = { addBookHandler, getAllBookHandler, getBookByIdHandler, editBookByIdHandler, deleteBookByIdHandler }