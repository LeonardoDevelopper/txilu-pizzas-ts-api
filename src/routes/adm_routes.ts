const express = require('express');
import { Request, Response } from 'express'
const route = express.Router();

route.get('/', (req: Request, res: Response) => {
  res.json({ Message: "Hello Word" });
});

module.exports = route;
