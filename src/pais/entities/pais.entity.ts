import { Provincia } from 'src/provincia/entities/provincia.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pais {
  @PrimaryGeneratedColumn()
  id_pais: number;

  @Column('varchar', {
    length: 100,
    nullable: false,
    unique: true,
  })
  pais: string;

  @Column('varchar', {
    length: 100,
    nullable: false,
    unique: true,
  })
  nacionalidad: string;

  @OneToMany(() => Provincia, (provincia) => provincia.pais, {
    eager: true,
  })
  provincias: Provincia[];
}
