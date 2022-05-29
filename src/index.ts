import 'reflect-metadata'
import { createConnection } from 'typeorm'
import { Photo } from './entity/Photo'

createConnection()
  .then(async connection => {
    let photoRepository = connection.getRepository(Photo)
    let photoToUpdate = await photoRepository.findOne(1)
    photoToUpdate.name = 'hi'
    await photoRepository.save(photoToUpdate)
  })
  .catch(error => console.log(error))
