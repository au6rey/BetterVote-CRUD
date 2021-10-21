import "reflect-metadata";
import Server from "./server";
import dotenv from "dotenv";
dotenv.config();
// import awsConfig from "./aws/config/";
import passport from "passport";
import { passConfig } from "./auth";

passConfig(passport);
// awsConfig();

import { dbCreateConnection } from "./typeorm/db/dbCreateConnection";
(async () => {
  await dbCreateConnection();
})();

const port = parseInt(process.env.EXPRESS_PORT!) || 3000;
const starter = new Server().start(port)
  .then((port) => console.log(`Running on port ${port}`))
  .catch((error) => {
    console.log(error);
  });
export default starter;
