import JWT from "passport-jwt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
import { User } from "../typeorm/entities";
import passport, { PassportStatic } from "passport";
import { Middleware } from "@decorators/express";
import { NextFunction, Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";

const JWTStrategy = JWT.Strategy;
const extractJWT = JWT.ExtractJwt;
const jwt_secret: string = process.env.JWT_SECRET!;
const opts: JWT.StrategyOptions = {
  secretOrKey: jwt_secret,
  jwtFromRequest: extractJWT.fromAuthHeaderAsBearerToken(),
  // issuer: process.env.JWT_ISSUER,
  // audience: process.env.JWT_AUDIENCE,
};

export const passConfig = (passport: PassportStatic) => {
  passport.use(
    new JWTStrategy(opts, async (jwt_payload, done) => {
      try {
        let user = await User.findOne({ user_id: jwt_payload.sub });

        if (user) {
          return done(null, user);
        }
        return done(null, false);
      } catch (error) {
        return done(error, false);
      }
    }),
  );
};
export class UserAuthentication implements Middleware {
  use(
    request: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
    response: Response<any, Record<string, any>>,
    next: NextFunction,
  ): void {
    console.log("AUTHENTICATION ||||||");
    passport.authenticate("jwt", {
      session: false,
      successRedirect: "/",
      failureRedirect: "/api/login",
    }, () => {
      //Do things
      console.log("WTD");
    });
    next();
  }
}
export const getToken = (user: User) => {
  return jwt.sign(
    {
      // iss: "Joan_Louji",
      user_id: user.user_id,
      iat: new Date().getTime(),
      exp: new Date().setDate(new Date().getDate() + 1),
    },
    jwt_secret,
    { algorithm: "HS256" },
  );
};
