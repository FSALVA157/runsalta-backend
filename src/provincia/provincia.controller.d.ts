import { ProvinciaService } from './provincia.service';
import { CreateProvinciaDto } from './dto/create-provincia.dto';
import { UpdateProvinciaDto } from './dto/update-provincia.dto';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
export declare class ProvinciaController {
    private readonly provinciaService;
    constructor(provinciaService: ProvinciaService);
    create(createProvinciaDto: CreateProvinciaDto): Promise<import("./entities/provincia.entity").Provincia>;
    findAll(paginationDto: PaginationDto): Promise<[import("./entities/provincia.entity").Provincia[], number]>;
    findOne(id: string): Promise<import("./entities/provincia.entity").Provincia>;
    update(id: string, updateProvinciaDto: UpdateProvinciaDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<{
        message: string;
        raw: any;
        affected?: number;
        generatedMaps: import("typeorm").ObjectLiteral[];
    }>;
}
