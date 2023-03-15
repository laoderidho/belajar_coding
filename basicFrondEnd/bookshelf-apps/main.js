const bookData = []
const RENDER_EVENT = 'render_book'

const SAVE_MY_DATA_BOOK = 'save_book'
const storageDataBook = 'MY_DATA_BOOK'


document.addEventListener('DOMContentLoaded', ()=>{
    const submit = document.getElementById("inputBook").addEventListener('submit', (e)=>{
        e.preventDefault()
        addBook()
    })

    const searching = document.getElementById("searchBook").addEventListener('submit', (e)=>{
        e.preventDefault()
        getSearching()
    })

    if(checkStorage()){
        loadDataFromStorage()
    }
})

const addBook = ()=>{
    const getId = ID()
    const getTitle = document.getElementById("inputBookTitle").value
    const getAuthor = document.getElementById("inputBookAuthor").value
    const getYear = document.getElementById("inputBookYear").value
    const getInCompleted = document.getElementById("inputBookIsComplete")


    const setBookData = setDataObj(getId, getTitle, getAuthor, getYear, false)

    if(getInCompleted.checked){
            setBookData.isComplete = true
    }else{
            setBookData.isComplete = false
    }

    bookData.push(setBookData)
    
    document.dispatchEvent(new Event(RENDER_EVENT));
    saveBookData()
}


const setDataObj = (id, title, author, year, isComplete)=>{
    return {
        id,
        title,
        author,
        year,
        isComplete
    }
}

document.addEventListener(RENDER_EVENT, ()=>{
    console.log(bookData)

    const getInCompleted = document.getElementById("incompleteBookshelfList");
    getInCompleted.innerHTML = '';

    const getCompleted = document.getElementById("completeBookshelfList")
    getCompleted.innerHTML = ''

    for(let getData of bookData){
        const element = createDataBook(getData);
        if(getData.isComplete){
            getCompleted.append(element)
        }else{
            getInCompleted.append(element)
        }
    }
})

document.addEventListener(SAVE_MY_DATA_BOOK, ()=>{
    console.log(localStorage.getItem(storageDataBook));
});

const ID = () => + new Date()

const createDataBook = (dataBook)=>{

    const setArticle = document.createElement('article')
    setArticle.setAttribute("class", "book_item");
 
    const setTitle = document.createElement('h3')
    setTitle.setAttribute('class', "TitleBook")
    setTitle.innerText = dataBook.title

    const setAuthor = document.createElement('p')
    setAuthor.innerText = 'Author: ' + dataBook.author

    const setYear = document.createElement('p')
    setYear.innerText = 'Publication Year: ' + dataBook.year

    const ButtonDiv = document.createElement('div')
    ButtonDiv.setAttribute('class', 'action')

    if(dataBook.isComplete){
        const buttonIncomplete = document.createElement("button");
        buttonIncomplete.setAttribute("class", "green");
        buttonIncomplete.innerText = "Belum selesai di Baca";

        buttonIncomplete.addEventListener('click', ()=>{
            setIncompleteBook(dataBook.id)
        })

        const buttonTrash = document.createElement("button");
        buttonTrash.setAttribute("class", "red");
        buttonTrash.innerText = "Hapus Buku";

        buttonTrash.addEventListener('click', ()=>{
            removeData(dataBook.id)
        })

        ButtonDiv.append(buttonIncomplete, buttonTrash);
        setArticle.append(setTitle, setAuthor, setYear, ButtonDiv);
    }else{
         const buttonCompleted = document.createElement("button");
         buttonCompleted.setAttribute("class", "green");
         buttonCompleted.innerText = "sudah selesai di Baca";

         buttonCompleted.addEventListener('click', ()=>{
            setCompleteBook(dataBook.id)
         })

         const buttonTrash = document.createElement("button");
         buttonTrash.setAttribute("class", "red");
         buttonTrash.innerText = "Hapus Buku";

         buttonTrash.addEventListener("click", () => {
           removeData(dataBook.id);
         });

         ButtonDiv.append(buttonCompleted, buttonTrash);
         setArticle.append(setTitle, setAuthor, setYear, ButtonDiv)
    }


    
    return setArticle
}

const removeData = (bookId)=>{
    const target = findBookId(bookId)

    if(target === -1) return;
    
    bookData.splice(target, 1)
    document.dispatchEvent(new Event(RENDER_EVENT));

    saveBookData();
}

const findBookId = (bookItem)=>{
    for (let i in bookData){
        if(bookData[i].id === bookItem){
            return i
        }
    }

    return -1
}

const setCompleteBook = (bookId)=>{
    const target = findBook(bookId)

    if(target === null) return

    target.isComplete = true

    document.dispatchEvent(new Event(RENDER_EVENT));
    saveBookData()
}

const findBook = (bookItem)=>{
    for(let i of bookData){
        if(i.id === bookItem){
            return i
        }
    }
    return null
}

const setIncompleteBook = (bookId)=>{
    const target = findBook(bookId)

    if(target=== null) return 

    target.isComplete = false
    
    document.dispatchEvent(new Event(RENDER_EVENT))
    saveBookData()
}

const getSearching = ()=>{
    let searchValue = document.getElementById("searchBookTitle").value.toLowerCase()
    const getTitle = Array.from(document.querySelectorAll(".book_item .TitleBook")).map(item=> {
        const getItem = item.textContent.toLocaleLowerCase()

        if(getItem.indexOf(searchValue) != -1){
            item.parentElement.style.display = 'block'
        }else{
            item.parentElement.style.display = 'none'
        }
    })

    console.log(getTitle)
}

const checkStorage = ()=>{
    if(typeof (Storage) === "undefined"){
        alert('local storage not valid')
        return false
    }
    return true
}

const saveBookData = ()=>{
    if(checkStorage()){
        const parseDataBook = JSON.stringify(bookData)
        localStorage.setItem(storageDataBook, parseDataBook)

        document.dispatchEvent(new Event(SAVE_MY_DATA_BOOK))
    }
}

const loadDataFromStorage= ()=>{
    const loadMyData = localStorage.getItem(storageDataBook)
    let myDataBook = JSON.parse(loadMyData)

    if(myDataBook !== null){
        for(let i of myDataBook){
            bookData.push(i)
        }
    }

    document.dispatchEvent(new Event(RENDER_EVENT))
}