import { Poll, User } from "../typeorm/entities";
import { VoteSystem } from "./VoteInterfaces";

// export type PollStatus = "JUST_CREATED" | "ACTIVE" | "ENDED";

export enum PollStatus {
  JUST_CREATED = "JUST_CREATED",
  ACTIVE = "ACTIVE",
  ENDED = "ENDED",
}
export enum PollType {
  PRIVATE = "PRIVATE",
  PUBLIC = "PUBLIC",
}
export interface PollResult<T> {
  readonly poll_id: string;
  readonly result: T;
}
export interface PollInput {
  created_by: User;
  poll_title: string;
  prompt: string;
  vote_system: VoteSystem;
  poll_type: PollType;
  candidates: string[];
  start_time: Date;
  end_time: Date;
}
export interface PollStatusChange {
  poll_id: Poll;
  poll_status: "POLL_START" | "POLL_STOP";
}
