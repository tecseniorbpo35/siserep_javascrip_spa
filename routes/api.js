const express = require('express');
const router = express.Router();


router.get('/mensaje', (req, res) => {
  res.json({ mensaje: 'Hola desde el backend' });
});

module.exports = router;
