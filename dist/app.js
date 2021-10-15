"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const server_1 = __importDefault(require("./server"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const dbCreateConnection_1 = require("./typeorm/db/dbCreateConnection");
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, dbCreateConnection_1.dbCreateConnection)();
}))();
const port = parseInt(process.env.EXPRESS_PORT);
const starter = new server_1.default().start(port)
    .then((port) => console.log(`Running on port ${port}`))
    .catch((error) => {
    console.log(error);
});
exports.default = starter;
//# sourceMappingURL=app.js.map