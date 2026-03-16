const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// Serve all static files in the current folder
app.use(express.static(path.join(__dirname)));

// Default route -> index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Example: if you want `/blocked` to serve your second file:
// app.get("/blocked", (req, res) => {
//   res.sendFile(path.join(__dirname, "blocked.html"));
// });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
