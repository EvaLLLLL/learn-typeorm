import {
  EventSubscriber,
  EntitySubscriberInterface,
  InsertEvent,
} from 'typeorm'
import { User } from '../entity/User'

@EventSubscriber()
export class UserSubscriber implements EntitySubscriberInterface<User> {
  listenTo() {
    return User
  }

  afterInsert(event: InsertEvent<User>) {
    console.log(`AFTER INSERT A USER`, event.entity)
  }
}
