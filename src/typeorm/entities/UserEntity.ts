import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Poll } from "./PollEntity";
import { Ballot } from "./BallotEntity";

@Entity("users")
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  user_id!: string;

  @Column({ type: "varchar", length: 20, unique: true })
  user_name!: string;

  @Column({ type: "varchar", unique: true })
  email!: string;

  @Column({ type: "varchar" })
  password!: string;

  @OneToMany(() => Poll, (poll) => poll.created_by, { cascade: true })
  created_polls!: Poll[];

  @OneToMany(() => Poll, (poll) => poll.registered_users, { cascade: true })
  registered_polls!: Poll[];

  @OneToMany(() => Ballot, (ballot) => ballot.user, { cascade: true })
  submitted_ballots!: Ballot[];

  @CreateDateColumn({ type: "time with time zone", default: () => "NOW()" })
  created_at!: Date;
}
