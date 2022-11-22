const express = require('express');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

const mongoose = require('mongoose');

const userRoutes = require('./routes/user');

mongoose.connect('mongodb+srv://enimad:KDc9A1GQEjY1cuKr@cluster0.bkjofor.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true }
)
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));

app.post('/api/sauces', (req, res, next) => {
  console.log(req.body);
  res.status(201).json({
    message: 'Objet créé !'
  });
});

app.get('/api/sauces', (req, res, next) => {
  const sauces = [
    {
      userId: 'oeihfzeoi',
      name: 'Mon premier objet',
      manufacturer: 'El loco',
      description: 'Les infos de mon premier objet',
      mainPepper: 'Inferno',
      imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
      heat: 4,
      likes: 1,
      dislikes: 1,
      usersLiked: [ "String <userId>" ],
      usersDisliked : [ "String <userId>" ]
    },
  ];
  res.status(200).json(sauces);
});

app.use('/api/auth', userRoutes);

module.exports = app;