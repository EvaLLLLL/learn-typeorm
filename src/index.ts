import 'reflect-metadata'
import { createConnection } from 'typeorm'
import { Photo } from './entity/Photo'
import { PhotoMetadata } from './entity/PhotoMetadata'

createConnection()
  .then(async connection => {
    // 创建 photo
    let photo = new Photo()
    photo.name = 'Me and Bears'
    photo.description = 'I am near polar bears'
    photo.views = 33
    photo.filename = 'photo-with-bears.jpg'
    photo.isPublished = true

    // 创建 photo metadata
    let metadata = new PhotoMetadata()
    metadata.height = 640
    metadata.width = 480
    metadata.compressed = true
    metadata.comment = 'cybershoot'
    metadata.orientation = 'portait'
    metadata.photo = photo // 联接两者

    // 获取实体 repositories
    let photoRepository = connection.getRepository(Photo)
    let metadataRepository = connection.getRepository(PhotoMetadata)

    // 先保存photo
    await photoRepository.save(photo)

    // 然后保存photo的metadata
    await metadataRepository.save(metadata)

    // 完成
    console.log(
      'Metadata is saved, and relation between metadata and photo is created in the database too',
    )
  })
  .catch(error => console.log(error))
