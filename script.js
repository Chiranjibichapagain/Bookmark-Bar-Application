import { bookmarkData } from "./data.js";


const copyArr=[...bookmarkData]
const getInput = () => {
  clearData();
  const nameInput = document.getElementById("nameInput").value;
  const webInput = document.getElementById("webInput").value;

  if (nameInput === "" || webInput === "") {
    document.getElementById("instruction").style.opacity = "100%";
  } else {
    document.getElementById("instruction").style.opacity = "0%";

    const data = [...bookmarkData];
    const newData = { name: "", webpage: "", image: "./assets/web.png" };
    newData.name = nameInput;
    newData.webpage = webInput;
    copyArr.concat(newData)
    const newArr = data.concat(newData);
    document.getElementById("nameInput").value = "";
    document.getElementById("webInput").value = "";

    newArr.map((item) => {
      createBookmarks(item);
    });
  }
};

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

// event handlers fro getting input data and submit

document.getElementById("button").addEventListener("click", getInput);
document.getElementById("suffle").addEventListener("click", rearrange);
