function checkForDuplicates(array) {
  return new Set(array).size !== array.length;
}

class Library {
  #books = [];

  get allBooks() {
    return this.#books;
  }

  addBook(title) {
    if (this.#books.includes(title)) {
      console.log("Book already in the library");
    } else {
      this.#books.push(title);
    }
  }

  removeBook(title) {
    if (this.#books.includes(title)) {
      const index = this.#books.indexOf(title);
      this.#books.splice(index, 1);
    } else {
      console.log("Book not found");
    }
  }

  hasBook(title) {
    if (this.#books.includes(title)) {
      return true;
    }
    return false;
  }

  constructor(initialbooks) {
    if (checkForDuplicates(initialbooks)) {
      throw new Error("Array has duplicates");
    }
    this.#books = initialbooks;
  }
}

let library = new Library(["aaaa", "eeee", "fff"]);
console.log(library.allBooks);
library.addBook("hfhffh");
console.log(library.allBooks);
library.removeBook("aaaa");
console.log(library.allBooks);
console.log(library.hasBook("g"));
console.log(library.hasBook("eeee"));
library.addBook("fff");
library.removeBook("ggggg");

let library1 = new Library(["aaaa", "eeee", "fff", "fff"]);
