import { PartialType } from '@nestjs/mapped-types';
import { CreateEquiposTDto } from './create-equipos-t.dto';

export class UpdateEquiposTDto extends PartialType(CreateEquiposTDto) {}
