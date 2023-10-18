import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { StatusCodes } from 'http-status-codes';
import contactRouter from './routes/contact.js';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/carnet-adresses');

app.get('/', (req, res) => {
  res.send('OK');
});

app.use('/contacts', contactRouter);

app.use((req, res) => {
  res
    .status(StatusCodes.NOT_FOUND)
    .send('Page non trouvée - Not Found Error 404');
});

app.use((err, req, res, next) => {
  console.error(err);
  res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .send(
      'Une erreur interne du serveur vient de se produire, merci de réessayer ultérieurement.'
    );
});

app.listen(port, () => {
  console.log(`Serveur lancé avec succès sur le port ${port}`);
});
