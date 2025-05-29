const express = require('express');
const app = express();
const port = 5000;
app.get('/api', (req, res) => {
  res.json({ message: "Hello from Node.js API!" });
});
app.listen(port, () => {
  console.log(`Node API running on http://localhost:${port}`);
});
