import { IsInt, IsOptional, IsString, Length } from 'class-validator';

export class CreateLocalidadDto {
  @IsString()
  @Length(1, 100, {
    message:
      'El campo localidad debe tener entre $constraint1 y $constraint2 caracteres',
  })
  localidad: string;

  @IsInt()
  provincia_id: number;

  @IsOptional()
  @IsInt()
  municipio_id: number;
}
