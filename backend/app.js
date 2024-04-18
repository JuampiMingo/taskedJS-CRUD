import express from 'express';
import './database.js';
import cors from 'cors';

import taskRouter from './routes/tasks.routes.js'

const app = express();

app.set('port', 3000)

app.use(cors())
app.use(express.json());


app.use('/tasks',taskRouter);

export default app