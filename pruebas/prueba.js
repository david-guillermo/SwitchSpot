// script.js
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Aquí puedes enviar los datos al servidor para la autenticación
    fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Redirigir a la página principal o mostrar mensaje de éxito
            window.location.href = '/dashboard';
        } else {
            // Mostrar mensaje de error
            alert('Error: ' + data.message);
        }
    })
    .catch(error => console.error('Error:', error));
});


// app.js
const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Usuarios simulados (en un proyecto real, utilizarías una base de datos)
const users = [
    { id: 1, email: '', password: 'password' } // Nota: en un entorno real, nunca guardes contraseñas en texto plano
];

// Ruta de inicio de sesión
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email && u.password ===password );
    
    if (user) {
        // Crear un token JWT
        const token = jwt.sign({ id: user.id, email: user.email }, 'secretKey', { expiresIn: '1h' });
        res.json({ success: true, token });
    } else {
        res.status(401).json({ success: false, message: 'Correo o contraseña incorrectos' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
