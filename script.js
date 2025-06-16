// Sample Books Data
const books = [
  {
    title: "Silence shows Everything: Life of an Average Grader Introvert",
    imageUrl: "covers/silence.jpg",
    link: "books/silence.html"
  },
  {
    title: "Silent Script: Magical Words OF Transformation",
    imageUrl: "covers/silentscript.png",
    link: "books/silentscript.html"
  }
];

// Populate the book grid
const bookGrid = document.getElementById("bookGrid");
books.forEach((book, index) => {
  const tile = document.createElement("div");
  tile.className = "book-tile";
  tile.innerHTML = `
    <img src="${book.imageUrl}" alt="${book.title}" />
    <div class="book-title">${book.title}</div>
  `;
  tile.addEventListener("click", () => openReadPopup(index));
  bookGrid.appendChild(tile);
});

// Popup control
const popup = document.getElementById("readConfirmPopup");
const readNowBtn = document.getElementById("confirmReadNow");
const notNowBtn = document.getElementById("confirmNotNow");

let selectedBookIndex = null;

function openReadPopup(index) {
  selectedBookIndex = index;
  popup.classList.add("active");

  // Set content
  document.getElementById("popupBookCover").src = books[index].imageUrl;
  document.getElementById("popupBookTitle").textContent = books[index].title;

  // Reset animations
  readNowBtn.classList.remove("animate-jump");
  notNowBtn.classList.remove("animate-sad");
  void readNowBtn.offsetWidth;
  void notNowBtn.offsetWidth;
}

// Hover Effects
readNowBtn.addEventListener("mouseover", () => {
  readNowBtn.classList.remove("animate-jump");
  void readNowBtn.offsetWidth;
  readNowBtn.classList.add("animate-jump");
});

notNowBtn.addEventListener("mouseover", () => {
  notNowBtn.classList.remove("animate-sad");
  void notNowBtn.offsetWidth;
  notNowBtn.classList.add("animate-sad");
});

// Button Actions
readNowBtn.addEventListener("click", () => {
  if (selectedBookIndex !== null) {
    const book = books[selectedBookIndex];
    if (book.link !== "#") {
      window.location.href = book.link;
    } else {
      alert("This book link is coming soon!");
    }
  }
});

notNowBtn.addEventListener("click", () => {
  popup.classList.remove("active");
});
