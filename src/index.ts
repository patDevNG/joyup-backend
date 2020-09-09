import express, { Request, Response} from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { useContainer, useExpressServer } from 'routing-controllers';
import {adaptedContainer} from './util/adapter/container.adapter';
import {controllers} from './app';
import cors from 'cors';

useContainer(adaptedContainer);
const app = express();


app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (_: Request, res: Response) => {
	res.send('Success, Welcome to Joy backend service');
});

/**
 * Create Mongoose Connection
 */

mongoose.connect(`${process.env._MONGO_URI}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});
mongoose.connection.on("error", err => {
    console.log("err", err)
  })
  mongoose.connection.on("connected", () => {
    console.log("mongoose is connected")
  })
  useExpressServer(app,{controllers})

export default app;