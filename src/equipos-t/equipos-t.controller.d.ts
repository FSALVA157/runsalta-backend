import { EquiposTService } from './equipos-t.service';
import { CreateEquiposTDto } from './dto/create-equipos-t.dto';
import { UpdateEquiposTDto } from './dto/update-equipos-t.dto';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
export declare class EquiposTController {
    private readonly equiposTService;
    constructor(equiposTService: EquiposTService);
    create(createEquiposTDto: CreateEquiposTDto): Promise<import("./entities/equipos-t.entity").EquiposT>;
    findAll(paginationDto: PaginationDto): Promise<{
        data: {
            id_equipo: number;
            nombre: string;
            cel_guardia: string;
            codigo: string;
            codigo_postal: string;
            direccion: string;
            email: string;
            fax: string;
            observacion: string;
            responsable: string;
            telefono: string;
            provincia_id: number;
            provincia: string;
            usuario_alta_id: number;
            usuario_modif_id: number;
        }[];
        total: number;
    }>;
    findOne(id: string): Promise<import("./entities/equipos-t.entity").EquiposT>;
    update(id: string, updateEquiposTDto: UpdateEquiposTDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<{
        message: string;
        raw: any;
        affected?: number;
        generatedMaps: import("typeorm").ObjectLiteral[];
    }>;
}
