import 'reflect-metadata'
import { createConnection } from 'typeorm'
import { User } from './entity/User'

createConnection()
  .then(async connection => {
    let wuha = new User()
    wuha.firstName = 'wuha'
    wuha.lastName = 'test'
    wuha.age = 17

    await connection.getRepository('user').save(wuha)
  })
  .catch(error => console.log(error))
