import Book from "./Book.js";

export default class EBook extends Book {
    constructor(title, author, year, format) {
        super(title, author, year); 
        this.format = format; 
    };

    printInfo() {
        super.printInfo(); 
        console.log(`Format is ${this.format}`);
    };

    static convertToEBook(book, format) {
        if (book instanceof Book) {
            return new EBook(book.title, book.author, book.year, format);
        } else {
            console.error("Аргумент має бути екземпляром класу Book!");
            return null;
        };
    };
};



// const EBook2 = new EBook("titleName2", "authorName2", 1800, "Format");

// EBook2.author = 123;
// EBook2.printInfo();