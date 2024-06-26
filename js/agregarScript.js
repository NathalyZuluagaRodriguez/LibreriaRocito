        
    // Agregar Libros
    let Books = [];

    document.getElementById('agregarLibroForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        let Book = {
            nombre: document.getElementById('nombre').value,
            titulo: document.getElementById('titulo').value,
            autor: document.getElementById('autor').value,
            genero: document.getElementById('genero').value,
            idioma: document.getElementById('idioma').value,
            precio: document.getElementById('precio').value,
            formato: document.getElementById('formato').value,
            isbn: document.getElementById('isbn').value,
            descripcion: document.getElementById('descripcion').value,
            estado: document.getElementById('estado').value,
            fecha_publicacion: document.getElementById('fecha_publicacion').value,
            editorial: document.getElementById('editorial').value,
            paginas: document.getElementById('paginas').value,
        };
        
        Books.push(Book);
        
        updateBookList();
        alert('Libro agregado exitosamente');
        document.getElementById('agregarLibroForm').reset();
    });
    
    function updateBookList() {
        const contenedorLibros = document.getElementById('AgregarLibros');
        contenedorLibros.innerHTML = '';
        
        Books.forEach((Book, index) => {
            const libroElemento = document.createElement('div');
            libroElemento.className = 'libro';
            libroElemento.innerHTML = `
                <h3>${Book.titulo}</h3>
                <p><strong>Autor:</strong> ${Book.autor}</p>
                <p><strong>Género:</strong> ${Book.genero}</p>
                <p><strong>Idioma:</strong> ${Book.idioma}</p>
                <p><strong>Precio:</strong> ${Book.precio}</p>
                <p><strong>Formato:</strong> ${Book.formato}</p>
                <p><strong>ISBN:</strong> ${Book.isbn}</p>
                <p><strong>Descripción:</strong> ${Book.descripcion}</p>
                <p><strong>Estado:</strong> ${Book.estado}</p>
                <p><strong>Fecha de Publicación:</strong> ${Book.fecha_publicacion}</p>
                <p><strong>Editorial:</strong> ${Book.editorial}</p>
                <p><strong>Número de Páginas:</strong> ${Book.paginas}</p>
            `;
            contenedorLibros.appendChild(libroElemento);
        });
    }
   