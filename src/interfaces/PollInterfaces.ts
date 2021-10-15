export type PollStatus = "JUST_CREATED" | "ACTIVE" | "ENDED";
export type PollType = "PRIVATE" | "PUBLIC";
export interface PollResult<T> {
  readonly poll_id: string;
  readonly result: T;
}
