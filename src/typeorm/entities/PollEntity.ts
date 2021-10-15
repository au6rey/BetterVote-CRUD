import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { PollStatus, PollType } from "../../interfaces/PollInterfaces";
import { VoteSystem } from "../../interfaces/VoteInterfaces";
import { Ballot, User } from ".";

@Entity("polls")
export class Poll extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  poll_id!: string;

  @ManyToOne(() => User, (user) => user.created_polls)
  created_by!: User;

  @Column({ type: "varchar", length: 20, unique: true })
  poll_title!: string;

  @Column({ type: "varchar", length: 20 })
  prompt!: string;

  @Column({ type: "varchar" })
  vote_system!: VoteSystem;

  @Column({ type: "varchar" })
  poll_type!: PollType;

  @Column({ type: "simple-array" })
  candidates!: string[];

  @Column({ type: "varchar" })
  poll_status!: PollStatus;

  @OneToMany(() => Ballot, (ballot) => ballot.poll, { cascade: true })
  poll_ballots!: Ballot[];

  @OneToMany(() => User, (user) => user.registered_polls)
  registered_users!: User[];

  @Column({ type: "time with time zone" })
  start_time!: Date;

  @Column({ type: "time with time zone" })
  end_time!: Date;

  @CreateDateColumn({ type: "time with time zone", default: () => "NOW()" })
  created_at!: Date;
}
