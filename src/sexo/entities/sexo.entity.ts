import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Sexo {
  @PrimaryGeneratedColumn()
  id_sexo: number;

  @Column({
    type: 'varchar',
    length: 50,
    unique: true,
  })
  sexo: string;

  // @OneToMany(() => Legajo, (legajo) => legajo.sexo)
  // legajos: Legajo[];
}
