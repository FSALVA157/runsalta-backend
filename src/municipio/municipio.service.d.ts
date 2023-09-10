import { CreateMunicipioDto } from './dto/create-municipio.dto';
import { UpdateMunicipioDto } from './dto/update-municipio.dto';
import { Municipio } from './entities/municipio.entity';
import { Repository } from 'typeorm';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
export declare class MunicipioService {
    private readonly municipioRepository;
    constructor(municipioRepository: Repository<Municipio>);
    create(createMunicipioDto: CreateMunicipioDto): Promise<Municipio>;
    findAll(paginationDto: PaginationDto): Promise<[Municipio[], number]>;
    findOne(id: number): Promise<Municipio>;
    update(id: number, updateMunicipioDto: UpdateMunicipioDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<{
        message: string;
        raw: any;
        affected?: number;
        generatedMaps: import("typeorm").ObjectLiteral[];
    }>;
}
