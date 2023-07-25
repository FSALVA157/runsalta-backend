import { Injectable } from '@nestjs/common';
import { CreateAcompanianteDto } from './dto/create-acompaniante.dto';
import { UpdateAcompanianteDto } from './dto/update-acompaniante.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Acompaniante } from './entities/acompaniante.entity';
import { Repository } from 'typeorm';
import { handleDBExceptions } from 'src/common/filters/handle-exception';
import { PaginationDto } from 'src/common/dtos/pagination.dto';

@Injectable()
export class AcompanianteService {
  constructor(
    @InjectRepository(Acompaniante)
    private readonly acompanianteRepository: Repository<Acompaniante>,
  ) {}
  async create(createAcompanianteDto: CreateAcompanianteDto) {
    try {
      const new_acompaniante = this.acompanianteRepository.create(
        createAcompanianteDto,
      );
      await this.acompanianteRepository.save(new_acompaniante);
      return new_acompaniante;
    } catch (error) {
      handleDBExceptions(error);
    }
  }

  async findAll(paginationDto: PaginationDto) {
    try {
      const { limit = 0, offset = 0 } = paginationDto;
      return await this.acompanianteRepository.findAndCount({
        take: limit,
        skip: offset,
      });
    } catch (error) {
      handleDBExceptions(error);
    }
  }

  async findOne(id: number) {
    return `This action returns a #${id} acompaniante`;
  }

  async update(id: number, updateAcompanianteDto: UpdateAcompanianteDto) {
    return `This action updates a #${id} acompaniante`;
  }

  async remove(id: number) {
    return `This action removes a #${id} acompaniante`;
  }
}
