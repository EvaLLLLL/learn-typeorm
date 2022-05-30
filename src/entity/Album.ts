import {
  Column,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  Entity,
} from 'typeorm'
import { Photo } from './Photo'

@Entity()
export class Album {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @ManyToMany(() => Photo, photo => photo.albums)
  @JoinTable()
  photos: Photo[]
}
