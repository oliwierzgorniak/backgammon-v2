import { Server } from "http";
import { WebSocketServer } from "ws";

export default function handleGame(server: Server) {
  const wss = new WebSocketServer({ server: server });

  wss.on("connection", function connection(ws) {
    ws.on("error", console.error);

    ws.on("message", function message(data) {
      console.log("received: %s", data);
    });

    console.log("user connected");

    ws.send("something");
  });
}
