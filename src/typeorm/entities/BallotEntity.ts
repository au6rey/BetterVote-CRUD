import { BaseEntity, Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Poll, User } from ".";

@Entity("ballots")
export class Ballot extends BaseEntity {
  @ManyToOne(() => Poll, (poll) => poll.poll_id, { primary: true })
  @JoinColumn({ name: "poll_id" })
  poll!: Poll;

  @ManyToOne(() => User, (user) => user.user_id, { primary: true })
  @JoinColumn({ name: "user_id" })
  user!: User;

  @Column("simple-array")
  selections!: string[] | number[];
}
