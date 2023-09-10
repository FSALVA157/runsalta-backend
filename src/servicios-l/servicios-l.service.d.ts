import { CreateServiciosLDto } from './dto/create-servicios-l.dto';
import { UpdateServiciosLDto } from './dto/update-servicios-l.dto';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
import { Repository } from 'typeorm';
import { ServiciosL } from './entities/servicios-l.entity';
export declare class ServiciosLService {
    private readonly serviciolRepository;
    constructor(serviciolRepository: Repository<ServiciosL>);
    create(createServiciosLDto: CreateServiciosLDto): Promise<ServiciosL>;
    findAll(paginationDto: PaginationDto): Promise<{
        data: {
            id_serviciol: number;
            nombre: string;
            cel_guardia: string;
            codigo: string;
            convenio: boolean;
            direccion: string;
            email: string;
            observacion: string;
            telefono: string;
            equipot_id: number;
            equipo_territorial: string;
        }[];
        total: number;
    }>;
    findOne(id: number): Promise<string>;
    update(id: number, updateServiciosLDto: UpdateServiciosLDto): Promise<string>;
    remove(id: number): Promise<string>;
}
