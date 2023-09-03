import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ServiciosLService } from './servicios-l.service';
import { CreateServiciosLDto } from './dto/create-servicios-l.dto';
import { UpdateServiciosLDto } from './dto/update-servicios-l.dto';
import { PaginationDto } from 'src/common/dtos/pagination.dto';

@Controller('servicios-l')
export class ServiciosLController {
  constructor(private readonly serviciosLService: ServiciosLService) {}

  @Post()
  create(@Body() createServiciosLDto: CreateServiciosLDto) {
    return this.serviciosLService.create(createServiciosLDto);
  }

  @Get()
  findAll(
    @Query()
    paginationDto: PaginationDto,
  ) {
    return this.serviciosLService.findAll(paginationDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.serviciosLService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateServiciosLDto: UpdateServiciosLDto,
  ) {
    return this.serviciosLService.update(+id, updateServiciosLDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.serviciosLService.remove(+id);
  }
}
