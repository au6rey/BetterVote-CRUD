"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const server_1 = __importDefault(require("./server"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const dbCreateConnection_1 = require("./typeorm/db/dbCreateConnection");
(async () => {
    await (0, dbCreateConnection_1.dbCreateConnection)();
})();
const port = parseInt(process.env.EXPRESS_PORT) || 3000;
const starter = new server_1.default().start(port)
    .then((port) => console.log(`Running on port ${port}`))
    .catch((error) => {
    console.log(error);
});
exports.default = starter;
//# sourceMappingURL=app.js.map