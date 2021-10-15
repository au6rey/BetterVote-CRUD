import { Controller, Get, Params, Response } from "@decorators/express";
import { User } from "../typeorm/entities/";
import * as Express from "express";

@Controller("/users")
export class TestController {
  constructor() {
  }

  @Get("/")
  async getAll(
    @Response() res: Express.Response,
  ) {
    res.send(await User.find());
  }

  @Get("/:id")
  async getOne(
    @Response() res: Express.Response,
    @Params("id") userid: string,
  ) {
    res.send(await User.findOne(userid));
  }
}
