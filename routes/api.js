const express = require('express');
const router = express.Router();

// Ruta que devuelve un mensaje JSON
router.get('/mensaje', (req, res) => {
  res.json({ mensaje: 'Hola desde el backend' });
});

module.exports = router;
