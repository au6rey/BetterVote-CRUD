import { Controller, Get, Response } from "@decorators/express";
import * as Express from "express";

@Controller("/")
export class HomeController {
  constructor() {
  }

  @Get("/")
  async home(
    @Response() res: Express.Response,
  ) {
    res.send("<p>HOMEPAGE!</p>");
  }
}
