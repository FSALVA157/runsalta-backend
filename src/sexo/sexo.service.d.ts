import { CreateSexoDto } from './dto/create-sexo.dto';
import { UpdateSexoDto } from './dto/update-sexo.dto';
import { Sexo } from './entities/sexo.entity';
import { Repository } from 'typeorm';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
export declare class SexoService {
    private readonly sexoRepository;
    constructor(sexoRepository: Repository<Sexo>);
    create(createSexoDto: CreateSexoDto): Promise<Sexo>;
    findAll(paginationDto: PaginationDto): Promise<Sexo[]>;
    findOne(id: number): Promise<Sexo>;
    update(id: number, updateSexoDto: UpdateSexoDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<{
        message: string;
        raw: any;
        affected?: number;
        generatedMaps: import("typeorm").ObjectLiteral[];
    }>;
}
