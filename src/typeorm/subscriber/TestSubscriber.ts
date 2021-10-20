import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from "typeorm";
import { User } from "../entities";

@EventSubscriber()
export class TestSubscriber implements EntitySubscriberInterface<User> {
  listenTo() {
    return User;
  }

  beforeInsert(event: InsertEvent<User>) {
    console.log(`BEFORE POST INSERTED: `, event.entity);
  }

  afterInsert(event: InsertEvent<User>) {
    console.log(`AFTER POST INSERTED: `, event.entity);
  }
}
