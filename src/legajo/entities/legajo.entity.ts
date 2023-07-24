import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
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
  apellido_nombre: string;

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

  @Column('varchar', {
    length: 255,
    nullable: true,
  })
  sexo: string;

  @Column('varchar', {
    length: 255,
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
  id_usuario_alta: number;

  @Column('int', {
    nullable: false,
  })
  id_usuario_modif: number;

  @Column('int', {
    nullable: true,
  })
  id_local: number;

  @Column('int', {
    nullable: true,
  })
  id_localidad: number;

  @Column('int', {
    nullable: true,
  })
  id_municipio: number;

  @Column('int', {
    nullable: true,
  })
  id_nacionalidad: number;

  @Column('int', {
    nullable: true,
  })
  id_obra_social: number;

  @Column('int', {
    nullable: true,
  })
  id_pais_nac: number;

  @Column('int', {
    nullable: true,
  })
  id_provincia: number;

  @Column('int', {
    nullable: true,
  })
  id_acompaniante: number;

  @Column('int', {
    nullable: true,
  })
  id_zonal: number;

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
