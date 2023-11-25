// Exercise 3
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

    // Getters and setters for Book properties
}

class Person {
    #name;
    #age;

    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }
}

class Author extends Person {
    #books;

    constructor(name, age, books) {
        super(name, age);
        this.#books = books || [];
    }

    addBook(book) {
        this.#books.push(book);
    }

    get bibliography() {
        return this.#books;
    }
}

// Exercise 4
class User {
    #id;
    #name;

    constructor(id, name) {
        this.#id = id;
        this.#name = name;
    }

    get id() {
        return this.#id;
    }

    get name() {
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
        console.log(`${this.name} has borrowed the book "${book.title}".`);
    }

    returnBook(book) {
        const index = this.#borrowedBooks.indexOf(book);
        if (index !== -1) {
            this.#borrowedBooks.splice(index, 1);
            console.log(`${this.name} has returned the book "${book.title}".`);
        } else {
            console.log(`${this.name} did not borrow the book "${book.title}".`);
        }
    }
}

class Librarian extends User {
    addBookToLibrary(book, library) {
        library.addBook(book);
        console.log(`Librarian ${this.name} has added the book "${book.title}" to the library.`);
    }

    checkBookStatus(book, library) {
        const status = library.getBookStatus(book);
        console.log(`Book "${book.title}" is currently ${status}.`);
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
                console.log(`Book "${book.title}" has been borrowed.`);
            } else {
                console.log(`Book "${book.title}" is not available.`);
            }
        } else {
            console.log(`${user.name} is not authorized to borrow books.`);
        }
    }

    returnBook(user, book) {
        if (user instanceof Member) {
            const index = this.#books.indexOf(book);
            if (index === -1) {
                this.#books.push(book);
                user.returnBook(book);
                console.log(`Book "${book.title}" has been returned.`);
            } else {
                console.log(`Invalid return. Book "${book.title}" is already in the library.`);
            }
        } else {
            console.log(`${user.name} is not authorized to return books.`);
        }
    }

    getBookStatus(book) {
        const index = this.#books.indexOf(book);
        return index !== -1 ? "Available" : "Not Available";
    }

    get bibliography() {
        return this.#books;
    }
}

// Exercise 5
const library = new Library();
const author1 = new Author("John Doe", 40);
const book1 = new Book("The Great Novel", "John Doe", "1234567890", "Available");
const member1 = new Member("Alice", 25);
const librarian1 = new Librarian("Librarian Bob", 30);

library.addBook(book1);
author1.addBook(book1);
library.addUser(member1);
library.addUser(librarian1);

library.borrowBook(member1, book1);
library.returnBook(member1, book1);
library.borrowBook(librarian1, book1); // Librarians can't borrow books

console.log("Books in Library:", library.bibliography);
console.log("Member's Borrowed Books:", member1.bibliography);
console.log("Librarian's Borrowed Books:", librarian1.bibliography);
