// script.js

// Array of book objects
const books = [
  // {
  //   title: "Mirror of Truth",
  //   description: "A deep emotional journey into reflections and hidden truths.",
  //   cover: "covers/mirror-of-truth.jpg",
  //   page: "books/mirror-of-truth.html"
  // },
  {
    title: "Silence is Everything",
    description: "Silence Shows Everything is a heart-touching journey into the life of an average grader — someone who isn’t a topper, isn’t a failure, but lives quietly in the middle. Through honest reflections and emotional narratives, the book explores what it truly feels like to be an introvert in a loud world, where only the extremes are noticed and the silent voices are often ignored. Written by a 15-year-old student, this book gives voice to those who may not shine in grades but hold galaxies within their thoughts. Arnav shares real emotions, quiet struggles, and the small joys that often go unseen in school life. From the pressure to perform to the peace in solitude, each chapter tells a story many students will silently relate to. With no desire for fame or profit, this book exists purely to connect, comfort, and celebrate the quiet ones — the ones who feel everything, even when they say nothing",
    cover: "covers/silence.jpg",
    page: "books/silence.html"
  },
  {
    title: "Silent Script: Magical Words OF Transformation",
    description:"My name is Aradhya Gupta, and I have always believed in the quiet magic that words carry. They don’t just speak — they touch, they heal, and they transform. In my own journey through life’s ups and downs, I’ve often turned to words to find clarity, strength, and light. Over the past months, I’ve gathered fragments of thoughts — reflections scribbled in notebooks, moments whispered to the wind, and emotions that echoed in silence. These are not just quotes; they are pieces of my soul, born from lived experiences, deep observations, and a desire to understand the world and myself better. This book is a collection of those moments. Each quote holds within it a lesson I’ve learned, a feeling I’ve embraced, or a truth I’ve uncovered. It’s raw. It’s honest. And most importantly, it’s real. If even one line here resonates with your heart or lights a small fire within you, then this journey has been worth it.",
    cover: "covers/silentscript.png",
    page:"books/silentscript.html",
  }
  // Add more book objects here
];

// Function to load books into the container
function loadBooks() {
  const container = document.getElementById('books-container');
  books.forEach(book => {
    const card = document.createElement('div');
    card.className = 'book-card';
    card.innerHTML = `
      <a href="${book.page}" target="_blank">
        <img src="${book.cover}" alt="${book.title}">
        <div class="book-info">
          <h3>${book.title}</h3>
          <p>${book.description}</p>
        </div>
      </a>
    `;
    container.appendChild(card);
  });
}

// Load books on page load
window.addEventListener('DOMContentLoaded', loadBooks);
