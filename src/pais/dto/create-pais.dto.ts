import { IsString, Length } from 'class-validator';

export class CreatePaisDto {
  @IsString()
  @Length(2, 100, {
    message: 'El pais debe tener entre $constraint1 y $constraint2 caracteres',
  })
  pais: string;

  @IsString()
  @Length(2, 100, {
    message:
      'La nacionalidad debe tener entre $constraint1 y $constraint2 caracteres',
  })
  nacionalidad: string;
}
