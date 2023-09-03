import { EquiposT } from 'src/equipos-t/entities/equipos-t.entity';
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
export class ServiciosL {
  @PrimaryGeneratedColumn()
  id_serviciol: number;

  @Column('varchar', {
    length: 100,
    nullable: false,
    unique: true,
  })
  nombre: string;

  @Column('varchar', {
    length: 100,
    nullable: false,
  })
  codigo_postal: string;

  @Column('varchar', {
    length: 100,
    nullable: true,
  })
  cel_guardia: string;

  @Column('boolean', {
    default: false,
  })
  convenio: boolean;

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
  observacion: string;

  @Column('varchar', {
    length: 100,
    nullable: true,
  })
  telefono: string;

  @Column('int', {
    nullable: false,
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

  @Column('int', {
    nullable: false,
  })
  usuario_alta_id: number;

  @Column('int', {
    nullable: false,
  })
  usuario_modif_id: number;

  @CreateDateColumn()
  fecha_alta: Date;

  @UpdateDateColumn()
  ultima_actualizacion: Date;

  @DeleteDateColumn()
  fecha_baja: Date;
}

// CREATE TABLE `T_LOCAL` (
//     `ID_LOCAL` int(11) NOT NULL,
//     `ACTIVO` tinyint(1) DEFAULT NULL,
//     `FECHA_ALTA` datetime DEFAULT NULL,
//     `FECHA_MODIFICACION` datetime DEFAULT NULL,
//     `CEL_GUARDIA` varchar(255) DEFAULT NULL,
//     `CODIGO` varchar(255) DEFAULT NULL,
//     `CONVENIO` tinyint(1) DEFAULT NULL,
//     `DIRECCION` varchar(255) DEFAULT NULL,
//     `EMAIL` varchar(255) DEFAULT NULL,
//     `NOMBRE` varchar(255) DEFAULT NULL,
//     `OBSERVACION` varchar(255) DEFAULT NULL,
//     `SERVICIO_CONSTITUIDO` tinyint(1) DEFAULT NULL,
//     `TELEFONO` varchar(255) DEFAULT NULL,
//     `ID_USUARIO_ALTA` int(11) DEFAULT NULL,
//     `ID_USUARIO_MODIF` int(11) DEFAULT NULL,
//     `ID_ZONAL` int(11) DEFAULT NULL,
//     PRIMARY KEY (`ID_LOCAL`),
//     KEY `FK1FBBBA04A0EC1F2` (`ID_ZONAL`),
//     KEY `FK1FBBBA02E52A8A6` (`ID_USUARIO_MODIF`),
//     KEY `FK1FBBBA0FBACAC69` (`ID_USUARIO_ALTA`),
//     CONSTRAINT `FK1FBBBA02E52A8A6` FOREIGN KEY (`ID_USUARIO_MODIF`) REFERENCES `T_USUARIO` (`ID_USUARIO`),
//     CONSTRAINT `FK1FBBBA04A0EC1F2` FOREIGN KEY (`ID_ZONAL`) REFERENCES `T_ZONAL` (`ID_ZONAL`),
//     CONSTRAINT `FK1FBBBA0FBACAC69` FOREIGN KEY (`ID_USUARIO_ALTA`) REFERENCES `T_USUARIO` (`ID_USUARIO`)
//   ) ENGINE=InnoDB DEFAULT CHARSET=latin1;
//   /*!40101 SET character_set_client = @saved_cs_client */;
