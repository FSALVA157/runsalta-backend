import { IsInt, IsString, Length } from 'class-validator';

export class CreateMunicipioDto {
  @IsString()
  @Length(1, 100, {
    message:
      'El campo municipio debe tener entre $constraint1 y $constraint2 caracteres',
  })
  municipio: string;

  @IsInt()
  provincia_id: number;
}
