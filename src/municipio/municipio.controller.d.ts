import { MunicipioService } from './municipio.service';
import { CreateMunicipioDto } from './dto/create-municipio.dto';
import { UpdateMunicipioDto } from './dto/update-municipio.dto';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
export declare class MunicipioController {
    private readonly municipioService;
    constructor(municipioService: MunicipioService);
    create(createMunicipioDto: CreateMunicipioDto): Promise<import("./entities/municipio.entity").Municipio>;
    findAll(paginationDto: PaginationDto): Promise<[import("./entities/municipio.entity").Municipio[], number]>;
    findOne(id: string): Promise<import("./entities/municipio.entity").Municipio>;
    update(id: string, updateMunicipioDto: UpdateMunicipioDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<{
        message: string;
        raw: any;
        affected?: number;
        generatedMaps: import("typeorm").ObjectLiteral[];
    }>;
}
