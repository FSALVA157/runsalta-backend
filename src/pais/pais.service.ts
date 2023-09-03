import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePaisDto } from './dto/create-pais.dto';
import { UpdatePaisDto } from './dto/update-pais.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Pais } from './entities/pais.entity';
import { Repository } from 'typeorm';
import { handleDBExceptions } from 'src/common/filters/handle-exception';
import { PaginationDto } from 'src/common/dtos/pagination.dto';

@Injectable()
export class PaisService {
  constructor(
    @InjectRepository(Pais)
    private readonly paisRepository: Repository<Pais>,
  ) {}
  async create(createPaisDto: CreatePaisDto) {
    try {
      const new_pais = this.paisRepository.create(createPaisDto);
      await this.paisRepository.save(new_pais);
      return new_pais;
    } catch (error) {
      handleDBExceptions(error);
    }
  }

  async findAll(paginationDto: PaginationDto) {
    try {
      const { limit = 0, offset = 0 } = paginationDto;
      const res = await this.paisRepository.find({
        take: limit,
        skip: offset,
      });
      const resModif = res.map((pais) => {
        return {
          ...pais,
          provincias: pais.provincias.map((provincia) => {
            return provincia.provincia;
          }),
        };
      });
      return resModif;
    } catch (error) {
      handleDBExceptions(error);
    }
  }

  async findOne(id: number) {
    try {
      return await this.paisRepository.findOneOrFail({
        where: { id_pais: id },
      });
    } catch (error) {
      handleDBExceptions(error);
    }
  }

  async update(id: number, updatePaisDto: UpdatePaisDto) {
    try {
      const res = await this.paisRepository.update(
        { id_pais: id },
        updatePaisDto,
      );
      if (res.affected == 0)
        throw new NotFoundException(
          'Error No se Actualizo ningún Registro Pais',
        );
      return res;
    } catch (error) {
      handleDBExceptions(error);
    }
  }

  async remove(id: number) {
    try {
      const res = await this.paisRepository.softDelete({
        id_pais: id,
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
