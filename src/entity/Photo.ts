import { OneToOne, Column, PrimaryGeneratedColumn, Entity } from 'typeorm'
import { PhotoMetadata } from './PhotoMetadata'

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

  @OneToOne(type => PhotoMetadata, metadata => metadata.photo, {
    cascade: true,
  })
  metadata: PhotoMetadata
}
