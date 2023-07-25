import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProvinciaDto } from './dto/create-provincia.dto';
import { UpdateProvinciaDto } from './dto/update-provincia.dto';
import { Repository } from 'typeorm';
import { Provincia } from './entities/provincia.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { handleDBExceptions } from 'src/common/filters/handle-exception';
import { PaginationDto } from 'src/common/dtos/pagination.dto';

@Injectable()
export class ProvinciaService {
  constructor(
    @InjectRepository(Provincia)
    private readonly provinciaRepository: Repository<Provincia>,
  ) {}
  async create(createProvinciaDto: CreateProvinciaDto) {
    try {
      const new_provincia = this.provinciaRepository.create(createProvinciaDto);
      await this.provinciaRepository.save(new_provincia);
      return new_provincia;
    } catch (error) {
      handleDBExceptions(error);
    }
  }

  async findAll(paginationDto: PaginationDto) {
    try {
      const { limit = 0, offset = 0 } = paginationDto;
      return await this.provinciaRepository.findAndCount({
        take: limit,
        skip: offset,
      });
    } catch (error) {
      handleDBExceptions(error);
    }
  }

  async findOne(id: number) {
    try {
      return await this.provinciaRepository.findOneOrFail({
        where: { id_provincia: id },
      });
    } catch (error) {
      handleDBExceptions(error);
    }
  }

  async update(id: number, updateProvinciaDto: UpdateProvinciaDto) {
    try {
      const res = await this.provinciaRepository.update(
        { id_provincia: id },
        updateProvinciaDto,
      );
      if (res.affected == 0)
        throw new NotFoundException(
          'Error No se Actualizo ningún Registro Legajo',
        );
      return res;
    } catch (error) {
      handleDBExceptions(error);
    }
  }

  async remove(id: number) {
    try {
      const res = await this.provinciaRepository.softDelete({
        id_provincia: id,
      });
      if (res.affected == 0) throw new Error('No existe el registro a borrar');
      return {
        ...res,
        message: `El Registro ${id} ha sido borrado`,
      };
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
}
