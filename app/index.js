#!/usr/bin/env node
const http = require("http");
const express = require("express");

const app = express();

var count = 0;

app.get("/", (req, res) => {
  res.send(`This website visit ${++count} times.`);
});

http.createServer(app).listen(process.env.HTTP_PORT || 8000);