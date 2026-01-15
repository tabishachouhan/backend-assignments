const express = require("express");
const os = require("os");
const dns = require("dns");
const readDataFile = require("./read");

const app = express();

// Test Route
app.get("/test", (req, res) => {
  res.send("Test route is working!");
});

// Read File Route
app.get("/readfile", (req, res) => {
  const content = readDataFile();
  res.send(content);
});

// System Details Route
app.get("/systemdetails", (req, res) => {
  const details = {
    platform: os.platform(),
    totalMemory: (os.totalmem() / (1024 ** 3)).toFixed(2) + " GB",
    freeMemory: (os.freemem() / (1024 ** 3)).toFixed(2) + " GB",
    cpuModel: os.cpus()[0].model,
    cpuCores: os.cpus().length     // Bonus Task
  };

  res.json(details);
});

// Get IP Route
app.get("/getip", (req, res) => {
  dns.lookup("masaischool.com", (err, address, family) => {
    if (err) {
      return res.json({ error: "Unable to fetch IP" });
    }

    res.json({
      hostname: "masaischool.com",
      ipAddress: address,
      family: family === 4 ? "IPv4" : "IPv6"
    });
  });
});

// Server Start
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
