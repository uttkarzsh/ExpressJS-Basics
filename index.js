import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 4000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let user = {
    userName : "",
    userEmail : "",
    userPassword : "",
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/user", (req, res)=>{
    user = {
    userName: req.body.name,
    userEmail: req.body.email,
    userPassword: req.body.password
  };
    res.send("User Added Successfully");
})

app.delete("/user", (req, res) => {
  user = {
    userName: "",
    userEmail: "",
    userPassword: ""
  };
  res.send("User deleted.");
});

app.get("/user", (req, res) => {
    res.send(`The user is ${user.userName}. The email is ${user.userEmail}. The password is ${user.userPassword}.`)
})

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));