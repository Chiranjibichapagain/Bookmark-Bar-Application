import { bookmarkData } from "./data.js";
import { createBookmarks } from "./createBookmarks.js";

bookmarkData.map((item) => {
  createBookmarks(item);
});

let copyArr = [...bookmarkData]; // an array to add a new obj that comes form the input, and to be used for rearranging items.

const getInput = () => {
  const nameInput = document.getElementById("nameInput").value;
  const webInput = document.getElementById("webInput").value;

  // making sure that empty items will not be added, rather displays an error
  if (nameInput === "" || webInput === "") {
    document.getElementById("instruction").style.opacity = "100%";
  } else {
    addBookmark(copyArr, nameInput, webInput, createBookmarks)

  }
};

const addBookmark = (arr, name, link, callback) => {
  document.getElementById("instruction").style.opacity = "0%";
  clearData();

  // creating a new object from data inserted form input
  const newData = {
    name: name,
    webpage: link,
    image: "./assets/xxx.png",
  };
  arr = [...arr, newData];
  document.getElementById("nameInput").value = "";
  document.getElementById("webInput").value = "";

  arr.map((item) => {
    callback(item);
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
