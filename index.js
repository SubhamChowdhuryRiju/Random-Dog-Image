import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://dog.ceo/api/breeds/image/random";

app.use(express.static("public"));

app.get("/", async (req, res) => {
  const response = await axios.get(API_URL);

  res.render("index.ejs", {
    dogURL: response.data.message,
  });
});

app.listen(port, (req, res) => {
  console.log(`Server Listening to port ${port}`);
});
