import { bookmarkData } from "./data.js";

const copyArr = [...bookmarkData]; // an array to add a new obj that comes form the input, and to be used for rearranging items.
const getInput = () => {
  const nameInput = document.getElementById("nameInput").value;
  const webInput = document.getElementById("webInput").value;

  // making sure that empty items will not be added, rather displays an error
  if (nameInput === "" || webInput === "") {
    document.getElementById("instruction").style.opacity = "100%";
  } else {
    document.getElementById("instruction").style.opacity = "0%";
    clearData(); // to prevent adding new set of items while old exists in the UI, function is created below

    // creating a new object from data inserted form input
    const data = [...bookmarkData];
    const newData = { name: "", webpage: "", image: "./Assets/xxx.png" };
    newData.name = nameInput;
    newData.webpage = webInput;
    copyArr.push(newData);
    const newArr = data.concat(newData);

    // clearing up the input field
    document.getElementById("nameInput").value = "";
    document.getElementById("webInput").value = "";

    // displaying the items via createBookmarks function
    newArr.map((item) => {
      createBookmarks(item);
    });
  }
};

// clearing up function
function clearData() {
  document.querySelectorAll(".bookmarkItem").forEach(function (a) {
    a.remove();
  });
}

// function to create a bookmark item consisting img, text and link
const createBookmarks = (obj) => {
  const bookmarkItem = document.createElement("a");
  bookmarkItem.className = "bookmarkItem";
  bookmarkItem.href = obj.webpage;
  const icon = document.createElement("img");
  icon.className = "icon";
  icon.src = obj.image;
  const pageName = document.createElement("p");
  pageName.className = "pageName";
  pageName.textContent = obj.name;

  bookmarkItem.appendChild(icon);
  bookmarkItem.appendChild(pageName);
  document.getElementById("bookmarks").appendChild(bookmarkItem);
};

bookmarkData.map((item) => {
  createBookmarks(item);
});

// rearranging function
const rearrange = () => {
  clearData();
  const sortedArr = copyArr.sort(() => {
    return 0.5 - Math.random();
  });

  sortedArr.map((item) => {
    createBookmarks(item);
  });
};

rearrange();

// event handlers fro getting input data and submit, and rearranging
document.getElementById("button").addEventListener("click", getInput);
document.getElementById("suffle").addEventListener("click", rearrange);
