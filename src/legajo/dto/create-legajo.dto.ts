import {
  IsBoolean,
  IsDateString,
  IsInt,
  IsOptional,
  IsString,
  Length,
  Matches,
} from 'class-validator';

export class CreateLegajoDto {
  @IsOptional()
  @IsBoolean()
  activo: boolean;

  @IsString()
  @Length(2, 255, {
    message:
      'El apellido debe tener entre $constraint1 y $constraint2 caracteres',
  })
  apellido: string;

  @IsString()
  @Length(2, 255, {
    message:
      'El nombre debe tener entre $constraint1 y $constraint2 caracteres',
  })
  nombre: string;

  @IsOptional()
  @IsDateString()
  fecha_nacimiento: Date;

  @IsOptional()
  @IsString()
  @Length(2, 255, {
    message:
      'El campo calle debe tener entre $constraint1 y $constraint2 caracteres',
  })
  calle_legajo: string;

  @IsOptional()
  @IsInt()
  tpo_pub_prv_cob_sal: number;

  @IsOptional()
  @IsString()
  @Length(1, 255, {
    message:
      'El campo codigo debe tener entre $constraint1 y $constraint2 caracteres',
  })
  codigo: string;

  @IsOptional()
  @IsInt()
  constancia_parto: number;

  @IsOptional()
  @IsString()
  @Length(5, 255, {
    message:
      'El campo detalle problema de salud debe tener entre $constraint1 y $constraint2 caracteres',
  })
  detalle_probl_salud: string;

  @IsOptional()
  @IsString()
  @Length(5, 255, {
    message:
      'El campo direccion debe tener entre $constraint1 y $constraint2 caracteres',
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
  @Length(5, 255, {
    message:
      'El campo direccion debe tener entre $constraint1 y $constraint2 caracteres',
  })
  escolarizado: string;

  @IsOptional()
  @IsString()
  @Length(5, 255, {
    message:
      'El campo establecimiento debe tener entre $constraint1 y $constraint2 caracteres',
  })
  establecimento_escolarizado: string;

  @IsOptional()
  @IsInt()
  estado_documento: number;

  @IsOptional()
  @IsInt()
  estado_causa_judicial: number;

  @IsOptional()
  @IsInt()
  estado_obra_social: number;

  @IsOptional()
  @IsInt()
  estado_probl_salud: number;

  @IsOptional()
  @IsString()
  @Length(5, 255, {
    message:
      'El campo file dni debe tener entre $constraint1 y $constraint2 caracteres',
  })
  file_dni: string;

  @IsOptional()
  @IsString()
  @Length(5, 255, {
    message:
      'El campo fiel partida  debe tener entre $constraint1 y $constraint2 caracteres',
  })
  file_partida_nac: string;

  @IsOptional()
  @IsString()
  @Length(5, 255, {
    message:
      'El campo file problematica debe tener entre $constraint1 y $constraint2 caracteres',
  })
  file_problematica_salud: string;

  @IsOptional()
  @IsString()
  @Length(5, 255, {
    message:
      'El campo nivel educacion debe tener entre $constraint1 y $constraint2 caracteres',
  })
  nivel_educacion: string;

  @IsOptional()
  @IsString()
  @Length(5, 255, {
    message:
      'El numero documento debe tener entre $constraint1 y $constraint2 caracteres',
  })
  nro_documento: string;

  @IsOptional()
  @IsString()
  @Length(2, 255, {
    message:
      'El numero de calle debe tener entre $constraint1 y $constraint2 caracteres',
  })
  numero_calle: string;

  @IsOptional()
  @IsString()
  @Length(2, 255, {
    message:
      'El campo obs obra social debe tener entre $constraint1 y $constraint2 caracteres',
  })
  observ_obra_social: string;

  @IsOptional()
  @IsString()
  @Length(2, 255, {
    message:
      'El campo observaciones debe tener entre $constraint1 y $constraint2 caracteres',
  })
  observaciones: string;

  @IsOptional()
  @IsInt()
  partida_nacimiento: number;

  @IsOptional()
  @IsString()
  @Length(2, 255, {
    message:
      'El campo problema de salud debe tener entre $constraint1 y $constraint2 caracteres',
  })
  probl_salud: string;

  @IsOptional()
  @IsString()
  @Length(2, 255, {
    message:
      'El campo referencia llamada 102 debe tener entre $constraint1 y $constraint2 caracteres',
  })
  referencia_llamada102: string;

  @IsOptional()
  @IsInt()
  se_interv_en_su_gestion: number;

  @IsInt()
  sexo_id: number;

  @IsOptional()
  @IsString()
  @Length(2, 255, {
    message:
      'El campo telefono debe tener entre $constraint1 y $constraint2 caracteres',
  })
  telefono: string;

  @IsOptional()
  @IsString()
  @Length(2, 255, {
    message:
      'El campo referencia telefono legajo debe tener entre $constraint1 y $constraint2 caracteres',
  })
  telefono_legajo: string;

  @IsOptional()
  @IsInt()
  tpo_cobertura_salud: number;

  @IsOptional()
  @IsString()
  @Length(2, 255, {
    message:
      'El campo tipo documento debe tener entre $constraint1 y $constraint2 caracteres',
  })
  tipo_documento: string;

  @IsInt()
  usuario_alta_id: number;

  @IsInt()
  usuario_modif_id: number;

  @IsOptional()
  @IsInt()
  localidad_id: number;

  @IsOptional()
  @IsInt()
  municipio_id: number;

  @IsOptional()
  @IsInt()
  nacionalidad_id: number;

  @IsOptional()
  @IsInt()
  obra_social_id: number;

  @IsOptional()
  @IsInt()
  pais_id: number;

  @IsOptional()
  @IsInt()
  provincia_id: number;

  @IsOptional()
  @IsInt()
  acompaniante_id: number;

  @IsOptional()
  @IsInt()
  equipot_id: number;
}
