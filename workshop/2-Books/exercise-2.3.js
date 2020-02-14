// From 2.1. and 2.2
// Copy over your solutions classes you created in 2.1 and 2.2
// Exercise 2.3
// We need a method in our BookList to make adding books possible.
//  - create an add method to add books to the library.
//      - when you add a book, it should increase the read, or unread count.
//  - use the add method to add in a few books.
//      - you can call new Book without declaring it as variable.
//      - e.g. homeLibrary.add(new Book('The Shining', 'Horror', 'Stephen King'));
// Once you have added a few books, console.log(homeLibrary) to see if all is well.

//SELF REMINDER: **********************************************IMPORTANT EXERCISE*********************************************************************
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
}



let homeLibrary = new BookList()
homeLibrary.add(new Book("Head First JavaScript Programming", "Programming", "Eric Freeman", "fully", "Feb"));

console.log(homeLibrary)
homeLibrary.add(new Book("Eloquent JavaScript", "Programming", "Marijn Haverbeke")) ;
homeLibrary.add(new Book("Flash Boys", "Finance","Michael Lewis", "Fully","Dec","Jan"));
homeLibrary.add(new Book("Talking to Strangers", "Communication","Malcom Gladwell", "Fully","Nov","Jan"));
homeLibrary.add(new Book("Atomic Habit","self-improvement", "James Clear"));


console.log(homeLibrary)