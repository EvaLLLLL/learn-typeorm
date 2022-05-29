import 'reflect-metadata'
import { createConnection } from 'typeorm'
import { Photo } from './entity/Photo'

createConnection()
  .then(async connection => {
    let photoRepository = await connection.getRepository(Photo)
    let photo = await photoRepository.find({ relations: ['metadata'] })
   
    console.log(photo)
  })
  .catch(error => console.log(error))
