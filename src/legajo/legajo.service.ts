import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLegajoDto } from './dto/create-legajo.dto';
import { UpdateLegajoDto } from './dto/update-legajo.dto';
import { Legajo } from './entities/legajo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { handleDBExceptions } from 'src/common/filters/handle-exception';
import { PaginationDto } from 'src/common/dtos/pagination.dto';

@Injectable()
export class LegajoService {
  constructor(
    @InjectRepository(Legajo)
    private readonly legajoRepository: Repository<Legajo>,
  ) {}

  async create(createLegajoDto: CreateLegajoDto) {
    try {
      const new_legajo = this.legajoRepository.create(createLegajoDto);
      await this.legajoRepository.save(new_legajo);
      return new_legajo;
    } catch (error) {
      handleDBExceptions(error);
    }
  }

  async findAll(paginationDto: PaginationDto) {
    try {
      const { limit = 0, offset = 0 } = paginationDto;
      return await this.legajoRepository.findAndCount({
        take: limit,
        skip: offset,
      });
    } catch (error) {
      handleDBExceptions(error);
    }
  }

  async findOne(id: number) {
    try {
      return await this.legajoRepository.findOneOrFail({
        where: { id_legajo: id },
      });
    } catch (error) {
      handleDBExceptions(error);
    }
  }

  async update(id: number, updateLegajoDto: UpdateLegajoDto) {
    try {
      const res = await this.legajoRepository.update(
        { id_legajo: id },
        updateLegajoDto,
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
      const res = await this.legajoRepository.softDelete({ id_legajo: id });
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
