import { PartialType } from '@nestjs/mapped-types';
import { CreateAcompanianteDto } from './create-acompaniante.dto';

export class UpdateAcompanianteDto extends PartialType(CreateAcompanianteDto) {}
