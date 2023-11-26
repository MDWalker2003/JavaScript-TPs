class Book {
    #title;
    #author;
    #isbn;
    #status;

    constructor(title, author, ISBN, status) {
        this.#title = title;
        this.#author = author;
        this.#isbn = ISBN;
        this.#status = status;
    }

    getTitle() {
        return this.#title;
    }

    getAuthor() {
        return this.#author;
    }

    getISBN() {
        return this.#isbn;
    }

    getStatus() {
        return this.#status;
    }

    setTitle(title) {
        this.#title = title;
    }

    setAuthor(author) {
        this.#author = author;
    }

    setISBN(ISBN) {
        this.#isbn = ISBN;
    }

    setStatus(status) {
        this.#status = status;
    }
}

class Person {
    #name;
    #dob;

    constructor(name, dob) {
        this.#name = name;
        this.#dob = dob;
    }

    getName() {
        return this.#name;
    }

    getDOB() {
        return this.#dob;
    }
}

class Author extends Person {
    #bibliography;

    constructor(name, dob) {
        super(name, dob);
        this.#bibliography = [];
    }

    addBookToBibliography(book) {
        this.#bibliography.push(book);
    }

    getBibliography() {
        return this.#bibliography;
    }
}

class User {
    #id;
    #name;

    constructor(id, name) {
        this.#id = id;
        this.#name = name;
    }

    getId() {
        return this.#id;
    }

    getName() {
        return this.#name;
    }
}

class Member extends User {
    #borrowedBooks;

    constructor(id, name) {
        super(id, name);
        this.#borrowedBooks = [];
    }

    borrowBook(book) {
        this.#borrowedBooks.push(book);
        console.log(`${this.getName()} has borrowed the book "${book.getTitle()}".`);
    }

    returnBook(book) {
        const index = this.#borrowedBooks.indexOf(book);
        if (index !== -1) {
            this.#borrowedBooks.splice(index, 1);
            console.log(`${this.getName()} has returned the book "${book.getTitle()}".`);
        } else {
            console.log(`${this.getName()} did not borrow the book "${book.getTitle()}".`);
        }
    }

    getBorrowedBooks() {
        return this.#borrowedBooks;
    }
}

class Librarian extends User {
    addBookToLibrary(book, library) {
        library.addBook(book);
        console.log(`Librarian ${this.getName()} has added the book "${book.getTitle()}" to the library.`);
    }

    checkBookStatus(book, library) {
        const status = library.getBookStatus(book);
        console.log(`Book "${book.getTitle()}" is currently ${status}.`);
    }
}

class Library {
    #books;
    #users;

    constructor() {
        this.#books = [];
        this.#users = [];
    }

    addUser(user) {
        this.#users.push(user);
    }

    addBook(book) {
        this.#books.push(book);
    }

    borrowBook(user, book) {
        if (user instanceof Member) {
            const index = this.#books.indexOf(book);
            if (index !== -1) {
                this.#books.splice(index, 1);
                user.borrowBook(book);
                console.log(`Book "${book.getTitle()}" has been borrowed.`);
            } else {
                console.log(`Book "${book.getTitle()}" is not available.`);
            }
        } else {
            console.log(`${user.getName()} is not authorized to borrow books.`);
        }
    }

    returnBook(user, book) {
        if (user instanceof Member) {
            const index = this.#books.indexOf(book);
            if (index === -1) {
                this.#books.push(book);
                user.returnBook(book);
                console.log(`Book "${book.getTitle()}" has been returned.`);
            } else {
                console.log(`Invalid return. Book "${book.getTitle()}" is already in the library.`);
            }
        } else {
            console.log(`${user.getName()} is not authorized to return books.`);
        }
    }

    getBookStatus(book) {
        const index = this.#books.indexOf(book);
        return index !== -1 ? "Available" : "Not Available";
    }

    getBibliography() {
        return this.#books;
    }
}

// Example usage

const library = new Library();
const author = new Author("John Doe", "01-01-1980");
const book = new Book("The Great Novel", author, "1234567890", "Available");
const member = new Member("Alice", "123");
const librarian = new Librarian("Librarian Bob", "456");

library.addBook(book);
author.addBookToBibliography(book);
library.addUser(member);
library.addUser(librarian);

library.borrowBook(member, book);
library.returnBook(member, book);
library.borrowBook(librarian, book);
