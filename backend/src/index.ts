import express from "express";
import { createServer } from "node:http";
import handleGame from "./game/handleGame";

const app = express();
const server = createServer(app);

handleGame(server);

server.on("request", app);
server.listen(3000, () => {
  console.log("server running at http://localhost:3000");
});
