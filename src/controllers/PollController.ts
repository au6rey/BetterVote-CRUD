import {
  Body,
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
import { PollStatusChange } from "../interfaces/PollInterfaces";

@Controller("/polls")
export class PollController {
  constructor() {
  }

  //Ensure authenticated
  @Post("/status")
  async addPoll(
    @Response() res: Express.Response,
    @Body() body: any,
  ) {
    // res.json(await Poll.findOne(poll_id));
    console.log("Post req on status", body);
    res.json({ status: 200 });
  }

  @Get("/status")
  async seePoll(
    @Response() res: Express.Response,
    @Body() body: PollStatusChange | any,
  ) {
    // res.json(await Poll.findOne(poll_id));
    console.log(body);
    res.json({ status: 200 });
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
