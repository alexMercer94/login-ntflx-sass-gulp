// Valiate form
const inputs = document.querySelectorAll('form .campo input');

// Add listener to inputs
inputs.forEach((input) => {
    input.addEventListener('blur', validateInput);
});

inputs.forEach((input) => {
    input.addEventListener('input', validateInput);
});

function validateInput(e) {
    const state = ['valido', 'no-valido'];

    let clase;

    if (e.target.value.length === 0) {
        clase = state[1];
    } else {
        clase = state[0];
    }

    e.target.classList.remove(...state);
    e.target.nextElementSibling.classList.remove(...state);
    e.target.classList.add(clase);
    e.target.nextElementSibling.classList.add(clase);

    // Inyectar dinamicamente el div con el error
    if (clase === 'no-valido') {
        if (e.target.parentElement.nextElementSibling.classList[0] !== 'alerta') {
            // Consutruir error
            const errorDiv = document.createElement('div');
            errorDiv.appendChild(document.createTextNode('Este campo es obligatorio'));
            errorDiv.classList.add('alerta');
            // Insertar error
            e.target.parentElement.parentElement.insertBefore(errorDiv, e.target.parentElement.nextElementSibling);
        }
    } else {
        // Limpiar el mensaje de error
        if (e.target.parentElement.nextElementSibling.classList[0] === 'alerta') {
            e.target.parentElement.nextElementSibling.remove();
        }
    }
}

/// Hide or shor span
const showPassBtn = document.querySelector('form .campo span');
showPassBtn.addEventListener('click', (e) => {
    const passInput = document.querySelector('#password');
    if (e.target.classList.contains('mostrar')) {
        // Mostarr texto
        e.target.classList.remove('mostrar');
        e.target.textContent = 'Ocultar';
        passInput.type = 'text';
    } else {
        // Mostar el password
        e.target.classList.add('mostrar');
        // Cambiar texto
        e.target.textContent = 'Mostrar';
        passInput.type = 'password';
    }
});
