import { Localidad } from 'src/localidad/entities/localidad.entity';
import { Municipio } from 'src/municipio/entities/municipio.entity';
import { Pais } from 'src/pais/entities/pais.entity';
export declare class Provincia {
    id_provincia: number;
    provincia: string;
    pais_id: number;
    pais: Pais;
    municipios: Municipio[];
    localidades: Localidad[];
}
