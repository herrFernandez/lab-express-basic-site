import express from "express";

import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use("/images", express.static(__dirname + "/public/images"));
app.use("/js", express.static(__dirname + "/public/js"));
app.use("/styles", express.static(__dirname + "/public/styles"));
app.use(express.static('views'));


console.log (__dirname);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/home.html");
  });

app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/views/about.html");
  });

app.get("/interviews", (req, res) => {
    res.sendFile(__dirname + "/views/interviews.html");
  });

app.listen(3000, () => {
    console.log("Hello there, I'm listening...");
})