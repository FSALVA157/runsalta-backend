import { Provincia } from 'src/provincia/entities/provincia.entity';
export declare class Pais {
    id_pais: number;
    pais: string;
    nacionalidad: string;
    provincias: Provincia[];
}
