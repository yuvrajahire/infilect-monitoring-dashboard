import React, { useEffect, useState } from "react";
import axios from "axios";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

function App() {
  const [metrics, setMetrics] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://98.82.175.141:5000/metrics"); // Backend API
        const newMetric = {
          time: new Date().toLocaleTimeString(),
          cpu: parseFloat(res.data.cpu_usage),
          latency: res.data.latency_ms,
          memory: res.data.memory_usage,
          counter: res.data.request_counter
        };
        setMetrics((prev) => [...prev.slice(-10), newMetric]); // Keep last 10 points
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
    const interval = setInterval(fetchData, 10000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div style={{ textAlign: "center" }}>
      <h1>📊 Metrics Dashboard</h1>
      <LineChart width={600} height={300} data={metrics}>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="cpu" stroke="blue" name="CPU Usage (%)" />
        <Line type="monotone" dataKey="latency" stroke="green" name="Latency (ms)" />
        <Line type="monotone" dataKey="memory" stroke="red" name="Memory (MB)" />
      </LineChart>
    </div>
  );
}

export default App;


