//books array
let books = [
    {
        id: 0,
        title: 'Harry Potter and the Prisoner of Azkaban',
        author: 'JK Rowling',
    },
    {
        id: 1,
        title: 'The DaVinci Code',
        author: 'Dan Brown',
    },
    {
        id: 2,
        title: 'Harry Potter Deathly Hallows',
        author: 'JK Rowling',
    },
    {
        id: 3,
        title: 'Deception Point',
        author: 'Dan Brown',
    },
    {
        id: 4,
        title: 'Angels and Demons',
        author: 'Dan Brown',
    },
];

//local storage goes here
function saveBooksToStorage() {
    localStorage.setItem('book', JSON.stringify(books));
}
  
function getFromStoredBooks() {
    const storedBooks = localStorage.getItem('book');
    if (storedBooks) {
      books = JSON.parse(storedBooks);
    }
}

//calling dom elements
const inputTitle = document.querySelector('.txtTitle')
const inputAuthor = document.querySelector('.txtAuthor')
const addBooks = document.querySelector('.addBook')
const booksList = document.querySelector('.books-list')

//display books in books array and add remove button function
const display = () => {
    books.forEach((book) => {
        
        const saveBook = document.createElement('div')
        saveBook.classList.add('books')
        saveBook.innerHTML += `<h3>${book.title}</h3><p>${book.author}</p>`;

        //adding remove button
        const removeButton = document.createElement('button')
        removeButton.classList.add('removeBtn')
        removeButton.innerHTML = "Remove"
        // remove.appendChild(removeButton)
        saveBook.appendChild(removeButton)
        booksList.appendChild(saveBook)
    });

    const remover = document.querySelectorAll('.removeBtn')
    remover.forEach((del, index) => {
        del.addEventListener('click', () => {
            // booksList.removeChild()
            //check books array against index condition
            books=books.filter((book) => book.id !== index) 
            // books = books.splice(index, 1)
            console.log(books)
            //delete element from parent node
            const removeEl = del.parentNode
            removeEl.remove()
        })
    })
}

//button to add books
addBooks.addEventListener('click', (e) => {
    if (inputTitle.value === '' || inputAuthor.value === '') return;
    //prevent page from reloading
    e.preventDefault() 

    // when book added id increments
    let id = books.length
    books.forEach((test) => {
        while (test.id === id) {
            id += 1;
        }
    });
    console.log(id, books)

    //append added books to obj and html
    const title = inputTitle.value;
    const author = inputAuthor.value;

    console.log(title, author)

    const newAddition = { id, title, author }
    books.push(newAddition)

    inputTitle.value = '';
    inputAuthor.value = '';
    booksList.innerHTML = '';

    console.log(newAddition, books)
    display()
    saveBooksToStorage()
});

//when window loads do the following
window.onload = () => {
    getFromStoredBooks()
    display();
    saveBooksToStorage()
    
}