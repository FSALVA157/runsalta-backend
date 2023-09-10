import { CreateAcompanianteDto } from './dto/create-acompaniante.dto';
import { UpdateAcompanianteDto } from './dto/update-acompaniante.dto';
import { Acompaniante } from './entities/acompaniante.entity';
import { Repository } from 'typeorm';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
export declare class AcompanianteService {
    private readonly acompanianteRepository;
    constructor(acompanianteRepository: Repository<Acompaniante>);
    create(createAcompanianteDto: CreateAcompanianteDto): Promise<Acompaniante>;
    findAll(paginationDto: PaginationDto): Promise<[Acompaniante[], number]>;
    findOne(id: number): Promise<string>;
    update(id: number, updateAcompanianteDto: UpdateAcompanianteDto): Promise<string>;
    remove(id: number): Promise<string>;
}
