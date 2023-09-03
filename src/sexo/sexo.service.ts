import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSexoDto } from './dto/create-sexo.dto';
import { UpdateSexoDto } from './dto/update-sexo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Sexo } from './entities/sexo.entity';
import { Repository } from 'typeorm';
import { handleDBExceptions } from 'src/common/filters/handle-exception';
import { PaginationDto } from 'src/common/dtos/pagination.dto';

@Injectable()
export class SexoService {
  constructor(
    @InjectRepository(Sexo)
    private readonly sexoRepository: Repository<Sexo>,
  ) {}
  async create(createSexoDto: CreateSexoDto) {
    try {
      const new_pais = this.sexoRepository.create(createSexoDto);
      await this.sexoRepository.save(new_pais);
      return new_pais;
    } catch (error) {
      handleDBExceptions(error);
    }
  }

  async findAll(paginationDto: PaginationDto) {
    try {
      const { limit = 0, offset = 0 } = paginationDto;
      const res = await this.sexoRepository.find({
        take: limit,
        skip: offset,
      });

      return res;
    } catch (error) {
      handleDBExceptions(error);
    }
  }

  async findOne(id: number) {
    try {
      return await this.sexoRepository.findOneOrFail({
        where: { id_sexo: id },
      });
    } catch (error) {
      handleDBExceptions(error);
    }
  }

  async update(id: number, updateSexoDto: UpdateSexoDto) {
    try {
      const res = await this.sexoRepository.update(
        { id_sexo: id },
        updateSexoDto,
      );
      if (res.affected == 0)
        throw new NotFoundException(
          'Error No se Actualizo ningún Registro Sexo',
        );
      return res;
    } catch (error) {
      handleDBExceptions(error);
    }
  }

  async remove(id: number) {
    try {
      const res = await this.sexoRepository.softDelete({
        id_sexo: id,
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
