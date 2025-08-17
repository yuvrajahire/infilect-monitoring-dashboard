const express = require('express');
const cors = require('cors');   // <-- import cors

const app = express();

// ✅ Use env PORT if provided, fallback to 5000
const PORT = process.env.PORT || 5000;

app.use(cors());  // <-- enable CORS

// Example /metrics API
let counter = 0;
app.get('/metrics', (req, res) => {
  counter++;
  res.json({
    cpu: Math.random() * 100,       // fake CPU usage %
    latency: Math.random() * 500,   // fake latency ms
    memory: Math.random() * 1000,   // fake memory MB
    counter: counter                // dynamically increasing
  });
});

// ✅ Important: bind to 0.0.0.0 instead of localhost
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Backend running on http://0.0.0.0:${PORT}`);
});


