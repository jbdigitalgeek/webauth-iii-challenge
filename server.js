const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const userRouter = require('./data/routers/router');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/', userRouter);

server.get('/', (req, res) => {
  res.status(200).json({ message: 'Root dir' });
});

module.exports = server;
