import { EquiposT } from 'src/equipos-t/entities/equipos-t.entity';
import { Localidad } from 'src/localidad/entities/localidad.entity';
import { Municipio } from 'src/municipio/entities/municipio.entity';
import { Pais } from 'src/pais/entities/pais.entity';
import { Provincia } from 'src/provincia/entities/provincia.entity';
import { Sexo } from 'src/sexo/entities/sexo.entity';
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
export class Legajo {
  @PrimaryGeneratedColumn()
  id_legajo: number;

  @Column('boolean', {
    default: true,
  })
  activo: boolean;

  @Column('varchar', {
    length: 255,
    nullable: false,
  })
  apellido: string;

  @Column('varchar', {
    length: 255,
    nullable: false,
  })
  nombre: string;

  @Column('datetime', {
    nullable: true,
  })
  fecha_nacimiento: Date;

  @Column('varchar', {
    length: 255,
    nullable: true,
  })
  calle_legajo: string;

  @Column('int', {
    nullable: true,
  })
  tpo_pub_prv_cob_sal: number;

  @Column('varchar', {
    length: 255,
    nullable: true,
  })
  codigo: string;

  @Column('int', {
    nullable: true,
  })
  constancia_parto: number;

  @Column('varchar', {
    length: 255,
    nullable: true,
  })
  detalle_probl_salud: string;

  @Column('varchar', {
    length: 255,
    nullable: true,
  })
  direccion: string;

  @Column('varchar', {
    length: 255,
    nullable: true,
  })
  email: string;

  @Column('varchar', {
    length: 255,
    nullable: true,
  })
  escolarizado: string;

  @Column('varchar', {
    length: 255,
    nullable: true,
  })
  establecimento_escolarizado: string;

  @Column('int', {
    nullable: true,
  })
  estado_documento: number;

  @Column('int', {
    nullable: true,
  })
  estado_causa_judicial: number;

  @Column('int', {
    nullable: true,
  })
  estado_obra_social: number;

  @Column('int', {
    nullable: true,
  })
  estado_probl_salud: number;

  @Column('varchar', {
    length: 255,
    nullable: true,
  })
  file_dni: string;

  @Column('varchar', {
    length: 255,
    nullable: true,
  })
  file_partida_nac: string;

  @Column('varchar', {
    length: 255,
    nullable: true,
  })
  file_problematica_salud: string;

  @Column('varchar', {
    length: 255,
    nullable: true,
  })
  nivel_educacion: string;

  @Column('varchar', {
    length: 255,
    nullable: true,
  })
  nro_documento: string;

  @Column('varchar', {
    length: 255,
    nullable: true,
  })
  numero_calle: string;

  @Column('varchar', {
    length: 255,
    nullable: true,
  })
  observ_obra_social: string;

  @Column('varchar', {
    length: 255,
    nullable: true,
  })
  observaciones: string;

  @Column('int', {
    nullable: true,
  })
  partida_nacimiento: number;

  @Column('varchar', {
    length: 255,
    nullable: true,
  })
  probl_salud: string;

  @Column('varchar', {
    length: 255,
    nullable: true,
  })
  referencia_llamada102: string;

  @Column('int', {
    nullable: true,
  })
  se_interv_en_su_gestion: number;

  @Column('int', {
    nullable: false,
  })
  sexo_id: number;

  @ManyToOne(() => Sexo, {
    eager: true,
  })
  @JoinColumn({
    name: 'sexo_id',
    referencedColumnName: 'id_sexo',
  })
  sexo: Sexo;

  @Column('varchar', {
    length: 100,
    nullable: true,
  })
  telefono: string;

  @Column('varchar', {
    length: 255,
    nullable: true,
  })
  telefono_legajo: string;

  @Column('int', {
    nullable: true,
  })
  tpo_cobertura_salud: number;

  @Column('varchar', {
    length: 255,
    nullable: true,
  })
  tipo_documento: string;

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
  localidad_id: number;

  @ManyToOne(() => Localidad)
  @JoinColumn({
    name: 'localidad_id',
    referencedColumnName: 'id_localidad',
  })
  localidad: Localidad;

  @Column('int', {
    nullable: true,
  })
  municipio_id: number;

  @ManyToOne(() => Municipio)
  @JoinColumn({
    name: 'municipio_id',
    referencedColumnName: 'id_municipio',
  })
  municipio: Municipio;

