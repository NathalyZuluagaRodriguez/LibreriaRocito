document.addEventListener("DOMContentLoaded", () => {
    listBooks(my_Library);

    
});

function sortLibrary() {
    my_Library.sort((a, b) => a.title.localeCompare(b.title));
    displayLibrary();
}


function listBooks(books) {
    books.forEach(myBook => {
        createBook(myBook);
    });
}

function createBook(book) {
    const body = document.getElementById('library');

    const myBook = document.createElement('div');
    myBook.classList.add('book'); 

    const bookPhoto = document.createElement('div')
    bookPhoto.classList.add('book-photo')

    const imgBook = document.createElement('img')
    imgBook.src = book.image

    const title = document.createElement('h2');
    title.textContent = book.title;

    const availability = document.createElement('h4');
    availability.textContent = book.availability;

    const language = document.createElement('h4');
    language.textContent = book.language;

    const description = document.createElement('p')
    description.textContent = book.description;

    const editorial = document.createElement('h4');
    editorial.textContent = book.editorial;

    const author = document.createElement('p');
    author.textContent = book.author;

    const btnBuy = document.createElement('button')
    btnBuy.textContent = 'Comprar';
    btnBuy.addEventListener('click', () => {
        window.location.href = 'templates/formulario.html';
    });

    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'Eliminar';
    deleteButton.addEventListener('click', () => {
        deleteBook(book);
    });

    //
    const editButton = document.createElement('button');
    editButton.textContent = 'Editar Editorial';
    editButton.onclick = function() {
    const newEditorial = prompt("Ingrese el nuevo editorial:", book.editorial);
    if (newEditorial !== null && newEditorial !== "") {
        book.editorial = newEditorial;
        editorial.textContent = book.editorial;
    }
};
    //

    const price = document.createElement('h4');
    price.textContent = `${book.price.toLocaleString()} COP`;

    
    const stock = document.createElement('p');
    stock.textContent = `Stock: ${book.stock}`;

    const stockControls = document.createElement('div');
    stockControls.classList.add('stock-controls');

    const decreaseButton = document.createElement('button');
    decreaseButton.textContent = '-';
    decreaseButton.onclick = () => updateStock(book, stock, -1);

    const increaseButton = document.createElement('button');
    increaseButton.textContent = '+';
    increaseButton.onclick = () => updateStock(book, stock, 1);

    stockControls.appendChild(decreaseButton);
    stockControls.appendChild(increaseButton);


    myBook.appendChild(bookPhoto)

    bookPhoto.appendChild(imgBook);
    myBook.appendChild(title);
    myBook.appendChild(description);
    myBook.appendChild(author);
    myBook.appendChild(price);
    myBook.appendChild(stock);
    myBook.appendChild(stockControls);
    
    //
    myBook.appendChild(editorial);
    myBook.appendChild(editButton);
    //

    myBook.appendChild(btnBuy);
    myBook.appendChild(deleteButton);
    

    body.appendChild(myBook);
    
}

function updateStock(book, stockElement, change) {
    book.stock += change;
    if (book.stock < 0) {
        book.stock = 0;
    }
    stockElement.textContent = `Stock: ${book.stock}`;
}

function displayLibrary() {
    const libraryDiv = document.getElementById('library');
    libraryDiv.innerHTML = '';
    listBooks(my_Library);
}

/* LIBROS MAS COSTOSOS */

function showMostExpensiveBooks() {
    
    const libraryDiv = document.getElementById('library');
    libraryDiv.innerHTML = '';

    
    const sortedBooks = my_Library.sort((a, b) => b.price - a.price);

    
    const mostExpensiveBooks = sortedBooks.slice(0, 5);

    
    mostExpensiveBooks.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');

        const bookPhoto = document.createElement('div');
        bookPhoto.classList.add('book-photo');

        const imgBook = document.createElement('img');
        imgBook.src = book.image;

        const title = document.createElement('h2');
        title.textContent = book.title;

        const btnBuy = document.createElement('button')
        btnBuy.textContent = 'Comprar';
        btnBuy.addEventListener('click', () => {
            window.location.href = 'templates/formulario.html';
        });

        const price = document.createElement('h4');
        price.textContent = `${book.price.toLocaleString()} COP`;

        bookDiv.appendChild(bookPhoto);
        bookPhoto.appendChild(imgBook);
        bookDiv.appendChild(title);
        bookDiv.appendChild(price);
        bookDiv.appendChild(btnBuy);

        libraryDiv.appendChild(bookDiv);
    });
}

