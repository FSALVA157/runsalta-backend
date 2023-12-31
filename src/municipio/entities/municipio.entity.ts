import { Provincia } from 'src/provincia/entities/provincia.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Municipio {
  @PrimaryGeneratedColumn()
  id_municipio: number;

  @Column('varchar', {
    length: 100,
    nullable: false,
  })
  municipio: string;

  @Column('int', {
    nullable: false,
  })
  provincia_id: number;

  @ManyToOne(() => Provincia)
  @JoinColumn({
    name: 'provincia_id',
    referencedColumnName: 'id_provincia',
  })
  provincia: Provincia;
}
