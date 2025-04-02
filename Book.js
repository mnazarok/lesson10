export default class Book {
    constructor(title, author, year){
    this._title = title
    this._author = author;
    this._year = year;
    };
    
    get title () {
        return this._title;
    };

    set title(value) {
        if (typeof value === "string" && value.trim() !== "") {
            this._title = value;
        } else {
            console.error("Назва книги має бути непорожнім рядком!");
        };
    };

    get author () {
        return this._author;
    };

    set author(value) {
        if (typeof value === "string" && value.trim() !== "") {
            this._author = value;
        } else {
            console.error("Назва автора має бути непорожнім рядком!");
        };
    };

    get year () {
        return this._year;
    }

    set year(value) {
        if (typeof value === "number" && Number.isInteger(value) && value > 0) {
            this._year = value;
        } else {
            console.error("Рік має бути додатним цілим числом!");
        };
    };

    printInfo () {
        console.log(`Name is ${this.title}, author is ${this.author}, year is ${this.year}`);
    };

    static getOldestBook(books) {
        return books.reduce((oldest, book) => (book.year < oldest.year ? book : oldest), books[0]);
    };
    
};



