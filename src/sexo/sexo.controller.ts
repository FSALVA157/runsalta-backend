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
import { SexoService } from './sexo.service';
import { CreateSexoDto } from './dto/create-sexo.dto';
import { UpdateSexoDto } from './dto/update-sexo.dto';
import { PaginationDto } from 'src/common/dtos/pagination.dto';

@Controller('sexo')
export class SexoController {
  constructor(private readonly sexoService: SexoService) {}

  @Post()
  create(@Body() createSexoDto: CreateSexoDto) {
    return this.sexoService.create(createSexoDto);
  }

  @Get()
  findAll(
    @Query()
    paginationDto: PaginationDto,
  ) {
    return this.sexoService.findAll(paginationDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sexoService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateSexoDto: UpdateSexoDto) {
    return this.sexoService.update(+id, updateSexoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sexoService.remove(+id);
  }
}
