import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Municipio {
  @PrimaryGeneratedColumn()
  id_municipio: number;

  @Column('varchar', {
    length: 100,
    nullable: false,
    unique: true,
  })
  municipio: string;

  @Column('int', {
    nullable: false,
  })
  provincia_id: number;
}
