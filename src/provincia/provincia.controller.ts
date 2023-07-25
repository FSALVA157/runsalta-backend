import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProvinciaService } from './provincia.service';
import { CreateProvinciaDto } from './dto/create-provincia.dto';
import { UpdateProvinciaDto } from './dto/update-provincia.dto';
import { PaginationDto } from 'src/common/dtos/pagination.dto';

@Controller('provincia')
export class ProvinciaController {
  constructor(private readonly provinciaService: ProvinciaService) {}

  @Post()
  create(@Body() createProvinciaDto: CreateProvinciaDto) {
    return this.provinciaService.create(createProvinciaDto);
  }

  @Get()
  findAll(paginationDto: PaginationDto) {
    return this.provinciaService.findAll(paginationDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.provinciaService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProvinciaDto: UpdateProvinciaDto,
  ) {
    return this.provinciaService.update(+id, updateProvinciaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.provinciaService.remove(+id);
  }
}
