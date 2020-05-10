import { bookmarkData } from "./data.js";
import { createBookmarks } from "./createBookmarks.js";

bookmarkData.map((item) => {
  createBookmarks(item);
});

let copyArr = [...bookmarkData]; // a new array to include new obj that comes form the addBookmarkfunction.

const getInput = () => {
  const nameInput = document.getElementById("name-input").value;
  const webInput = document.getElementById("web-input").value;
  // if input field is empty we give error message else we create a new obj and display..
  nameInput === "" || webInput === ""
    ? (document.getElementById("errorMessage").style.opacity = "100%")
    : addBookmark(nameInput, webInput, createBookmarks);
};

const addBookmark = (name, link, createBookmark) => {
  document.getElementById("errorMessage").style.opacity = "0%"; // hiding back the message
  clearData(); // clearing bookmarks to send new list including new bookmark

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
