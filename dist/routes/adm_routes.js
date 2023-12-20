"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const routes = express.Router();
routes.get('/', (req, res) => {
    res.json({ Message: "Hello Word" });
});
module.exports = routes;
