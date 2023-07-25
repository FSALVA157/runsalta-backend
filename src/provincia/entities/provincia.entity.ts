import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Provincia {
  @PrimaryGeneratedColumn()
  id_provincia: number;

  @Column('varchar', {
    length: 100,
    nullable: false,
    unique: true,
  })
  provincia: string;
}
