import {
  Controller,
  Delete,
  Get,
  Params,
  Patch,
  Post,
  Request,
  Response,
} from "@decorators/express";
import { Poll } from "../typeorm/entities";
import * as Express from "express";

@Controller("/polls")
export class TestController {
  constructor() {
  }

  //Ensure authenticated
  @Post("/new-poll")
  async addPoll(
    @Response() res: Express.Response,
    @Request() req: Express.Request,
    @Params("id") poll_id: string,
  ) {
    // res.json(await Poll.findOne(poll_id));
  }

  @Get("/:id")
  async getPoll(
    @Response() res: Express.Response,
    @Params("id") poll_id: string,
  ) {
    res.json(await Poll.findOne(poll_id));
  }

  //Private route
  //   @Get("/:id/registered-voters")
  //   async getRegisteredUsers(
  //     @Response() res: Express.Response,
  //     @Params("id") poll_id: string,
  //   ) {
  //     // res.json(await Poll.findOne(poll_id));
  //   }

  @Get("/:id/ballots")
  async getBallots(
    @Response() res: Express.Response,
    @Params("id") poll_id: string,
  ) {
    // res.json(await Poll.findOne(poll_id));
  }

  //Ensure authenticated
  @Patch("/:id/edit")
  async editPoll(
    @Response() res: Express.Response,
    @Params("id") poll_id: string,
  ) {
    // res.json(await Poll.findOne(poll_id));
  }

  //Ensure authenticated
  @Delete("/delete/:id")
  async deletePoll(
    @Response() res: Express.Response,
    @Params("id") poll_id: string,
  ) {
    // res.json(await Poll.findOne(poll_id));
  }
}
