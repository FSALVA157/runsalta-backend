import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLocalidadDto } from './dto/create-localidad.dto';
import { UpdateLocalidadDto } from './dto/update-localidad.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Localidad } from './entities/localidad.entity';
import { Repository } from 'typeorm';
import { handleDBExceptions } from 'src/common/filters/handle-exception';
import { PaginationDto } from 'src/common/dtos/pagination.dto';

@Injectable()
export class LocalidadService {
  constructor(
    @InjectRepository(Localidad)
    private readonly localidadRepository: Repository<Localidad>,
  ) {}
  async create(createLocalidadDto: CreateLocalidadDto) {
    try {
      const new_localidad = this.localidadRepository.create(createLocalidadDto);
      await this.localidadRepository.save(new_localidad);
      return new_localidad;
    } catch (error) {
      handleDBExceptions(error);
    }
  }

  async findAll(paginationDto: PaginationDto) {
    try {
      const { limit = 0, offset = 0 } = paginationDto;
      return await this.localidadRepository.findAndCount({
        take: limit,
        skip: offset,
      });
    } catch (error) {
      handleDBExceptions(error);
    }
  }

  async findOne(id: number) {
    try {
      return await this.localidadRepository.findOneOrFail({
        where: { id_localidad: id },
      });
    } catch (error) {
      handleDBExceptions(error);
    }
  }

  async update(id: number, updateLocalidadDto: UpdateLocalidadDto) {
    try {
      const res = await this.localidadRepository.update(
        { id_localidad: id },
        updateLocalidadDto,
      );
      if (res.affected == 0)
        throw new NotFoundException(
          'Error No se Actualizo ningún Registro Localidad',
        );
      return res;
    } catch (error) {
      handleDBExceptions(error);
    }
  }

  async remove(id: number) {
    try {
      const res = await this.localidadRepository.softDelete({
        id_localidad: id,
      });
      if (res.affected == 0) throw new Error('No existe el registro a borrar');
      return {
        ...res,
        message: `El Registro ${id} ha sido borrado`,
      };
    } catch (error) {
      throw new NotFoundException(error.message);
      //this.handleDBExceptions(error);
    }
  }
}
