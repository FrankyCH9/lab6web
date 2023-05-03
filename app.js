const express = require('express');
const app = express();


// Configurar el motor de plantillas
app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static('public'))

// Ruta para renderizar la plantilla Pug
app.get('/pug', (req, res) => {
    res.render('index', { nombre: 'Usuario Pug' });
  });


// Iniciar el servidor en el puerto 9000
app.listen(9000, () => {
    console.log('Aplicación web dinámica ejecutándose en el puerto 9000');
});
  