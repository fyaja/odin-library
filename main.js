const dialog = document.querySelector("dialog");

document.querySelector(".new-book").addEventListener("click", () => {
  dialog.showModal();
});

document.querySelector(".cancel").addEventListener("click", () => {
  dialog.close();
});

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  addBookToLibrary();
  renderBooks();
  dialog.close();
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
  const read = document.querySelector("#read").value;

  const book = new Book(title, author, page, read);
  myLibrary.push(book);
}

function renderBooks() {
  let html = "";
  myLibrary.forEach((book) => {
    html += `
    <div class="card">
      <p>${book.title} by ${book.author}</p>
      <p>${book.page} pages</p>
      <p>${book.read ? "read" : "not read"}</p>
      <button>Unread</button>
    </div>`;
  });
  document.querySelector(".result").innerHTML = html;
}
