const myLibrary = []

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function() {
       return (this.title + ' by ' + this.author + ', ' + this.pages + ', ' + this.read)
    }
    console.log(this.info())
}

function addBookToLibrary(book) {
    myLibrary.push(book)
    
}

let theHobbit = new Book("The Hobbit", "J.R.R Tolkien", "295 pages", "not read yet")
let gravitysRainbow = new Book("Gravity's Rainbow", "Thomas Pynchon", "760 pages", "read")
let theProphet = new Book("The Prophet", "Kahlil Gibran", "107 pages", "read")

addBookToLibrary(theHobbit);
addBookToLibrary(gravitysRainbow);
addBookToLibrary(theProphet);

const container = document.querySelector('.container')
let bookCard;
let removeBtn;
let bookCards;
let readBtn;
let readStatus = "Not Read Yet";

function displayBooks() {
    myLibrary.forEach((book) => {
    console.log(book.title);
   
    bookCard = document.createElement('div');
    container.appendChild(bookCard);
    bookCard.classList.add("book-card")
    bookCard.setAttribute('index', myLibrary.indexOf(book))
    bookCard.textContent = book.info();
    
    readBtn = document.createElement('button');
    bookCard.appendChild(readBtn);
    readBtn.classList.add('readBtn');
    readBtn.textContent = readStatus;

    removeBtn = document.createElement('button');
    bookCard.appendChild(removeBtn);
    removeBtn.classList.add('removeBtn');
    removeBtn.textContent = 'Remove';    
   
    });
    };

displayBooks();

const addBtn = document.querySelector('.addBtn');
const modal = document.querySelector('.modal');
const submitBtn = document.querySelector('.submitBtn');
const form = document.querySelector('.book-form');
const titleField = form.elements['title'];
const authorField = form.elements['author'];
const pagesField = form.elements['pages'];
const readField = form.elements['read'];

addBtn.addEventListener('click', () => {
    modal.showModal();
    })

form.addEventListener('submit', (event) => {
    event.preventDefault();
    while (container.firstChild) {
        container.removeChild(container.lastChild)
    }
    console.log('time to ball')
    console.log(titleField.value);
    let newBook = new Book(titleField.value, authorField.value, pagesField.value, readField.value);
    addBookToLibrary(newBook);
    displayBooks();
    modal.close();

    bookCards = container.querySelectorAll('.book-card')
 
    bookCards.forEach(removeBtn => removeBtn.addEventListener('click', event => {
    let bookIndex = (event.currentTarget.getAttribute("index"))
    console.log(bookIndex)
    if (event.target.nodeName === 'BUTTON') {
        console.log("remove");
        container.removeChild(bookCards[bookIndex])
        myLibrary.splice(bookIndex, 1);
        bookCards = container.querySelectorAll('.book-card')
        for (i = 0; i < bookCards.length; i++) {
            bookCards[i].setAttribute('index', i);
        }
        }
        
    }

    ))
})

bookCards = container.querySelectorAll('.book-card')
let bookIndex;

bookCards.forEach(removeBtn => removeBtn.addEventListener('click', event => {
    bookIndex = (event.currentTarget.getAttribute("index"))
    console.log(bookIndex)
    if (event.target.nodeName === 'BUTTON') {
        console.log("before remove");
        console.log(bookCards[bookIndex]);
        console.log(myLibrary[bookIndex]);
        console.log(bookCards);
        console.log(myLibrary);


        container.removeChild(bookCards[bookIndex]);
        bookCards = container.querySelectorAll('.book-card')
        myLibrary.splice(bookIndex, 1);
        
        console.log(bookCards[bookIndex]);
        console.log(myLibrary[bookIndex]);

        for (i = 0; i < bookCards.length; i++) {
            bookCards[i].setAttribute('index', i);
        }
        console.log("after remove")
        console.log(bookCards[bookIndex]);
        console.log(myLibrary[bookIndex]);
        console.log(bookCards);
        console.log(myLibrary);
        }
        
    }

))