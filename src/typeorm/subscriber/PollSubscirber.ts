import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from "typeorm";
import { Poll } from "../entities";

@EventSubscriber()
export class TestSubscriber implements EntitySubscriberInterface<Poll> {
  listenTo() {
    return Poll;
  }

  beforeInsert(event: InsertEvent<Poll>) {
    console.log(`Before INSERTED: `, event.entity);
    //Send poll data to AWS Lambda
    console.log(new Date("2021-10-16T18:12:01.274Z"));
    const { poll_id, start_time, end_time } = event.entity;
    //
  }
  //   afterInsert(event: InsertEvent<Poll>) {
  //     console.log(`AFTER POST INSERTED: `, event.entity);
  //     //Send poll data to AWS Lambda

  //     const {poll_id, start_time, end_time} = event.entity
  //     //
  //   }
}
