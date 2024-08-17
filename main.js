const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.toggleReadStatus = function () {
  this.read = !this.read;
};

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
    <div class="card">
      <p>${book.title} by ${book.author}</p>
      <p>${book.pages} pages</p>
      <p>${book.read ? "read" : "not read"}</p>
      <button class="read" data-index="${index}">${
      book.read ? "Mark as Unread" : "Mark as Read"
    }</button>
      <button class="delete" data-index="${index}">Delete</button>
    </div>`;
  });
  document.querySelector(".result").innerHTML = html;

  document.querySelectorAll(".delete").forEach((deleteBtn) => {
    deleteBtn.addEventListener("click", () => {
      const { index } = deleteBtn.dataset;
      myLibrary.splice(index, 1);
      renderBooks();
    });
  });
  document.querySelectorAll(".read").forEach((readBtn) => {
    readBtn.addEventListener("click", () => {
      const { index } = readBtn.dataset;
      myLibrary[index].toggleReadStatus();
      renderBooks();
    });
  });
}

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
