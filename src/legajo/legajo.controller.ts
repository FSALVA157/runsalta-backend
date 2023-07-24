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
import { LegajoService } from './legajo.service';
import { CreateLegajoDto } from './dto/create-legajo.dto';
import { UpdateLegajoDto } from './dto/update-legajo.dto';
import { PaginationDto } from 'src/common/dtos/pagination.dto';

@Controller('legajo')
export class LegajoController {
  constructor(private readonly legajoService: LegajoService) {}

  @Post()
  create(@Body() createLegajoDto: CreateLegajoDto) {
    return this.legajoService.create(createLegajoDto);
  }

  @Get()
  findAll(
    @Query()
    paginationDto: PaginationDto,
  ) {
    return this.legajoService.findAll(paginationDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.legajoService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateLegajoDto: UpdateLegajoDto) {
    return this.legajoService.update(+id, updateLegajoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.legajoService.remove(+id);
  }
}
