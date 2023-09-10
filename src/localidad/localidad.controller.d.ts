import { LocalidadService } from './localidad.service';
import { CreateLocalidadDto } from './dto/create-localidad.dto';
import { UpdateLocalidadDto } from './dto/update-localidad.dto';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
export declare class LocalidadController {
    private readonly localidadService;
    constructor(localidadService: LocalidadService);
    create(createLocalidadDto: CreateLocalidadDto): Promise<import("./entities/localidad.entity").Localidad>;
    findAll(paginationDto: PaginationDto): Promise<[import("./entities/localidad.entity").Localidad[], number]>;
    findOne(id: string): Promise<import("./entities/localidad.entity").Localidad>;
    update(id: string, updateLocalidadDto: UpdateLocalidadDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<{
        message: string;
        raw: any;
        affected?: number;
        generatedMaps: import("typeorm").ObjectLiteral[];
    }>;
}
