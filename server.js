const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const userRouter = require('./data/routers/router');
const authRouter = require('./data/routers/auth-router')

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/', userRouter);
server.use('/api/', authRouter)

server.get('/', (req, res) => {
  res.status(200).json({ message: 'Root dir' });
});

module.exports = server;
