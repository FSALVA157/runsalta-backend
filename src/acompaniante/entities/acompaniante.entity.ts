import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Acompaniante {
  @PrimaryGeneratedColumn()
  id_acompaniante: number;

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

  @Column('varchar', {
    length: 255,
    nullable: true,
  })
  domicilio: string;

  @Column('varchar', {
    length: 255,
    nullable: true,
  })
  email: string;

  @Column('varchar', {
    length: 100,
    nullable: true,
  })
  telefono: string;

  @Column('varchar', {
    length: 50,
    nullable: true,
  })
  sexo: string;

  @Column('varchar', {
    length: 50,
    nullable: true,
  })
  dni: string;

  @Column('int', {
    nullable: true,
  })
  edad: number;

  @Column('varchar', {
    length: 255,
    nullable: true,
  })
  capacitad_en_egreso: string;

  @Column('varchar', {
    length: 255,
    nullable: true,
  })
  descripcion_perfil: string;

  @Column('varchar', {
    length: 255,
    nullable: true,
  })
  descripcion_trabajo_act: string;

  @Column('varchar', {
    length: 255,
    nullable: true,
  })
  tipo_disponibilidad: string;

  @Column('varchar', {
    length: 255,
    nullable: true,
  })
  file_inf_admision: string;

  @Column('varchar', {
    length: 255,
    nullable: true,
  })
  file_inf_baja: string;

  @Column('varchar', {
    length: 255,
    nullable: true,
  })
  latitud: string;

  @Column('varchar', {
    length: 255,
    nullable: true,
  })
  longitud: string;

  @Column('varchar', {
    length: 255,
    nullable: true,
  })
  nivel_educacion: string;

  @Column('varchar', {
    length: 255,
    nullable: true,
  })
  subvenc_por_prog_eg: string;

  @Column('varchar', {
    length: 100,
    nullable: true,
  })
  tiene_trabajo: string;

  @Column('varchar', {
    length: 100,
    nullable: true,
  })
  titulo_educacion: string;

  @Column('int', {
    nullable: false,
  })
  id_experiencia_acomp: number;

  @Column('int', {
    nullable: false,
  })
  id_usuario: number;

  @Column('int', {
    nullable: false,
  })
  id_usuario_alta: number;

  @Column('int', {
    nullable: false,
  })
  id_usuario_modif: number;

  @CreateDateColumn()
  fecha_alta: Date;

  @UpdateDateColumn()
  ultima_actualizacion: Date;

  @DeleteDateColumn()
  fecha_baja: Date;
}

// CREATE TABLE `T_ACOMPANIANTE` (

//     PRIMARY KEY (`ID_ACOMPANIANTE`),
//     KEY `FKF4AB24552E52A8A6` (`ID_USUARIO_MODIF`),
//     KEY `FKF4AB245582AAD8EF` (`ID_EXPERIENCIA_ACOMP`),
//     KEY `FKF4AB245512F8F986` (`ID_USUARIO`),
//     KEY `FKF4AB2455FBACAC69` (`ID_USUARIO_ALTA`),
//     CONSTRAINT `FKF4AB245512F8F986` FOREIGN KEY (`ID_USUARIO`) REFERENCES `T_USUARIO` (`ID_USUARIO`),
//     CONSTRAINT `FKF4AB24552E52A8A6` FOREIGN KEY (`ID_USUARIO_MODIF`) REFERENCES `T_USUARIO` (`ID_USUARIO`),
//     CONSTRAINT `FKF4AB245582AAD8EF` FOREIGN KEY (`ID_EXPERIENCIA_ACOMP`) REFERENCES `T_EXPERIENCIA_ACOMP` (`ID_EXPERIENCIA_ACOMP`),
//     CONSTRAINT `FKF4AB2455FBACAC69` FOREIGN KEY (`ID_USUARIO_ALTA`) REFERENCES `T_USUARIO` (`ID_USUARIO`)
//   ) ENGINE=InnoDB DEFAULT CHARSET=latin1;
//   /*!40101 SET character_set_client = @saved_cs_client */;
