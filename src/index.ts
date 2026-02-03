import express from "express";

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello Welcome to the backend!");
})

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
})