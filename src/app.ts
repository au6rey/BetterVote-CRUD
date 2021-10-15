import "reflect-metadata";
import Server from "./server";
import dotenv from "dotenv";
dotenv.config();
import { dbCreateConnection } from "./typeorm/db/dbCreateConnection";
(async () => {
  await dbCreateConnection();
})();

const port = parseInt(process.env.EXPRESS_PORT!);
const starter = new Server().start(port)
  .then((port) => console.log(`Running on port ${port}`))
  .catch((error) => {
    console.log(error);
  });
export default starter;