/*superan 200 paginas*/
function showBooksOver200Pages() {
    const libraryDiv = document.getElementById('library');
    libraryDiv.innerHTML = '';

    const booksOver200Pages = my_Library.filter(book => book.pages > 200);

    booksOver200Pages.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');

        const bookPhoto = document.createElement('div');
        bookPhoto.classList.add('book-photo');

        const imgBook = document.createElement('img');
        imgBook.src = book.image;

        const title = document.createElement('h2');
        title.textContent = book.title;

        const pages = document.createElement('p')
        pages.textContent = `Paginas: ${book.pages}`;

        const btnBuy = document.createElement('button')
        btnBuy.textContent = 'Comprar';
        btnBuy.addEventListener('click', () => {
            window.location.href = 'templates/formulario.html';
        });

        const price = document.createElement('h4');
        price.textContent = `${book.price.toLocaleString()} COP`;

        bookDiv.appendChild(bookPhoto);
        bookPhoto.appendChild(imgBook);
        bookDiv.appendChild(title);
        bookDiv.appendChild(pages);
        bookDiv.appendChild(price);
        bookDiv.appendChild(btnBuy);

        libraryDiv.appendChild(bookDiv);
    });
}

//libros entre 30000 y 80000
function showBooksInPriceRange() {
    const libraryDiv = document.getElementById('library');
    libraryDiv.innerHTML = '';

    const booksInPriceRange = my_Library.filter(book => book.price >= 30000 && book.price <= 80000);

    booksInPriceRange.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');

        const bookPhoto = document.createElement('div');
        bookPhoto.classList.add('book-photo');

        const imgBook = document.createElement('img');
        imgBook.src = book.image;

        const title = document.createElement('h2');
        title.textContent = book.title;

        const btnBuy = document.createElement('button')
        btnBuy.textContent = 'Comprar';
        btnBuy.addEventListener('click', () => {
            window.location.href = 'templates/formulario.html';
        });

        const price = document.createElement('h4');
        price.textContent = `${book.price.toLocaleString()} COP`;

        bookDiv.appendChild(bookPhoto);
        bookPhoto.appendChild(imgBook);
        bookDiv.appendChild(title);
        bookDiv.appendChild(price);
        bookDiv.appendChild(btnBuy);

        libraryDiv.appendChild(bookDiv);
    });
}


// funcion 10% descuento
function showDiscountedBooks() {
    const libraryDiv = document.getElementById('library');
    libraryDiv.innerHTML = '';

    my_Library.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');

        const bookPhoto = document.createElement('div');
        bookPhoto.classList.add('book-photo');

        const imgBook = document.createElement('img');
        imgBook.src = book.image;

        const title = document.createElement('h2');
        title.textContent = book.title;

        const originalPrice = document.createElement('p');
        originalPrice.textContent = `Precio Original: ${book.price.toLocaleString()} COP`;
        originalPrice.style.textDecoration = 'line-through';

        // formula
        const discountedPrice = document.createElement('h4');
        const discountFactor = 0.10; // descuento
        const finalPrice = book.price * (1 - discountFactor);
        discountedPrice.textContent = `Precio con Descuento: ${finalPrice.toLocaleString()} COP`;

        const btnBuy = document.createElement('button');
        btnBuy.textContent = 'Comprar';
        btnBuy.addEventListener('click', () => {
            window.location.href = 'templates/formulario.html';
        });

        bookDiv.appendChild(bookPhoto);
        bookPhoto.appendChild(imgBook);
        bookDiv.appendChild(title);
        bookDiv.appendChild(originalPrice);
        bookDiv.appendChild(discountedPrice);
        bookDiv.appendChild(btnBuy);

        libraryDiv.appendChild(bookDiv);
    });
}


// buscar de libros
function searchBooks() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const libraryDiv = document.getElementById('library');
    libraryDiv.innerHTML = '';

    const filteredBooks = my_Library.filter(book => book.title.toLowerCase().includes(searchInput));

    if (filteredBooks.length === 0) {
        libraryDiv.innerHTML = '<p>No se encontraron libros que coincidan con la búsqueda.</p>';
    } else {
        filteredBooks.forEach(book => {
            const bookDiv = document.createElement('div');
            bookDiv.classList.add('book');

            const bookPhoto = document.createElement('div');
            bookPhoto.classList.add('book-photo');

            const imgBook = document.createElement('img');
            imgBook.src = book.image;

            const title = document.createElement('h2');
            title.textContent = book.title;

            const description = document.createElement('p');
            description.textContent = book.description;

            const author = document.createElement('p');
            author.textContent = book.author;

            const price = document.createElement('h4');
            price.textContent = `${book.price.toLocaleString()} COP`;

            const btnBuy = document.createElement('button');
            btnBuy.textContent = 'Comprar';
            btnBuy.addEventListener('click', () => {
                window.location.href = 'templates/formulario.html';
            });

            bookDiv.appendChild(bookPhoto);
            bookPhoto.appendChild(imgBook);
            bookDiv.appendChild(title);
            bookDiv.appendChild(description);
            bookDiv.appendChild(author);
            bookDiv.appendChild(price);
            bookDiv.appendChild(btnBuy);

            libraryDiv.appendChild(bookDiv);
        });
    }
}
function deleteBook(book) {
    const index = my_Library.indexOf(book);
    if (index > -1) {
        my_Library.splice(index, 1);
        alert(`El libro "${book.title}" ha sido eliminado.`);
    }
    displayLibrary();
}


