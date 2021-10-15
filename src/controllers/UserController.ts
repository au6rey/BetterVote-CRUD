import {
  Body,
  Controller,
  Get,
  Params,
  Post,
  Request,
  Response,
} from "@decorators/express";
import { Poll, User } from "../typeorm/entities/";
import { getRepository } from "typeorm";
import * as Express from "express";
import { UserRegistrationInput } from "../interfaces/UserInterfaces";
import { PollInput } from "../interfaces/PollInterfaces";

@Controller("/users")
export class UserController {
  // private userRepository;
  constructor() {
  }

  @Get("/:id")
  async getOneUser(
    @Response() res: Express.Response,
    @Params("id") user_id: string,
  ) {
    try {
      res.json(await getRepository(User).findOne(user_id));
    } catch (error) {
      res.json(error);
    }
  }

  @Get("/:id/created-polls")
  async getCreatedPolls(
    @Response() res: Express.Response,
    @Params("id") user_id: string,
  ) {
    try {
      const userRepository = await getRepository(User).findOne({
        where: { user_id },
        relations: ["created_polls"],
      });
      res.json(userRepository);
    } catch (error) {
      res.json(error);
    }
  }

  @Post("/new-user")
  async addUser(
    @Response() res: Express.Response,
    @Request() req: Express.Request,
    @Body() body: UserRegistrationInput,
  ) {
    try {
      const userRepository = getRepository(User);
      await userRepository.save(body);
      res.json({
        status: 200,
      });
    } catch (error) {
      res.json(error);
    }
  }

  @Post("/:id/add-poll")
  async addPoll(
    @Response() res: Express.Response,
    @Request() req: Express.Request,
    @Params("id") user_id: string,
    @Body() body: PollInput,
  ) {
    try {
      const pollRepository = getRepository(Poll);
      const created_poll = await pollRepository.save(body);

      res.json({
        status: 200,
        created_poll,
      });
    } catch (error) {
      res.json(error);
    }
  }
}
