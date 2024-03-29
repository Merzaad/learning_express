import express from "express";
import { WebSocketServer } from "ws";
import https from "https";
import http from "http";
import requestCounter from "./midlewares/requestCounter.mjs";
import middleware from "./midlewares/middleware.mjs";
import api from "./routes/api/api.mjs";
import fs from "fs";
import cors from "cors";

import connectionListener from "./socket/connectionListener.mjs";
import compression from "compression";
import bodyParser from "body-parser";

const port = 3000;

const options = {
  key: fs.readFileSync("./ssl/code.key"),
  cert: fs.readFileSync("./ssl/code.crt"),
};
const app = express().disable("etag");
/* const server = https.createServer(options, app); */
const server = http.createServer(app);
const socket = new WebSocketServer({ server });

server.listen(port, () => console.log(`listening on http://localhost:${port}`));

socket.on("connection", connectionListener);

app.use(
  cors({
    origin: "null",
  })
);
app.use(compression());
app.use(bodyParser.json());
app.use(requestCounter);
app.get("/", middleware);
app.use(express.static("public"));
app.use("/api", api);

export default app;
