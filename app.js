/* eslint-disable no-console */
import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import compression from 'compression';
import dotenv from 'dotenv'
dotenv.config()
import { formatResponse } from './lib/ResponseFormatter';
const Port = process.env.PORT;
const app = express();
import db from './database/db';
import { log } from 'util';

// dataBase conection
db.sequelize
  .sync({ force: false })
  // eslint-disable-next-line no-unused-vars
  .then(dbResponse => {
    console.log('Connected to DB!');
  })
  .catch(err => {
    console.log('Unable to connect db Error:', +err);
  });
app.use(compression());
app.use(helmet());
app.use(bodyParser.json({ limit: '10mb' }));
app.use(
  bodyParser.urlencoded({ limit: '10mb', extended: true, parameterLimit: 1000 })
);
// eslint-disable-next-line no-undef
require('./routes/SignUpRoute')(app);
// eslint-disable-next-line no-undef
require('./routes/LoginRoute')(app);
// start app
app.listen(Port, () =>
  console.log(`Server started successfully on ${Port} port`)
);
