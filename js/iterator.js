// Ітератор
// Клас Collection, що містить набір книг
class BookCollection {
    constructor() {
      this.books = [];
    }
  
    // Додавання книги в колекцію
    addBook(book) {
      this.books.push(book);
    }
  
    // Створення нового ітератора для колекції книг
    createIterator() {
      return new BookIterator(this.books);
    }
  }
  
  // Клас Ітератор для перебору книг у колекції
  class BookIterator {
    constructor(books) {
      this.books = books;
      this.currentIndex = 0; // Поточний індекс для перебору
    }
  
    // Метод для отримання наступної книги
    next() {
      return this.books[this.currentIndex++];
    }
  
    // Перевірка, чи є ще книги для перебору
    hasNext() {
      return this.currentIndex < this.books.length;
    }
  }
  
  // Використання колекції книг та ітератора
  const myBooks = new BookCollection();
  myBooks.addBook("Clean Code by Robert C. Martin");
  myBooks.addBook("The Pragmatic Programmer by Andrew Hunt and David Thomas");
  myBooks.addBook("JavaScript: The Good Parts by Douglas Crockford");
  
  // Створення ітератора для перебору книг
  const iterator = myBooks.createIterator();
  
  while (iterator.hasNext()) {
    console.log(iterator.next()); // Перебір та виведення назв книг
  }
