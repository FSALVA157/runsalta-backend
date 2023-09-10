import { CreateLocalidadDto } from './dto/create-localidad.dto';
import { UpdateLocalidadDto } from './dto/update-localidad.dto';
import { Localidad } from './entities/localidad.entity';
import { Repository } from 'typeorm';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
export declare class LocalidadService {
    private readonly localidadRepository;
    constructor(localidadRepository: Repository<Localidad>);
    create(createLocalidadDto: CreateLocalidadDto): Promise<Localidad>;
    findAll(paginationDto: PaginationDto): Promise<[Localidad[], number]>;
    findOne(id: number): Promise<Localidad>;
    update(id: number, updateLocalidadDto: UpdateLocalidadDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<{
        message: string;
        raw: any;
        affected?: number;
        generatedMaps: import("typeorm").ObjectLiteral[];
    }>;
}
