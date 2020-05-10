import { bookmarkData } from "./data.js";
import { createBookmarks } from "./createBookmarks.js";

bookmarkData.map((item) => {
  createBookmarks(item);
});

let copyArr = [...bookmarkData]; // an array to add a new obj that comes form the input, and to be used for rearranging items.

const getInput = () => {
  const nameInput = document.getElementById("name-input").value;
  const webInput = document.getElementById("web-input").value;
  // making sure that empty items will not be added, rather displays an error
  nameInput === "" || webInput === ""
    ? (document.getElementById("errorMessage").style.opacity = "100%")
    : addBookmark(nameInput, webInput, createBookmarks);
};

console.log("copy arr,", copyArr);
/**
 *
 * @param {1 array} arr Description: list of bookrmarks
 * @param {2 string} name  Bookmark name
 * @param {3 strng} link
 * @param {4 callbackfunction} createBookmark
 */
const addBookmark = (name, link, createBookmark) => {
  document.getElementById("errorMessage").style.opacity = "0%";
  clearData();

  // creating a new object from data inserted form input
  const newData = {
    name: name,
    webpage: link,
    image: "./assets/xxx.png",
  };

  copyArr = [...copyArr, newData];

  document.getElementById("name-input").value = "";
  document.getElementById("web-input").value = "";

  copyArr.map((item) => {
    createBookmark(item);
  });
};

// To prevent adding new set of items while old exists in the UI.
function clearData() {
  document.querySelectorAll(".bookmarkItem").forEach(function (a) {
    a.remove();
  });
}

// Rearranging function
const rearrange = () => {
  clearData();
  const sortedArr = copyArr.sort(() => {
    return 0.5 - Math.random();
  });

  sortedArr.map((item) => {
    createBookmarks(item);
  });
};

// Event handlers fro getting input data and submit, and rearranging
document.getElementById("button").addEventListener("click", getInput);
document.getElementById("suffle").addEventListener("click", rearrange);
