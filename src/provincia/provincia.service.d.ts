import { CreateProvinciaDto } from './dto/create-provincia.dto';
import { UpdateProvinciaDto } from './dto/update-provincia.dto';
import { Repository } from 'typeorm';
import { Provincia } from './entities/provincia.entity';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
export declare class ProvinciaService {
    private readonly provinciaRepository;
    constructor(provinciaRepository: Repository<Provincia>);
    create(createProvinciaDto: CreateProvinciaDto): Promise<Provincia>;
    findAll(paginationDto: PaginationDto): Promise<[Provincia[], number]>;
    findOne(id: number): Promise<Provincia>;
    update(id: number, updateProvinciaDto: UpdateProvinciaDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<{
        message: string;
        raw: any;
        affected?: number;
        generatedMaps: import("typeorm").ObjectLiteral[];
    }>;
}
