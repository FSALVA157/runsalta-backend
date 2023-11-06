import { IsNotEmpty, Length, Matches } from 'class-validator';

export class ResetPasswordDto {
  @Matches(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/, {
    message: 'El formato del email no es válido.',
  })
  @Length(1, 200, {
    message:
      'El email debe tener entre $constraint1 y $constraint2 caracteres.',
  })
  @IsNotEmpty({ message: 'Debe ingresar el email.' })
  email: string;
}
