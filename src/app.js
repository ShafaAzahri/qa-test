const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({ message: "Welcome to the QA Testing App!" });
});

app.get('/api/add', (req, res) => {
  const { a, b } = req.query;
  if (a === undefined || b === undefined) {
    return res.status(400).json({ error: "Parameters a and b are required" });
  }
  const numA = Number(a);
  const numB = Number(b);
  if (isNaN(numA) || isNaN(numB)) {
    return res.status(400).json({ error: "Parameters a and b must be valid numbers" });
  }
  res.status(200).json({ result: numA + numB });
});

app.get('/api/legacy-info', (req, res) => {
  res.status(200).json({
    status: "active",
    version: "v1",
    data: "legacy data"
  });
});

module.exports = app;
