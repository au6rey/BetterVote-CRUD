import { Controller, Get, Request, Response } from "@decorators/express";
import jwt, { Jwt } from "jsonwebtoken";
import * as Express from "express";

@Controller("/")
export class HomeController {
  constructor() {
  }

  @Get("/")
  async home(
    @Response() res: Express.Response,
    @Request() req: Express.Request,
  ) {
    res.send("<p>HOMEPAGE!</p>");

    try {
      var str = req.get("Authorization");
      if (str) {
        jwt.verify(str, process.env.JWT_SECRET!, { algorithms: ["HS256"] });
        res.send("Very Secret Data");
      }
    } catch {
      res.status(401);
      res.send("Bad Token");
    }
  }
}
