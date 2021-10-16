import { Poll, User } from "../typeorm/entities";
export type VoteSystem = "RCV" | "PLURALITY" | "STAR";
export interface VoteInput {
  readonly user_id: User;
  readonly poll_id: Poll;
  readonly ballot: string[] | number[];
}

// export interface RCVVoteInput extends VoteInput {
//   readonly vote_system: "RCV";
//   readonly ballot: string[];
// }

// export interface StarVoteInput extends VoteInput {
//   readonly vote_system: "STAR";
//   readonly ballot: number[];
// }

// export interface PluralityVoteInput extends VoteInput {
//   readonly vote_system: "PLURALITY";
// }
