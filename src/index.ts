import 'reflect-metadata'
import { createConnection } from 'typeorm'
import { Photo } from './entity/Photo'

createConnection()
  .then(async connection => {
    const loadedPhoto = await connection
      .getRepository(Photo)
      .findOne({ relations: ['albums'] })

    console.log(loadedPhoto)
  })
  .catch(error => console.log(error))
