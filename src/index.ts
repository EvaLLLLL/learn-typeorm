import 'reflect-metadata'
import { createConnection } from 'typeorm'
import { Photo } from './entity/Photo'

createConnection()
  .then(async connection => {
    let photo = new Photo()
    photo.name = 'test repositories'
    photo.description = 'hahahahahaha'
    photo.filename = 'test.jpg'
    photo.views = 20
    photo.isPublished = true

    let photoRepository = connection.getRepository(Photo)

    await photoRepository.save(photo)
    console.log(`#${photo.id} photo has been saved`)

    let savedPhotos = await photoRepository.find()
    console.log('All photos from the db: ', savedPhotos)
  })
  .catch(error => console.log(error))
