const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Conexión a MongoDB
mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.log(err));

// Rutas
app.get('/', (req, res) => {
  res.send('¡Bienvenido al Contador de Calorías!');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


const foodRoutes = require('./routes/foodRoutes');

app.use('/api', foodRoutes);
