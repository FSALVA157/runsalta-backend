import { PartialType } from '@nestjs/mapped-types';
import { CreateLegajoDto } from './create-legajo.dto';

export class UpdateLegajoDto extends PartialType(CreateLegajoDto) {}
