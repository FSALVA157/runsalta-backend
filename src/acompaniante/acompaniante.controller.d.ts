import { AcompanianteService } from './acompaniante.service';
import { CreateAcompanianteDto } from './dto/create-acompaniante.dto';
import { UpdateAcompanianteDto } from './dto/update-acompaniante.dto';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
export declare class AcompanianteController {
    private readonly acompanianteService;
    constructor(acompanianteService: AcompanianteService);
    create(createAcompanianteDto: CreateAcompanianteDto): Promise<import("./entities/acompaniante.entity").Acompaniante>;
    findAll(paginationDto: PaginationDto): Promise<[import("./entities/acompaniante.entity").Acompaniante[], number]>;
    findOne(id: string): Promise<string>;
    update(id: string, updateAcompanianteDto: UpdateAcompanianteDto): Promise<string>;
    remove(id: string): Promise<string>;
}
