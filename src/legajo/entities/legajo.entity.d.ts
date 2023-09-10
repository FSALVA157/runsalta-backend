import { EquiposT } from 'src/equipos-t/entities/equipos-t.entity';
import { Localidad } from 'src/localidad/entities/localidad.entity';
import { Municipio } from 'src/municipio/entities/municipio.entity';
import { Pais } from 'src/pais/entities/pais.entity';
import { Provincia } from 'src/provincia/entities/provincia.entity';
import { Sexo } from 'src/sexo/entities/sexo.entity';
export declare class Legajo {
    id_legajo: number;
    activo: boolean;
    apellido: string;
    nombre: string;
    fecha_nacimiento: Date;
    calle_legajo: string;
    tpo_pub_prv_cob_sal: number;
    codigo: string;
    constancia_parto: number;
    detalle_probl_salud: string;
    direccion: string;
    email: string;
    escolarizado: string;
    establecimento_escolarizado: string;
    estado_documento: number;
    estado_causa_judicial: number;
    estado_obra_social: number;
    estado_probl_salud: number;
    file_dni: string;
    file_partida_nac: string;
    file_problematica_salud: string;
    nivel_educacion: string;
    nro_documento: string;
    numero_calle: string;
    observ_obra_social: string;
    observaciones: string;
    partida_nacimiento: number;
    probl_salud: string;
    referencia_llamada102: string;
    se_interv_en_su_gestion: number;
    sexo_id: number;
    sexo: Sexo;
    telefono: string;
    telefono_legajo: string;
    tpo_cobertura_salud: number;
    tipo_documento: string;
    usuario_alta_id: number;
    usuario_modif_id: number;
    localidad_id: number;
    localidad: Localidad;
    municipio_id: number;
    municipio: Municipio;
    nacionalidad_id: number;
    nacionalidad: Pais;
    obra_social_id: number;
    pais_id: number;
    pais: Pais;
    provincia_id: number;
    provincia: Provincia;
    acompaniante_id: number;
    equipot_id: number;
    equipo_territorial: EquiposT;
    fecha_alta: Date;
    ultima_actualizacion: Date;
    fecha_baja: Date;
}