// import { bookmarkData } from "./data.js";

const bookmarkData = {
  name: "",
  webpage: "",
};

const getInput = () => {
  const nameInput = document.getElementById("nameInput").value;
  const webInput = document.getElementById("webInput").value;
  bookmarkData.name = nameInput;
  bookmarkData.webpage = webInput;
  createBookmarks(bookmarkData);
  nameInput = "";
  webInput = "";
};

// function to create a bookmark item consisting img, text and link
const createBookmarks = (obj) => {
  const bookmarkItem = document.createElement("a");
  bookmarkItem.className = "bookmarkItem";
  bookmarkItem.href = obj.webpage;
  const pageName = document.createElement("p");
  pageName.className = "pageName";
  pageName.textContent = obj.name;

  bookmarkItem.appendChild(pageName);
  document.getElementById("bookmarks").appendChild(bookmarkItem);
};

// event handlers fro getting input data and submit
// document.getElementById("nameInput").addEventListener("change", getName);
// document.getElementById("webInput").addEventListener("change", getWeb);
document.getElementById("button").addEventListener("click", getInput);
