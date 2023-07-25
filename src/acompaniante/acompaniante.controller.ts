import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  Put,
} from '@nestjs/common';
import { AcompanianteService } from './acompaniante.service';
import { CreateAcompanianteDto } from './dto/create-acompaniante.dto';
import { UpdateAcompanianteDto } from './dto/update-acompaniante.dto';
import { PaginationDto } from 'src/common/dtos/pagination.dto';

@Controller('acompaniante')
export class AcompanianteController {
  constructor(private readonly acompanianteService: AcompanianteService) {}

  @Post()
  create(@Body() createAcompanianteDto: CreateAcompanianteDto) {
    return this.acompanianteService.create(createAcompanianteDto);
  }

  @Get()
  findAll(
    @Query()
    paginationDto: PaginationDto,
  ) {
    return this.acompanianteService.findAll(paginationDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.acompanianteService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateAcompanianteDto: UpdateAcompanianteDto,
  ) {
    return this.acompanianteService.update(+id, updateAcompanianteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.acompanianteService.remove(+id);
  }
}
