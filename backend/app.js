const express = require('express');

const app = express();

const mongoose = require('mongoose');

const userRoutes = require('./routes/user');

mongoose.connect('mongodb+srv://enimad:KDc9A1GQEjY1cuKr@cluster0.bkjofor.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res) => {
   res.json({ message: 'Votre requête a bien été reçue !' }); 
});

app.use('/api/auth', userRoutes);

module.exports = app;