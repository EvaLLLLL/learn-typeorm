import 'reflect-metadata'
import { createConnection } from 'typeorm'
import { Photo } from './entity/Photo'

createConnection()
  .then(async connection => {
    let photoRepository = connection.getRepository(Photo)
    let allPhotos = await photoRepository.find()
    console.log('All photos from the db: ', allPhotos)

    let firstPhoto = await photoRepository.findOne(1)
    console.log('First photo from the db: ', firstPhoto)

    let meAndBearsPhoto = await photoRepository.findOne({
      name: 'Me and Bears',
    })
    console.log('Me and Bears photo from the db: ', meAndBearsPhoto)

    let allViewedPhotos = await photoRepository.find({ views: 1 })
    console.log('All viewed photos: ', allViewedPhotos)

    let allPublishedPhotos = await photoRepository.find({ isPublished: true })
    console.log('All published photos: ', allPublishedPhotos)

    let [allps, photosCount] = await photoRepository.findAndCount()
    console.log('All photos: ', allps)
    console.log('Photos count: ', photosCount)
  })
  .catch(error => console.log(error))
