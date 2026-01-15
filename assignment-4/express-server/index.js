const express = require("express");
const app = express();

// Route: /home
app.get("/home", (req, res) => {
  res.send("This is home page");
});

// Route: /contactus
app.get("/contactus", (req, res) => {
  res.send("Contact us at contact@contact.com");
});

// Bonus Route: /about
app.get("/about", (req, res) => {
  res.send("Welcome to the About page!");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
