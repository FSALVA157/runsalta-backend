import { IsString, Length } from 'class-validator';

export class CreateNacionalidadDto {
  @IsString()
  @Length(2, 100, {
    message:
      'La nacionalidad debe tener entre $constraint1 y $constraint2 caracteres',
  })
  nacionalidad: string;
}
