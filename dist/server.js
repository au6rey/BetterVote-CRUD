"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = require("socket.io");
const express_2 = require("@decorators/express");
const controllers_1 = require("./controllers");
class AppServer {
    constructor() {
        this.start = (port) => {
            return new Promise((resolve, reject) => {
                this.server.listen(port, () => {
                    resolve(port);
                }).on("error", (err) => reject(err));
            });
        };
        this.app = (0, express_1.default)();
        this.server = http_1.default.createServer(this.app);
        this.io = new socket_io_1.Server(this.server);
        this.appConfig();
        this.routerConfig();
        this.ioConfig();
    }
    appConfig() {
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use(express_1.default.json());
    }
    ioConfig() {
        this.io.on("connection", (socket) => {
            console.log("a user connected");
            socket.broadcast.emit("hi");
            socket.on("message", (msg) => {
                console.log("message: " + msg);
            });
            socket.on("disconnect", (socket) => {
                console.log("Disconnected");
            });
        });
    }
    routerConfig() {
        (0, express_2.attachControllers)(this.app, [controllers_1.TestController, controllers_1.HomeController]);
    }
}
exports.default = AppServer;
//# sourceMappingURL=server.js.map