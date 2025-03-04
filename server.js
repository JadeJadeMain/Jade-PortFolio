const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3000;

// Route to check if server is working
app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://api.github.com");
    res.send(`GitHub API Status: ${response.status}`);
  } catch (error) {
    res.status(500).send("Error fetching data");
  }
});

// Start the server
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
