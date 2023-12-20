"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const route = express.Router();
route.get('/', (req, res) => {
    res.json({ Message: "Hello Word" });
});
module.exports = route;
