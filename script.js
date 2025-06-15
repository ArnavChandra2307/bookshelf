document.addEventListener("DOMContentLoaded", () => {
  const books = [
    {
      title: "Silence shows Everything",
      description: "Silence Shows Everything is a heart-touching journey into the life of an average grader — someone who isn’t a topper, isn’t a failure, but lives quietly in the middle...",
      cover: "covers/silence.jpg",
      page: "books/silence.html"
    },
    {
      title: "Silent Script: Magical Words OF Transformation",
      description: "My name is Aradhya Gupta, and I have always believed in the quiet magic that words carry...",
      cover: "covers/silentscript.png",
      page: "books/silentscript.html"
    }
  ];

  const grid = document.getElementById("bookGrid");

  books.forEach((book, index) => {
    const card = document.createElement("a");
    card.className = "book-card";
    card.href = book.page;
    card.target = "_blank"; // opens in new tab
    card.style.animationDelay = `${index * 0.2}s`;

    card.innerHTML = `
      <img src="${book.cover}" alt="${book.title}" />
      <div class="book-info">
        <h3>${book.title}</h3>
        <p>${book.description}</p>
      </div>
    `;

    grid.appendChild(card);
  });
});
