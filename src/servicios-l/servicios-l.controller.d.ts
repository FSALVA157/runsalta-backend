import { ServiciosLService } from './servicios-l.service';
import { CreateServiciosLDto } from './dto/create-servicios-l.dto';
import { UpdateServiciosLDto } from './dto/update-servicios-l.dto';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
export declare class ServiciosLController {
    private readonly serviciosLService;
    constructor(serviciosLService: ServiciosLService);
    create(createServiciosLDto: CreateServiciosLDto): Promise<import("./entities/servicios-l.entity").ServiciosL>;
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
    findOne(id: string): Promise<string>;
    update(id: string, updateServiciosLDto: UpdateServiciosLDto): Promise<string>;
    remove(id: string): Promise<string>;
}
