import express from "express";
import cors from "cors";
import { registerRoutes } from "./routes";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
registerRoutes(app).then((server) => {
  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch((error) => {
  console.error("Failed to start server:", error);
  process.exit(1);
});