import {
  Body,
  Controller,
  Get,
  Params,
  Post,
  Request,
  Response,
} from "@decorators/express";
import { Ballot, Poll, User } from "../typeorm/entities/";
import { getRepository } from "typeorm";
import * as Express from "express";
import jwt, { Jwt } from "jsonwebtoken";
import {
  UserLoginInput,
  UserRegistrationInput,
} from "../interfaces/UserInterfaces";
import { PollInput } from "../interfaces/PollInterfaces";
import { VoteInput } from "../interfaces/VoteInterfaces";

@Controller("/users")
export class UserController {
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

  @Post("/signup")
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

  @Post("/login")
  async login(
    @Response() res: Express.Response,
    @Request() req: Express.Request,
    @Body() body: UserLoginInput,
  ) {
    try {
      console.log("Login attempt", body);
      let user = await getRepository(User).findOne({ where: body });
      console.log("User", user);
      if (user) {
        // console.log("asdsadasd");

        let token = jwt.sign(
          { user_id: user.user_id },
          process.env.JWT_SECRET!,
          {
            algorithm: "HS256",
            expiresIn: "15d",
          },
        );
        console.log("asdsadasd");

        res.json({
          status: 200,
          token,
        });
      }
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
      const user = await getRepository(User).findOne({ user_id });
      const created_poll = await pollRepository.save(body);
      if (user) {
        user.created_polls.push(created_poll);
        await user.save();
        res.json({
          status: 200,
          created_poll,
        });
      }
    } catch (error) {
      res.json(error);
    }
  }

  @Post("/:user_id/submit-vote/:poll_id")
  async submitVote(
    @Response() res: Express.Response,
    @Request() req: Express.Request,
    @Params("user_id") user_id: string,
    @Params("poll_id") poll_id: string,
    @Body() body: VoteInput,
  ) {
    try {
      const user = await getRepository(User).findOne({ user_id });
      const poll = await getRepository(Poll).findOne({ poll_id });

      if (user && poll) {
        const new_ballot = new Ballot();
        new_ballot.user = body.user_id;
        new_ballot.poll = body.poll_id;
        new_ballot.selections = body.ballot;
        await new_ballot.save();
        res.json({
          status: 200,
        });
      }
    } catch (error) {
      res.json(error);
    }
  }
}
