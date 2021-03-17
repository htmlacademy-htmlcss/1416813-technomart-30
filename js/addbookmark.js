const bookmarkButtons = document.querySelectorAll(".button-bookmark");
const bookmark = document.querySelector(".bookmark-link");
const bookmarkCounterText = document.querySelector(".bookmark-counter");
let bookmarkCounter = 0;

bookmarkButtons.forEach(function (bookmarkButton) {
  bookmarkButton.addEventListener("click", function () {
    bookmark.classList.add("full");
    bookmarkCounter++;
    bookmarkCounterText.textContent = bookmarkCounter;
  })
})
