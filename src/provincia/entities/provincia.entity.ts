import { Localidad } from 'src/localidad/entities/localidad.entity';
import { Municipio } from 'src/municipio/entities/municipio.entity';
import { Pais } from 'src/pais/entities/pais.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

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

  @Column('int', {
    nullable: true,
    default: 9,
  })
  pais_id: number;

  @ManyToOne(() => Pais)
  @JoinColumn({
    name: 'pais_id',
    referencedColumnName: 'id_pais',
  })
  pais: Pais;

  @OneToMany(() => Municipio, (municipio) => municipio.provincia, {
    eager: true,
  })
  municipios: Municipio[];

  @OneToMany(() => Localidad, (localidad) => localidad.provincia, {
    eager: true,
  })
  localidades: Localidad[];
}
