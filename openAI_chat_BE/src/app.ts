import express from 'express';
import cors from 'cors';

import apiRouter from './routes';
import { constants } from './constants';

const app = express();
const port = constants.PORT

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: 'http://localhost:3000' // Allow only your frontend origin
}));

app.use("/api", apiRouter)

app.listen(port, () => {
  return console.log(`Your app is running at ${port} port`);
});
