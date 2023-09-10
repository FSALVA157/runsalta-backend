import { CreatePaisDto } from './dto/create-pais.dto';
import { UpdatePaisDto } from './dto/update-pais.dto';
import { Pais } from './entities/pais.entity';
import { Repository } from 'typeorm';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
export declare class PaisService {
    private readonly paisRepository;
    constructor(paisRepository: Repository<Pais>);
    create(createPaisDto: CreatePaisDto): Promise<Pais>;
    findAll(paginationDto: PaginationDto): Promise<{
        provincias: string[];
        id_pais: number;
        pais: string;
        nacionalidad: string;
    }[]>;
    findOne(id: number): Promise<Pais>;
    update(id: number, updatePaisDto: UpdatePaisDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<{
        message: string;
        raw: any;
        affected?: number;
        generatedMaps: import("typeorm").ObjectLiteral[];
    }>;
}
