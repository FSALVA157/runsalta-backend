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
import { NacionalidadService } from './nacionalidad.service';
import { CreateNacionalidadDto } from './dto/create-nacionalidad.dto';
import { UpdateNacionalidadDto } from './dto/update-nacionalidad.dto';
import { PaginationDto } from 'src/common/dtos/pagination.dto';

@Controller('nacionalidad')
export class NacionalidadController {
  constructor(private readonly nacionalidadService: NacionalidadService) {}

  @Post()
  create(@Body() createNacionalidadDto: CreateNacionalidadDto) {
    return this.nacionalidadService.create(createNacionalidadDto);
  }

  @Get()
  findAll(
    @Query()
    paginationDto: PaginationDto,
  ) {
    return this.nacionalidadService.findAll(paginationDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nacionalidadService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateNacionalidadDto: UpdateNacionalidadDto,
  ) {
    return this.nacionalidadService.update(+id, updateNacionalidadDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nacionalidadService.remove(+id);
  }
}
