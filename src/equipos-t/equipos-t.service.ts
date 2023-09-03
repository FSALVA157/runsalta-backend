import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEquiposTDto } from './dto/create-equipos-t.dto';
import { UpdateEquiposTDto } from './dto/update-equipos-t.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { EquiposT } from './entities/equipos-t.entity';
import { Repository } from 'typeorm';
import { handleDBExceptions } from 'src/common/filters/handle-exception';
import { PaginationDto } from 'src/common/dtos/pagination.dto';

@Injectable()
export class EquiposTService {
  constructor(
    @InjectRepository(EquiposT)
    private readonly equipoRepository: Repository<EquiposT>,
  ) {}

  async create(createEquiposTDto: CreateEquiposTDto) {
    try {
      const new_legajo = this.equipoRepository.create(createEquiposTDto);
      await this.equipoRepository.save(new_legajo);
      return new_legajo;
    } catch (error) {
      handleDBExceptions(error);
    }
  }

  async findAll(paginationDto: PaginationDto) {
    try {
      const { limit = 0, offset = 0 } = paginationDto;
      const data = await this.equipoRepository.findAndCount({
        take: limit,
        skip: offset,
      });
      const data_nueva = data[0].map((equipo) => {
        return {
          id_equipo: equipo.id_equipo,
          nombre: equipo.nombre,
          cel_guardia: equipo.cel_guardia,
          codigo: equipo.codigo,
          codigo_postal: equipo.codigo_postal,
          direccion: equipo.direccion,
          email: equipo.email,
          fax: equipo.fax,
          observacion: equipo.observacion,
          responsable: equipo.responsable,
          telefono: equipo.telefono,
          provincia_id: equipo.provincia_id,
          provincia: equipo.provincia.provincia,
          usuario_alta_id: equipo.usuario_alta_id,
          usuario_modif_id: equipo.usuario_modif_id,
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
    try {
      return await this.equipoRepository.findOneOrFail({
        where: { id_equipo: id },
      });
    } catch (error) {
      handleDBExceptions(error);
    }
  }

  async update(id: number, updateEquiposTDto: UpdateEquiposTDto) {
    try {
      const res = await this.equipoRepository.update(
        { id_equipo: id },
        updateEquiposTDto,
      );
      if (res.affected == 0)
        throw new NotFoundException(
          'Error No se Actualizo ningún Registro Equipo',
        );
      return res;
    } catch (error) {
      handleDBExceptions(error);
    }
  }

  async remove(id: number) {
    try {
      const res = await this.equipoRepository.softDelete({ id_equipo: id });
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
