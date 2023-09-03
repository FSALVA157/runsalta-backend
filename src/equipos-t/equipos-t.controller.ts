import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { EquiposTService } from './equipos-t.service';
import { CreateEquiposTDto } from './dto/create-equipos-t.dto';
import { UpdateEquiposTDto } from './dto/update-equipos-t.dto';
import { PaginationDto } from 'src/common/dtos/pagination.dto';

@Controller('equipos-t')
export class EquiposTController {
  constructor(private readonly equiposTService: EquiposTService) {}

  @Post()
  create(@Body() createEquiposTDto: CreateEquiposTDto) {
    return this.equiposTService.create(createEquiposTDto);
  }

  @Get()
  findAll(
    @Query()
    paginationDto: PaginationDto,
  ) {
    return this.equiposTService.findAll(paginationDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.equiposTService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateEquiposTDto: UpdateEquiposTDto,
  ) {
    return this.equiposTService.update(+id, updateEquiposTDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.equiposTService.remove(+id);
  }
}
