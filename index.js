import express from "express";
import bodyParser from "body-parser";
import serverConfig from './utils/server-config.js';
import todoRoute from './routes/todo.js';

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(bodyParser.json());

app.use("/todo", todoRoute);
app.get("/", (req, res) => res.json({statusCode:"200", message: "Welcome to the Todo List API!"}));
app.all("*", (req, res) =>res.json({statusCode:"404", message:"You've tried reaching a route that doesn't exist."}));

app.listen(serverConfig.port, () =>console.log(`Server running on port: http://localhost:${serverConfig.port}`));

// untuk menjalankannya di online bisa pakai ngrok, caranya
// 1. buka ngrok yg sudah diekstrak di folder download
// 2. ketikkan 'ngrok http 5000' karena port yang dipakai adalah 5000