import {
  OneToOne,
  Column,
  PrimaryGeneratedColumn,
  Entity,
  ManyToOne,
} from 'typeorm'
import { PhotoMetadata } from './PhotoMetadata'
import { Author } from './Author'

@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 20 })
  name: string

  @Column('text')
  description: string

  @Column()
  filename: string

  @Column()
  views: number

  @Column()
  isPublished: boolean

  @OneToOne(() => PhotoMetadata, metadata => metadata.photo, {
    cascade: true,
  })
  metadata: PhotoMetadata

  @ManyToOne(() => Author, author => author.photos, { cascade: true })
  author: Author
}
