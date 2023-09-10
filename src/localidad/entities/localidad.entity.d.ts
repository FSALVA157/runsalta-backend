import { Municipio } from 'src/municipio/entities/municipio.entity';
import { Provincia } from 'src/provincia/entities/provincia.entity';
export declare class Localidad {
    id_localidad: number;
    localidad: string;
    provincia_id: number;
    provincia: Provincia;
    municipio_id: number;
    municipio: Municipio;
}
