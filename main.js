const dialog = document.querySelector("dialog");

document.querySelector(".new-book").addEventListener("click", () => {
  dialog.showModal();
});

document.querySelector(".cancel").addEventListener("click", () => {
  dialog.close();
});

document.querySelector(".add").addEventListener("click", () => {
  // do smth
  dialog.close();
});
