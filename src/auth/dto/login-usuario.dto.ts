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

export class LoginUsuarioDto {
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
}
