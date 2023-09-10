import { Provincia } from 'src/provincia/entities/provincia.entity';
export declare class EquiposT {
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
    usuario_alta_id: number;
    usuario_modif_id: number;
    provincia_id: number;
    provincia: Provincia;
    fecha_alta: Date;
    ultima_actualizacion: Date;
    fecha_baja: Date;
}
