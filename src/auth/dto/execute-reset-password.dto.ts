import {
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class ExecuteResetPasswordDto {
  @IsString()
  @MinLength(6)
  @MaxLength(500)
  @Matches(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'El password debe tener una letra mayuscula, una letra minuscula y un numero',
  })
  @IsNotEmpty({ message: 'Debe ingresar el password.' })
  new_password: string;
}
