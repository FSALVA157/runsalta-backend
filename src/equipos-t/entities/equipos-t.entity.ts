import { Provincia } from 'src/provincia/entities/provincia.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class EquiposT {
  @PrimaryGeneratedColumn()
  id_equipo: number;

  @Column('varchar', {
    length: 100,
    nullable: false,
    unique: true,
  })
  nombre: string;

  @Column('varchar', {
    length: 100,
    nullable: true,
  })
  cel_guardia: string;

  @Column('varchar', {
    length: 100,
    nullable: false,
    unique: true,
  })
  codigo: string;

  @Column('varchar', {
    length: 100,
    nullable: false,
  })
  codigo_postal: string;

  @Column('varchar', {
    length: 100,
    nullable: true,
  })
  direccion: string;

  @Column('varchar', {
    length: 100,
    nullable: true,
  })
  email: string;

  @Column('varchar', {
    length: 50,
    nullable: true,
  })
  fax: string;

  @Column('varchar', {
    length: 255,
    nullable: true,
  })
  observacion: string;

  @Column('varchar', {
    length: 100,
    nullable: true,
  })
  responsable: string;

  @Column('varchar', {
    length: 100,
    nullable: true,
  })
  telefono: string;

  @Column('int', {
    nullable: false,
  })
  usuario_alta_id: number;

  @Column('int', {
    nullable: false,
  })
  usuario_modif_id: number;

  @Column('int', {
    nullable: true,
  })
  provincia_id: number;

  @ManyToOne(() => Provincia, {
    eager: true,
  })
  @JoinColumn({
    name: 'provincia_id',
    referencedColumnName: 'id_provincia',
  })
  provincia: Provincia;

  @CreateDateColumn()
  fecha_alta: Date;

  @UpdateDateColumn()
  ultima_actualizacion: Date;

  @DeleteDateColumn()
  fecha_baja: Date;
}
