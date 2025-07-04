import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 4000;
app.use(express.urlencoded({ extended: true }));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/user", (req, res)=>{
    res.send(req.body);
})

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));