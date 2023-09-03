import { Municipio } from 'src/municipio/entities/municipio.entity';
import { Provincia } from 'src/provincia/entities/provincia.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Localidad {
  @PrimaryGeneratedColumn()
  id_localidad: number;

  @Column('varchar', {
    length: 100,
    nullable: false,
  })
  localidad: string;

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

  @Column('int', {
    nullable: true,
    default: null,
  })
  municipio_id: number;

  @ManyToOne(() => Municipio, {
    eager: true,
  })
  @JoinColumn({
    name: 'municipio_id',
    referencedColumnName: 'id_municipio',
  })
  municipio: Municipio;
}
