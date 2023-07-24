import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateNacionalidadDto } from './dto/create-nacionalidad.dto';
import { UpdateNacionalidadDto } from './dto/update-nacionalidad.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Nacionalidad } from './entities/nacionalidad.entity';
import { Repository } from 'typeorm';
import { handleDBExceptions } from 'src/common/filters/handle-exception';
import { PaginationDto } from 'src/common/dtos/pagination.dto';

@Injectable()
export class NacionalidadService {
  constructor(
    @InjectRepository(Nacionalidad)
    private readonly nacionalidadRepository: Repository<Nacionalidad>,
  ) {}
  async create(createNacionalidadDto: CreateNacionalidadDto) {
    try {
      const new_nacionalidad = this.nacionalidadRepository.create(
        createNacionalidadDto,
      );
      await this.nacionalidadRepository.save(new_nacionalidad);
      return new_nacionalidad;
    } catch (error) {
      handleDBExceptions(error);
    }
  }

  async findAll(paginationDto: PaginationDto) {
    try {
      const { limit = 0, offset = 0 } = paginationDto;
      return await this.nacionalidadRepository.findAndCount({
        take: limit,
        skip: offset,
      });
    } catch (error) {
      handleDBExceptions(error);
    }
  }

  async findOne(id: number) {
    try {
      return await this.nacionalidadRepository.findOneOrFail({
        where: { id_nacionalidad: id },
      });
    } catch (error) {
      handleDBExceptions(error);
    }
  }

  async update(id: number, updateNacionalidadDto: UpdateNacionalidadDto) {
    try {
      const res = await this.nacionalidadRepository.update(
        { id_nacionalidad: id },
        updateNacionalidadDto,
      );
      if (res.affected == 0)
        throw new NotFoundException(
          'Error No se Actualizo ningún Registro Nacionalidad',
        );
      return res;
    } catch (error) {
      handleDBExceptions(error);
    }
  }

  async remove(id: number) {
    try {
      const res = await this.nacionalidadRepository.softDelete({
        id_nacionalidad: id,
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
