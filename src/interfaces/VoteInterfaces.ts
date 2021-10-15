export type VoteSystem = "RCV" | "PLURALITY" | "STAR";

interface VoteInput {
  readonly user_id: string;
  readonly poll_id: string;
  readonly vote_system: VoteSystem;
  readonly ballot: string[] | number[];
}

export interface RCVVoteInput extends VoteInput {
  readonly vote_system: "RCV";
  readonly ballot: string[];
}

export interface StarVoteInput extends VoteInput {
  readonly vote_system: "STAR";
  readonly ballot: number[];
}

export interface PluralityVoteInput extends VoteInput {
  readonly vote_system: "PLURALITY";
}
