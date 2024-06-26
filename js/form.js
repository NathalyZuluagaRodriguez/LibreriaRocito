 
    // Formulario de datos personales
    document.getElementById('personalDataForm').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Gracias por llenar el formulario de datos personales');
        document.getElementById('personalDataForm').reset();
    });