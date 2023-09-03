import { Injectable } from '@nestjs/common';
import { CreateServiciosLDto } from './dto/create-servicios-l.dto';
import { UpdateServiciosLDto } from './dto/update-servicios-l.dto';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServiciosL } from './entities/servicios-l.entity';
import { handleDBExceptions } from 'src/common/filters/handle-exception';

@Injectable()
export class ServiciosLService {
  constructor(
    @InjectRepository(ServiciosL)
    private readonly serviciolRepository: Repository<ServiciosL>,
  ) {}
  async create(createServiciosLDto: CreateServiciosLDto) {
    try {
      const new_serviciol =
        this.serviciolRepository.create(createServiciosLDto);
      await this.serviciolRepository.save(new_serviciol);
      return new_serviciol;
    } catch (error) {
      handleDBExceptions(error);
    }
  }

  async findAll(paginationDto: PaginationDto) {
    try {
      const { limit = 0, offset = 0 } = paginationDto;
      const data = await this.serviciolRepository.findAndCount({
        take: limit,
        skip: offset,
      });
      const data_nueva = data[0].map((servicio) => {
        return {
          id_serviciol: servicio.id_serviciol,
          nombre: servicio.nombre,
          cel_guardia: servicio.cel_guardia,
          codigo: servicio.codigo_postal,
          convenio: servicio.convenio,
          direccion: servicio.direccion,
          email: servicio.email,
          observacion: servicio.observacion,
          telefono: servicio.telefono,
          equipot_id: servicio.equipot_id,
          equipo_territorial: servicio.equipo_territorial.nombre,
        };
      });
      return {
        data: data_nueva,
        total: data[1],
      };
    } catch (error) {
      handleDBExceptions(error);
    }
  }

  async findOne(id: number) {
    return `This action returns a #${id} serviciosL`;
  }

  async update(id: number, updateServiciosLDto: UpdateServiciosLDto) {
    return `This action updates a #${id} serviciosL`;
  }

  async remove(id: number) {
    return `This action removes a #${id} serviciosL`;
  }
}
