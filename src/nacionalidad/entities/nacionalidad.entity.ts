import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Nacionalidad {
  @PrimaryGeneratedColumn()
  id_nacionalidad: number;

  @Column('varchar', {
    length: 100,
    nullable: false,
    unique: true,
  })
  nacionalidad: string;
}