  @Column('int', {
    nullable: true,
  })
  nacionalidad_id: number;

  @ManyToOne(() => Pais)
  @JoinColumn({
    name: 'nacionalidad_id',
    referencedColumnName: 'id_pais',
  })
  nacionalidad: Pais;

  @Column('int', {
    nullable: true,
  })
  obra_social_id: number;

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

  @Column('int', {
    nullable: true,
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
  })
  acompaniante_id: number;

  @Column('int', {
    nullable: true,
  })
  equipot_id: number;

  @ManyToOne(() => EquiposT, {
    eager: true,
  })
  @JoinColumn({
    name: 'equipot_id',
    referencedColumnName: 'id_equipo',
  })
  equipo_territorial: EquiposT;

  @CreateDateColumn()
  fecha_alta: Date;

  @UpdateDateColumn()
  ultima_actualizacion: Date;

  @DeleteDateColumn()
  fecha_baja: Date;
}

// CREATE TABLE `T_LEGAJO` (
//     PRIMARY KEY (`ID_LEGAJO`),
//     KEY `FK3CF09EE311053623` (`ID_PAIS_NAC`),
//     KEY `FK3CF09EE37D35BA3C` (`ID_LOCALIDAD`),
//     KEY `FK3CF09EE34A0EC1F2` (`ID_ZONAL`),
//     KEY `FK3CF09EE32E52A8A6` (`ID_USUARIO_MODIF`),
//     KEY `FK3CF09EE32A660944` (`ID_MUNICIPIO`),
//     KEY `FK3CF09EE311940AEA` (`ID_ACOMPANIANTE`),
//     KEY `FK3CF09EE392A2A567` (`ID_OBRA_SOCIAL`),
//     KEY `FK3CF09EE34883DD40` (`ID_LOCAL`),
//     KEY `FK3CF09EE360A32698` (`ID_NACIONALIDAD`),
//     KEY `FK3CF09EE3CB9150C4` (`ID_PROVINCIA`),
//     KEY `FK3CF09EE3FBACAC69` (`ID_USUARIO_ALTA`),
//     CONSTRAINT `FK3CF09EE311053623` FOREIGN KEY (`ID_PAIS_NAC`) REFERENCES `T_NACIONALIDAD` (`ID_NACIONALIDAD`),
//     CONSTRAINT `FK3CF09EE311940AEA` FOREIGN KEY (`ID_ACOMPANIANTE`) REFERENCES `T_ACOMPANIANTE` (`ID_ACOMPANIANTE`),
//     CONSTRAINT `FK3CF09EE32A660944` FOREIGN KEY (`ID_MUNICIPIO`) REFERENCES `T_MUNICIPIO` (`ID_MUNICIPIO`),
//     CONSTRAINT `FK3CF09EE32E52A8A6` FOREIGN KEY (`ID_USUARIO_MODIF`) REFERENCES `T_USUARIO` (`ID_USUARIO`),
//     CONSTRAINT `FK3CF09EE34883DD40` FOREIGN KEY (`ID_LOCAL`) REFERENCES `T_LOCAL` (`ID_LOCAL`),
//     CONSTRAINT `FK3CF09EE34A0EC1F2` FOREIGN KEY (`ID_ZONAL`) REFERENCES `T_ZONAL` (`ID_ZONAL`),
//     CONSTRAINT `FK3CF09EE360A32698` FOREIGN KEY (`ID_NACIONALIDAD`) REFERENCES `T_NACIONALIDAD` (`ID_NACIONALIDAD`),
//     CONSTRAINT `FK3CF09EE37D35BA3C` FOREIGN KEY (`ID_LOCALIDAD`) REFERENCES `T_LOCALIDAD` (`ID_LOCALIDAD`),
//     CONSTRAINT `FK3CF09EE392A2A567` FOREIGN KEY (`ID_OBRA_SOCIAL`) REFERENCES `T_OBRA_SOCIAL` (`ID_OBRA_SOCIAL`),
//     CONSTRAINT `FK3CF09EE3CB9150C4` FOREIGN KEY (`ID_PROVINCIA`) REFERENCES `T_PROVINCIA` (`ID_PROVINCIA`),
//     CONSTRAINT `FK3CF09EE3FBACAC69` FOREIGN KEY (`ID_USUARIO_ALTA`) REFERENCES `T_USUARIO` (`ID_USUARIO`)
//   ) ENGINE=InnoDB DEFAULT CHARSET=latin1;
