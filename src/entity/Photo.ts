import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm'

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
}
