import 'reflect-metadata'
import { createConnection } from 'typeorm'
import { Photo } from './entity/Photo'

createConnection()
  .then(async connection => {
    let photos = await connection
      .getRepository(Photo)
      .createQueryBuilder('photo')
      .innerJoinAndSelect('photo.metadata', 'metadata')
      .getMany()

    console.log(photos)
  })
  .catch(error => console.log(error))
