import EBook from "./Ebook.js";
import Book from "./Book.js";

const book1 = new Book("Solo Leveling", "Maksym Nazarok", 1997);
const book2 = new Book("titleName", "authorName", 1995);
const book3 = new Book("titleName1", "authorName1", 1999);

book1.printInfo();
book2.printInfo();
book3.printInfo();



const eBook1 = new EBook("titleName2", "authorName2", 1800, "Format");


eBook1.printInfo();


const booksArray = [book1, book2, book3, eBook1];

const oldestBook = Book.getOldestBook(booksArray);
console.log("Найдавніша книга:");
oldestBook.printInfo();

const convertedEBook = EBook.convertToEBook(book1, "MOBI");
console.log("Конвертована книга:");
convertedEBook.printInfo();