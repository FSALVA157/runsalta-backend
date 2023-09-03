import {
  IsArray,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUsuarioDto {
  @IsString()
  @MinLength(6)
  @MaxLength(500)
  @Matches(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'El password debe tener una letra mayuscula, una letra minuscula y un numero',
  })
  @IsNotEmpty({ message: 'Debe ingresar el password.' })
  password: string;

  @IsString()
  @Length(1, 50, {
    message:
      'El username debe tener entre $constraint1 y $constraint2 caracteres.',
  })
  @IsNotEmpty({ message: 'Debe ingresar el username.' })
  username: string;

  @IsInt({ message: 'El dni debe ser un número entero.' })
  @IsNotEmpty({ message: 'Debe ingresar el dni.' })
  dni: number;

  @IsString()
  @Length(1, 50, {
    message:
      'El apellido debe tener entre $constraint1 y $constraint2 caracteres.',
  })
  @IsNotEmpty({ message: 'Debe ingresar el apellido.' })
  apellido: string;

  @IsString()
  @Length(1, 50, {
    message:
      'El nombre debe tener entre $constraint1 y $constraint2 caracteres.',
  })
  @IsNotEmpty({ message: 'Debe ingresar el nombre.' })
  nombre: string;

  @IsArray()
  @IsOptional()
  roles: string[];

  @IsInt({ message: 'El id de Institucion debe ser un número entero' })
  @IsOptional()
  id_institucion: number;

  @IsInt({ message: 'El id de equipo territorial ser un número entero' })
  @IsOptional()
  id_equipot: number;
}
