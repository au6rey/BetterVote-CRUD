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

@Entity({ name: "polls" })
export class Poll extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  poll_id!: string;

  @ManyToOne(() => User, (user) => user.created_polls, { cascade: true })
  created_by!: User;

  @Column({ type: "varchar", length: 20, unique: true })
  poll_title!: string;

  @Column({ type: "varchar", length: 20 })
  prompt!: string;

  @Column({ type: "varchar" })
  vote_system!: VoteSystem;

  @Column({ type: "enum", enum: PollType })
  poll_type!: PollType;

  @Column({ type: "simple-array" })
  candidates!: string[];

  @Column({
    type: "enum",
    enum: PollStatus,
    default: PollStatus.JUST_CREATED,
  })
  poll_status!: PollStatus;

  @OneToMany(() => Ballot, (ballot) => ballot.poll, { cascade: true })
  poll_ballots!: Ballot[];

  @OneToMany(() => User, (user) => user.registered_polls)
  registered_users!: User[];

  @CreateDateColumn({ type: "timestamptz", default: () => "NOW()" })
  created_at!: Date;

  @Column({ type: "timestamptz" })
  start_time!: Date;

  @Column({ type: "timestamptz" })
  end_time!: Date;
}
