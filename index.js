function fetchBooks(books) {
  fetch("https://anapioficeandfire.com/api/books")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data)
      renderBooks(data)
    })
    .catch(function(error) {
      console.log(error)
    })
   

}
function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
