import { EquiposT } from 'src/equipos-t/entities/equipos-t.entity';
export declare class ServiciosL {
    id_serviciol: number;
    nombre: string;
    codigo_postal: string;
    cel_guardia: string;
    convenio: boolean;
    direccion: string;
    email: string;
    observacion: string;
    telefono: string;
    equipot_id: number;
    equipo_territorial: EquiposT;
    usuario_alta_id: number;
    usuario_modif_id: number;
    fecha_alta: Date;
    ultima_actualizacion: Date;
    fecha_baja: Date;
}
