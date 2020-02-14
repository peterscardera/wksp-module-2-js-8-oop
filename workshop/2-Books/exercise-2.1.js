// Exercise 2.1
// ------------

// Create a Book class and then intantiate it 5 times with various books
// include the following properties in the constructor
//      - title, genre, author, read, startReadDate, endReadDate
// Declare the books as book1, book2, book3, book4, book5
//
// Remember that it isn't necessary to pass arguments for all of the parameters.
// if you haven't read the book, there should not be a startReadDate or endReadDate
//
// Console.log them to verify that all is working.

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

let book1 = new Book("Head First JavaScript Programming", "Programming", "Eric Freeman", "partially", "Feb")
let book2 = new Book("Eloquent JavaScript", "Programming", "Marijn Haverbeke")
let book3 = new Book("Flash Boys", "Finance","Michael Lewis", "Fully","Dec","Jan")
let book4 = new Book("Talking to Strangers", "Communication","Malcom Gladwell", "Fully","Nov","Jan")
let book5 = new Book("Atomic Habit","self-improvement", "James Clear")


console.log(book1, book2, book3, book4, book5); 