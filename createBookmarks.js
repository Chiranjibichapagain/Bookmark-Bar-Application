export const createBookmarks = (obj) => {
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