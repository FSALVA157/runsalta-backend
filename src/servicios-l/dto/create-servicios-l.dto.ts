import {
  IsBoolean,
  IsInt,
  IsOptional,
  IsString,
  Length,
  Matches,
} from 'class-validator';

export class CreateServiciosLDto {
  @IsString()
  @Length(2, 100, {
    message:
      'El nombre del equipo debe tener entre $constraint1 y $constraint2 caracteres',
  })
  nombre: string;

  @IsOptional()
  @IsString()
  @Length(8, 100, {
    message:
      'El celular de guardia debe tener entre $constraint1 y $constraint2 caracteres',
  })
  cel_guardia: string;

  @IsString()
  @Length(2, 100, {
    message:
      'El codigo postal debe tener entre $constraint1 y $constraint2 caracteres',
  })
  codigo_postal: string;

  @IsOptional()
  @IsBoolean()
  convenio: boolean;

  @IsOptional()
  @IsString()
  @Length(5, 100, {
    message:
      'La dirección debe tener entre $constraint1 y $constraint2 caracteres',
  })
  direccion: string;

  @IsOptional()
  @IsString()
  @Matches(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/, {
    message: 'El email no es correcto',
  })
  @Length(4, 255, {
    message:
      'El email debe tener entre $constraint1 y $constraint2 caracteres en este momento tu texto tiene una longitud de $value letras',
  })
  email: string;

  @IsOptional()
  @IsString()
  @Length(5, 100, {
    message:
      'El campo observacion debe tener entre $constraint1 y $constraint2 caracteres',
  })
  observacion: string;

  @IsOptional()
  @IsString()
  @Length(5, 100, {
    message:
      'El telefono debe tener entre $constraint1 y $constraint2 caracteres',
  })
  telefono: string;

  @IsInt()
  equipot_id: number;

  @IsInt()
  usuario_alta_id: number;

  @IsInt()
  usuario_modif_id: number;

  @IsInt()
  provincia_id: number;
}
