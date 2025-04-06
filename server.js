const express = require('express');
const path = require('path');
const app = express();

// Configurar la ruta para los archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rutas de la API
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

// Manejo de rutas para la aplicación
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
