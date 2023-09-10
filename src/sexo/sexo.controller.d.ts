import { SexoService } from './sexo.service';
import { CreateSexoDto } from './dto/create-sexo.dto';
import { UpdateSexoDto } from './dto/update-sexo.dto';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
export declare class SexoController {
    private readonly sexoService;
    constructor(sexoService: SexoService);
    create(createSexoDto: CreateSexoDto): Promise<import("./entities/sexo.entity").Sexo>;
    findAll(paginationDto: PaginationDto): Promise<import("./entities/sexo.entity").Sexo[]>;
    findOne(id: string): Promise<import("./entities/sexo.entity").Sexo>;
    update(id: string, updateSexoDto: UpdateSexoDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<{
        message: string;
        raw: any;
        affected?: number;
        generatedMaps: import("typeorm").ObjectLiteral[];
    }>;
}
