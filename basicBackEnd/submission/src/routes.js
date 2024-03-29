const { addBookHandler, getAllBookHandler, getBookByIdHandler, editBookByIdHandler, deleteBookByIdHandler } = require('./handler')

const routes = [
    {
        method: 'GET',
        path: '/books',
        handler: getAllBookHandler
    },
    {
        method: 'GET',
        path: '/books/{id}',
        handler: getBookByIdHandler
    },
    {
        method: 'POST',
        path : '/books',
        handler: addBookHandler
    },
    {
        method: 'PUT',
        path: '/books/{id}',
        handler: editBookByIdHandler
    },
    {
        method: 'DELETE',
        path: '/books/{id}',
        handler: deleteBookByIdHandler
    }
]

module.exports = routes;