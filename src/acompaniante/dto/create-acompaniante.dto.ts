import {
  IsBoolean,
  IsInt,
  IsOptional,
  IsString,
  Length,
  Matches,
} from 'class-validator';

export class CreateAcompanianteDto {
  @IsOptional()
  @IsBoolean()
  activo: boolean;

  @IsString()
  @Length(5, 255, {
    message:
      'El apellido debe tener entre $constraint1 y $constraint2 caracteres',
  })
  apellido: string;

  @IsString()
  @Length(5, 255, {
    message:
      'El nombre debe tener entre $constraint1 y $constraint2 caracteres',
  })
  nombre: string;

  @IsString()
  @IsOptional()
  @Length(5, 255, {
    message:
      'El nombre debe tener entre $constraint1 y $constraint2 caracteres',
  })
  domicilio: string;

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

  @IsString()
  @IsOptional()
  @Length(5, 100, {
    message:
      'El telefono debe tener entre $constraint1 y $constraint2 caracteres',
  })
  telefono: string;

  @IsString()
  @IsOptional()
  @Length(5, 50, {
    message: 'El sexo debe tener entre $constraint1 y $constraint2 caracteres',
  })
  sexo: string;

  @IsString()
  @IsOptional()
  @Length(5, 50, {
    message: 'El dni debe tener entre $constraint1 y $constraint2 caracteres',
  })
  dni: string;

  @IsOptional()
  @IsInt()
  edad: number;

  @IsString()
  @IsOptional()
  @Length(5, 255, {
    message: 'El texto debe tener entre $constraint1 y $constraint2 caracteres',
  })
  capacitad_en_egreso: string;

  @IsString()
  @IsOptional()
  @Length(5, 255, {
    message: 'El texto debe tener entre $constraint1 y $constraint2 caracteres',
  })
  descripcion_perfil: string;

  @IsString()
  @IsOptional()
  @Length(5, 255, {
    message: 'El texto debe tener entre $constraint1 y $constraint2 caracteres',
  })
  descripcion_trabajo_act: string;

  @IsString()
  @IsOptional()
  @Length(5, 255, {
    message: 'El texto debe tener entre $constraint1 y $constraint2 caracteres',
  })
  tipo_disponibilidad: string;

  @IsString()
  @IsOptional()
  @Length(5, 255, {
    message: 'El texto debe tener entre $constraint1 y $constraint2 caracteres',
  })
  file_inf_admision: string;

  @IsString()
  @IsOptional()
  @Length(5, 255, {
    message: 'El texto debe tener entre $constraint1 y $constraint2 caracteres',
  })
  file_inf_baja: string;

  @IsString()
  @IsOptional()
  @Length(5, 255, {
    message: 'El texto debe tener entre $constraint1 y $constraint2 caracteres',
  })
  latitud: string;

  @IsString()
  @IsOptional()
  @Length(5, 255, {
    message: 'El texto debe tener entre $constraint1 y $constraint2 caracteres',
  })
  longitud: string;

  @IsString()
  @IsOptional()
  @Length(5, 255, {
    message: 'El texto debe tener entre $constraint1 y $constraint2 caracteres',
  })
  nivel_educacion: string;

  @IsString()
  @IsOptional()
  @Length(5, 255, {
    message: 'El texto debe tener entre $constraint1 y $constraint2 caracteres',
  })
  subvenc_por_prog_eg: string;

  @IsString()
  @IsOptional()
  @Length(5, 255, {
    message: 'El texto debe tener entre $constraint1 y $constraint2 caracteres',
  })
  tiene_trabajo: string;

  @IsString()
  @IsOptional()
  @Length(5, 100, {
    message: 'El texto debe tener entre $constraint1 y $constraint2 caracteres',
  })
  titulo_educacion: string;

  @IsOptional()
  @IsInt()
  id_experiencia_acomp: number;

  @IsInt()
  id_usuario: number;

  @IsInt()
  id_usuario_alta: number;

  @IsInt()
  id_usuario_modif: number;
}
