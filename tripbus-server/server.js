// Importar dependencias
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

// Crear la aplicación Express
const app = express();
app.use(bodyParser.json()); // Parsear datos JSON
app.use(cors()); // Habilitar CORS

// Configuración de la base de datos MySQL
const db = mysql.createConnection({
    host: 'localhost', // Cambia según tu configuración
    user: 'root',      // Cambia según tu usuario de MySQL
    password: '',      // Cambia según tu contraseña
    database: 'tripbus' // Nombre de tu base de datos
});

// Conectar a la base de datos
db.connect(err => {
    if (err) {
        console.error('Error al conectar con la base de datos:', err);
    } else {
        console.log('Conexión a la base de datos exitosa');
    }
});

// Endpoint para obtener todos los paquetes
app.get('/paquetes', (req, res) => {
    const sql = 'SELECT * FROM paquetes';
    db.query(sql, (err, result) => {
        if (err) {
            res.status(500).send('Error al obtener paquetes');
            throw err;
        }
        res.json(result); // Enviar los datos como JSON
    });
});

// Endpoint para agregar un paquete
app.post('/paquetes', (req, res) => {
    const paquete = req.body;
    const sql = 'INSERT INTO paquetes SET ?';
    db.query(sql, paquete, (err, result) => {
        if (err) {
            res.status(500).send('Error al agregar paquete');
            throw err;
        }
        res.send('Paquete agregado correctamente');
    });
});

// Iniciar el servidor en el puerto 3001
app.listen(3001, () => {
    console.log('Servidor corriendo en http://localhost:3001');
});
