import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id_usuario: number;

  @Column('varchar', {
    length: 500,
    nullable: false,
    select: false,
  })
  password: string;

  @Column('varchar', {
    length: 50,
    nullable: false,
    unique: true,
  })
  username: string;

  @Column('int', {
    nullable: false,
    unique: true,
  })
  dni: number;

  @Column('varchar', {
    length: 50,
    nullable: false,
    unique: false,
  })
  apellido: string;

  @Column('varchar', {
    length: 50,
    nullable: false,
    unique: false,
  })
  nombre: string;

  @Column('simple-array')
  roles: string[];

  @Column('int', {
    nullable: true,
  })
  id_institucion: number;

  @Column('int', {
    nullable: true,
  })
  id_equipot: number;

  @CreateDateColumn()
  fecha_alta: Date;

  @UpdateDateColumn()
  ultima_actualizacion: Date;

  @DeleteDateColumn()
  fecha_baja: Date;

  //   @Column({
  //     type: 'enum',
  //     nullable: true,
  //     enum: UsuarioRole,
  //     default: UsuarioRole.normal,
  //   })
  //   role: UsuarioRole;

  //   @BeforeInsert()
  //   @BeforeUpdate()
  //   async hashPassword() {
  //     if (!this.clave) {
  //       return;
  //     }
  //     this.clave = await hash(this.clave, 10);
  //   }
}

// CREATE TABLE `T_USUARIO` (
//     `ID_USUARIO` int(11) NOT NULL,
//     `ACTIVO` tinyint(1) DEFAULT NULL,
//     `FECHA_ALTA` datetime DEFAULT NULL,
//     `PASSWORD` varchar(255) DEFAULT NULL,
//     `USERNAME` varchar(255) DEFAULT NULL,
//     `ID_INSTITUCION` int(11) DEFAULT NULL,
//     `ID_LOCAL` int(11) DEFAULT NULL,
//     `ID_ZONAL` int(11) DEFAULT NULL,
//     PRIMARY KEY (`ID_USUARIO`),
//     KEY `FK55E492234A0EC1F2` (`ID_ZONAL`),
//     KEY `FK55E492234883DD40` (`ID_LOCAL`),
//     KEY `FK55E492239AD9F5B7` (`ID_INSTITUCION`),
//     CONSTRAINT `FK55E492234883DD40` FOREIGN KEY (`ID_LOCAL`) REFERENCES `T_LOCAL` (`ID_LOCAL`),
//     CONSTRAINT `FK55E492234A0EC1F2` FOREIGN KEY (`ID_ZONAL`) REFERENCES `T_ZONAL` (`ID_ZONAL`),
//     CONSTRAINT `FK55E492239AD9F5B7` FOREIGN KEY (`ID_INSTITUCION`) REFERENCES `T_INSTITUCION` (`ID_INSTITUCION`)
