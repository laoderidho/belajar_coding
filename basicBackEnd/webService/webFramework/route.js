const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Homepage';
        },
    },
    {
        method: '*',
        path: '/{any*}',
        handler: (request, h) => {
            return 'Halaman tidak ditemukan';
        }
    },
    {
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return 'About Page';
        },
    }, 
    {
        method: 'GET',
        path: '/hello/{name?}',
        handler: (request, h) => {
            //path name means that the parameter is optional
            const { name = "stranger" } = request.params;
            const { lang } = request.query;

            if(lang === 'id') {
                return `Hai, ${name}!`;
            }

            return `Hello, ${name}!`;
        }
    },
    {
        method: 'POST',
        path: '/login',
        handler: (request, h) => {
            //di sini kita akan memproses permintaan yang dikirimkan oleh client
            const { username, password } = request.payload;
            return `Welcome ${username}!`;
        }
    }
]

module.exports = routes;