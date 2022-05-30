import 'reflect-metadata'
import { createConnection } from 'typeorm'
import { Photo } from './entity/Photo'
import { PhotoMetadata } from './entity/PhotoMetadata'
import { Author } from './entity/Author'
import { Album } from './entity/Album'

createConnection()
  .then(async connection => {
    // 创建 photo 对象
    let photo = new Photo()
    photo.name = 'Me and Bears'
    photo.description = 'I am near polar bears'
    photo.filename = 'photo-with-bears.jpg'
    photo.isPublished = true
    photo.views = 233

    let ellen = new Author()
    ellen.name = 'ellen'
    photo.author = ellen

    // 创建 photo metadata 对象
    let metadata = new PhotoMetadata()
    metadata.height = 640
    metadata.width = 480
    metadata.compressed = true
    metadata.comment = 'cybershoot'
    metadata.orientation = 'portait'

    photo.metadata = metadata // this way we connect them

    let album = new Album()
    album.name = 'chapter-1'
    album.photos = [photo]

    // 获取 repository
    let photoRepository = connection.getRepository(Photo)

    // 保存photo的同时保存metadata
    await photoRepository.save(photo)

    console.log('Photo is saved, photo metadata is saved too.')
  })
  .catch(error => console.log(error))
