import { PaisService } from './pais.service';
import { CreatePaisDto } from './dto/create-pais.dto';
import { UpdatePaisDto } from './dto/update-pais.dto';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
export declare class PaisController {
    private readonly paisService;
    constructor(paisService: PaisService);
    create(createPaisDto: CreatePaisDto): Promise<import("./entities/pais.entity").Pais>;
    findAll(paginationDto: PaginationDto): Promise<{
        provincias: string[];
        id_pais: number;
        pais: string;
        nacionalidad: string;
    }[]>;
    findOne(id: string): Promise<import("./entities/pais.entity").Pais>;
    update(id: string, updatePaisDto: UpdatePaisDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<{
        message: string;
        raw: any;
        affected?: number;
        generatedMaps: import("typeorm").ObjectLiteral[];
    }>;
}
