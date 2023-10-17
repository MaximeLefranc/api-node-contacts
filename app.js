import express from 'express';
import mongoose from 'mongoose';

const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/carnet-adresses');

app.get('/', (req, res) => {
  res.send('OK');
});

app.use((req, res) => {
  res.status(400).send('Page non trouvée - Not Found Error 404');
});

app.listen(port, () => {
  console.log(`Serveur lancé avec succès sur le port ${port}`);
});
