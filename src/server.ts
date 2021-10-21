import express from "express";
import http from "http";
import { Server, Socket } from "socket.io";
import { attachControllers } from "@decorators/express";
import cors from "cors";

import {
  HomeController,
  PollController,
  TestController,
  UserController,
} from "./controllers";

export default class AppServer {
  private app;
  private server;
  private io;

  constructor() {
    this.app = express();
    this.server = http.createServer(this.app);
    this.io = new Server(this.server);
    this.appConfig();

    this.routerConfig();
    this.ioConfig();
  }

  private appConfig() {
    this.app.use(cors());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  private ioConfig() {
    this.io.on("connection", (socket: Socket) => {
      console.log("a user connected");
      socket.broadcast.emit("hi");

      socket.on("message", (msg: string) => {
        console.log("message: " + msg);
      });

      socket.on("disconnect", (socket: Socket) => {
        console.log("Disconnected");
      });
    });
  }

  private routerConfig() {
    const apiRouter = express.Router();
    attachControllers(apiRouter, [
      TestController,
      HomeController,
      UserController,
      PollController,
    ]);
    this.app.use("/api", apiRouter);
  }

  public start = (port: number) => {
    return new Promise((resolve, reject) => {
      this.server.listen(port, "0.0.0.0", () => {
        resolve(port);
      }).on("error", (err: Object) => reject(err));
    });
  };
}
