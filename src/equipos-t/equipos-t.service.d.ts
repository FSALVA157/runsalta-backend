import { CreateEquiposTDto } from './dto/create-equipos-t.dto';
import { UpdateEquiposTDto } from './dto/update-equipos-t.dto';
import { EquiposT } from './entities/equipos-t.entity';
import { Repository } from 'typeorm';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
export declare class EquiposTService {
    private readonly equipoRepository;
    constructor(equipoRepository: Repository<EquiposT>);
    create(createEquiposTDto: CreateEquiposTDto): Promise<EquiposT>;
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
    findOne(id: number): Promise<EquiposT>;
    update(id: number, updateEquiposTDto: UpdateEquiposTDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<{
        message: string;
        raw: any;
        affected?: number;
        generatedMaps: import("typeorm").ObjectLiteral[];
    }>;
}
