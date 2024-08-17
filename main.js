const dialog = document.querySelector("dialog");

document.querySelector(".new-book").addEventListener("click", () => {
  dialog.showModal();
});

document.querySelector(".cancel").addEventListener("click", () => {
  dialog.close();
});

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  addBookToLibrary();
  renderBooks();
  dialog.close();
  form.reset();
});

const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const page = document.querySelector("#page").value;
  const read = document.querySelector("#read").checked;

  const book = new Book(title, author, page, read);
  myLibrary.push(book);
}

function renderBooks() {
  let html = "";
  myLibrary.forEach((book, index) => {
    html += `
    <div class="card" data-index="${index}">
      <p>${book.title} by ${book.author}</p>
      <p>${book.pages} pages</p>
      <p>${book.read ? "read" : "not read"}</p>
      <button class="read">Unread</button>
      <button class="delete">Delete</button>
    </div>`;
  });
  document.querySelector(".result").innerHTML = html;
}
