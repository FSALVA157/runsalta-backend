import { PartialType } from '@nestjs/mapped-types';
import { CreateServiciosLDto } from './create-servicios-l.dto';

export class UpdateServiciosLDto extends PartialType(CreateServiciosLDto) {}
