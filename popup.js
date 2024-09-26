import { getActiveTab } from "./utils.js"; 

const addNewBookmark = (bookmarksElement, bookmark) => {
    const bookmarkTitleElement = document.createElement("div");
    const newBookmarkElement = document.createElement("div");

    const controlsElement = document.createElement("div");

    bookmarkTitleElement.textContent = bookmark.desc;
    bookmarkTitleElement.className = "bookmark-title";

    controlsElement.className = "bookmark-controls";

    newBookmarkElement.id = "bookmark-" + bookmark.time;
    newBookmarkElement.className = "bookmark";
    newBookmarkElement.setAttribute("timestamp", bookmark.time);

    setBookmarkAttributes("play", onPlay, controlsElement);
    setBookmarkAttributes("delete", onDelete, controlsElement);

    newBookmarkElement.appendChild(bookmarkTitleElement);
    newBookmarkElement.appendChild(controlsElement);
    bookmarksElement.appendChild(newBookmarkElement);
};

const viewBookmarks = (currentBookmarks=[]) => {
    const bookmarksElement = document.getElementById("bookmarks");
    bookmarksElement.innerHTML = '';

    if (currentBookmarks.length > 0) {
        for (let i=0 ; i<currentBookmarks.length ; i++) {
            const bookmark = currentBookmarks[i];
            addNewBookmark(bookmarksElement, bookmark);
        }
    } else {
        bookmarksElement.innerHTML = '<i class="row">No bookmarks to show</i>';
    }
};

const onPlay = async e => {
    const bookmarkElement = e.target.closest(".bookmark");
    if (!bookmarkElement) {
        console.log("Bookmark does not exist!");
        return;
    }

    const bookmarkTime = bookmarkElement.getAttribute("timestamp");
    const activeTab = await getActiveTab();

    if (activeTab && activeTab.id) {
        chrome.tabs.sendMessage(activeTab.id, {
            type: "PLAY",
            value: bookmarkTime
        });
    } else {
        console.error('Active tab not found.');
    }
};

const onDelete = async e => {
    const bookmarkElement = e.target.closest(".bookmark");
    
    if (!bookmarkElement) {
        console.error("Bookmark does not exist!");
        return;
    }

    const bookmarkTime = bookmarkElement.getAttribute("timestamp");
    const activeTab = await getActiveTab();

    if (bookmarkElement && bookmarkTime) {
        bookmarkElement.parentNode.removeChild(bookmarkElement);
        
        if (activeTab && activeTab.id) {
            chrome.tabs.sendMessage(activeTab.id, {
                type: "DELETE",
                value: bookmarkTime
            }, viewBookmarks);
        } else {
            console.error('Active tab not found or does not have an ID.');
        }
    } else {
        console.error(`Bookmark with timestamp '${bookmarkTime}' not found.`);
    }
};

const setBookmarkAttributes = (src, eventListener, controlParentElement) => {
    const controlElement = document.createElement("img");

    controlElement.src = "assets/" + src + ".png"
    controlElement.title = src;
    controlElement.addEventListener("click", eventListener);
    controlParentElement.appendChild(controlElement);
};

document.addEventListener("DOMContentLoaded", async () => {
    const activeTab = await getActiveTab();
    const queryParameters = activeTab.url.split("?")[1];
    const urlParameters = new URLSearchParams(queryParameters);

    const currentVideo = urlParameters.get("v");

    if (activeTab.url.includes("youtube.com/watch") && currentVideo) {
        chrome.storage.sync.get([currentVideo], (data) => {
            const currentVideoBookmarks = data[currentVideo] ? JSON.parse(data[currentVideo]) : [];

            viewBookmarks(currentVideoBookmarks);
        })
    } else {
        const container = document.getElementsByClassName("container")[0];

        container.innerHTML = '<div class="title">This is not a Youtube video page.</div>'
    }
});