import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as http from "http";
import { PORT, MONGO_DEBUG, MONGO_URL } from "./config";
import users from "./routes/users";
import { dbConnect } from "./db/index";
// process.env.NODE_ENV = "dev";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static("static"));

/** MONGOOSE CONNECTION **/

dbConnect();

app.use("/users", users);

app.get("/ok", (req, res) => {
  res.send("Yes WORKING now");
});

let server = http.createServer(app);

server.listen(PORT, () => {
  console.log("🚀 Server ready at", PORT);
});

export default app;
