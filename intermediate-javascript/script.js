

function Book(title=null, author=undefined, pages=0, read=false) {
  if (!new.target) {
    throw Error("Please declare the object with new.");
  }
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.read = read
}

const bookNull = new Book();
// The Hobbit by J.R.R. Tolkien, 295 pages, not read yet
const bookTheHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);