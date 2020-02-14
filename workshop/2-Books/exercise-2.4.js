// From 2.3
// Copy over all of the code from 2.3...

// Exercise 2.4
// We need methods in our BookList start reading and finish reading books
//      - startReading accepts a title parameter. (The book should already be in your books array.
//          - set currentlyReading
//          - set the startReadDate in the book object to new Date(Date now());
//      - finishREading accepts a title parameter.
//          - set lastRead to title
//          - update the book's object accordingly.
//          - update the read and unread count accordingly.

// console.log(homeLibrary) when you're done adding, starting and finishing books.
// Make sure that your changes are reflected in the homeLibrary.
class Book {
    constructor(title, genre, author, read, startReadDate, endReadDate) {
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = read || false;
        this.startReadDate = startReadDate || null;
        this.endReadDate = endReadDate || null;
    }
}
class BookList {
    constructor(){
        this.booksRead = 0;
        this.bookUnread = 0;
        this.books = [];
        this.recentlyRead = null;
        this.currentlyReading = null;
        this.upNext = null;
    }
    add = (book) => {
        this.books.push(book);
        if(book.read) {
            this.booksRead += 1;
        }else{
            this.bookUnread += 1;
        }
    }
    startReading = (title) => {
        this.currentlyReading = title;
        let book = this.books.find(book => book.title === title);
        book.startReadDate = new Date(Date.now());
    }
    finishReading = (title) => {
        this.recentlyRead = title;
        let book = this.books.find(book => book.title === title);
        book.endReadDate = new Date(Date.now());
        book.read = true;
        this.read += 1;
        this.unread -= 1;
    }
}
let homeLibrary = new BookList()
homeLibrary.add(new Book("Head First JavaScript Programming", "Programming", "Eric Freeman", "fully", "Feb"));


homeLibrary.add(new Book("Eloquent JavaScript", "Programming", "Marijn Haverbeke")) ;
homeLibrary.add(new Book("Flash Boys", "Finance","Michael Lewis", "Fully","Dec","Jan"));
homeLibrary.add(new Book("Talking to Strangers", "Communication","Malcom Gladwell", "Fully","Nov","Jan"));
homeLibrary.add(new Book("Atomic Habit","self-improvement", "James Clear"));

homeLibrary.startReading("Atomic Habit")
homeLibrary.finishReading("Flash Boys")
console.log(homeLibrary)