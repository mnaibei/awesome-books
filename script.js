// const { text } = require("stream/consumers");
const inputTitle = document.querySelector('.txtTitle')
const inputAuthor = document.querySelector('.txtAuthor')
const addBooks = document.querySelector('.addBook')

const newBooks = []
const newBooksObj = {}
function Book(name ,title){
    this.name = name;
    this.title = title
}


addBooks.addEventListener('click', (e) => {
    e.preventDefault();

    // const name = inputAuthor.value
    // const title = inputTitle.value

    const bookFunction = new Book(inputAuthor.value, inputTitle.value)

    // newBooksObj.name =inputAuthor.value
    // newBooksObj.title = inputTitle.value

    newBooks.push(bookFunction)
    console.log(bookFunction, newBooks)

    const booksList = document.querySelector('.books-list')

    
    console.log(booksList)


    const mainBooks = document.createElement('div')
    mainBooks.classList.add('main-books-container')

    const mainBooksContainer = document.querySelectorAll('.main-books-container')
    Array.from(mainBooksContainer)
    Array.isArray(mainBooksContainer)

    const save = document.createElement('div')
    save.classList.add('books')

    mainBooks.appendChild(save)
    booksList.appendChild(mainBooks)

    const bookInputTitle = document.createElement('input')
    bookInputTitle.classList.add('text')
    bookInputTitle.type = 'text'
    bookInputTitle.value = bookFunction.title;
    bookInputTitle.setAttribute('readonly', 'readonly')

    save.appendChild(bookInputTitle)

    const bookInputAuthor = document.createElement('input')
    bookInputAuthor.classList.add('text')
    bookInputAuthor.type = 'text'
    bookInputAuthor.value = bookFunction.name;
    bookInputAuthor.setAttribute('readonly', 'readonly')

    save.appendChild(bookInputAuthor)

    const remove = document.createElement('div')
    remove.classList.add('removeBooks')

    const removeButton = document.createElement('button');
    removeButton.classList.add('removeBtn');
    removeButton.innerHTML = 'Remove'

    remove.appendChild(removeButton);
    save.appendChild(remove)

    removeButton.addEventListener('click', () => {
        booksList.removeChild(mainBooks)
        function removeBook(){}
    })

})