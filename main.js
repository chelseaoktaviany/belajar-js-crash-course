const form = document.querySelector("#addForm");
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const descInput = document.querySelector("#description");
const msg = document.querySelector(".msg");
const bookList = document.querySelector("#books");

const onSubmit = (e) => {
  e.preventDefault();

  if (
    titleInput.value === "" ||
    authorInput.value === "" ||
    descInput.value === ""
  ) {
    msg.classList.add("error");
    msg.innerHTML = "Please enter all fields";

    // hiding the error message
    setTimeout(() => msg.remove(), 3000);
  } else {
    // get book list
    const bookList = document.getElementById("books");

    // add a book item and set the id attribute to it
    const bookItem = document.createElement("li");
    bookItem.setAttribute("id", "bookItem");

    // append the book item to the list
    bookList.appendChild(bookItem);

    // get book item
    const book = document.getElementById("bookItem");

    // log the book item
    // console.log(book);

    // add title, author and description element
    const title = document.createElement("h4");
    const author = document.createElement("p");
    const desc = document.createElement("p");

    // setting title, author and description text name
    title.textContent = `${titleInput.value}`;
    author.textContent = `${authorInput.value}`;
    desc.textContent = `${descInput.value}`;

    // append children to the book item
    book.appendChild(title);
    book.appendChild(author);
    book.appendChild(desc);

    // clear fields
    titleInput.value = "";
    authorInput.value = "";
    descInput.value = "";
  }
};

form.addEventListener("submit", onSubmit);
