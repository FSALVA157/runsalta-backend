import { Provincia } from 'src/provincia/entities/provincia.entity';
export declare class Municipio {
    id_municipio: number;
    municipio: string;
    provincia_id: number;
    provincia: Provincia;
}
