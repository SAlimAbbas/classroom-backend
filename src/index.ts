import express from "express";
import cors from "cors";

import subjectsRouter from "./routes/subject";

const app = express();
const port = process.env.PORT || 8000;

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);

app.use(express.json());

app.use("/api/subjects", subjectsRouter);

app.get("/", (req, res) => {
  res.send("Hello Welcome to the backend!");
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
