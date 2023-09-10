"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Legajo = void 0;
const equipos_t_entity_1 = require("../../equipos-t/entities/equipos-t.entity");
const localidad_entity_1 = require("../../localidad/entities/localidad.entity");
const municipio_entity_1 = require("../../municipio/entities/municipio.entity");
const pais_entity_1 = require("../../pais/entities/pais.entity");
const provincia_entity_1 = require("../../provincia/entities/provincia.entity");
const sexo_entity_1 = require("../../sexo/entities/sexo.entity");
const typeorm_1 = require("typeorm");
let Legajo = class Legajo {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Legajo.prototype, "id_legajo", void 0);
__decorate([
    (0, typeorm_1.Column)('boolean', {
        default: true,
    }),
    __metadata("design:type", Boolean)
], Legajo.prototype, "activo", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        length: 255,
        nullable: false,
    }),
    __metadata("design:type", String)
], Legajo.prototype, "apellido", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        length: 255,
        nullable: false,
    }),
    __metadata("design:type", String)
], Legajo.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', {
        nullable: true,
    }),
    __metadata("design:type", Date)
], Legajo.prototype, "fecha_nacimiento", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        length: 255,
        nullable: true,
    }),
    __metadata("design:type", String)
], Legajo.prototype, "calle_legajo", void 0);
__decorate([
    (0, typeorm_1.Column)('int', {
        nullable: true,
    }),
    __metadata("design:type", Number)
], Legajo.prototype, "tpo_pub_prv_cob_sal", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        length: 255,
        nullable: true,
    }),
    __metadata("design:type", String)
], Legajo.prototype, "codigo", void 0);
__decorate([
    (0, typeorm_1.Column)('int', {
        nullable: true,
    }),
    __metadata("design:type", Number)
], Legajo.prototype, "constancia_parto", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        length: 255,
        nullable: true,
    }),
    __metadata("design:type", String)
], Legajo.prototype, "detalle_probl_salud", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        length: 255,
        nullable: true,
    }),
    __metadata("design:type", String)
], Legajo.prototype, "direccion", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        length: 255,
        nullable: true,
    }),
    __metadata("design:type", String)
], Legajo.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        length: 255,
        nullable: true,
    }),
    __metadata("design:type", String)
], Legajo.prototype, "escolarizado", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        length: 255,
        nullable: true,
    }),
    __metadata("design:type", String)
], Legajo.prototype, "establecimento_escolarizado", void 0);
__decorate([
    (0, typeorm_1.Column)('int', {
        nullable: true,
    }),
    __metadata("design:type", Number)
], Legajo.prototype, "estado_documento", void 0);
__decorate([
    (0, typeorm_1.Column)('int', {
        nullable: true,
    }),
    __metadata("design:type", Number)
], Legajo.prototype, "estado_causa_judicial", void 0);
__decorate([
    (0, typeorm_1.Column)('int', {
        nullable: true,
    }),
    __metadata("design:type", Number)
], Legajo.prototype, "estado_obra_social", void 0);
__decorate([
    (0, typeorm_1.Column)('int', {
        nullable: true,
    }),
    __metadata("design:type", Number)
], Legajo.prototype, "estado_probl_salud", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        length: 255,
        nullable: true,
    }),
    __metadata("design:type", String)
], Legajo.prototype, "file_dni", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        length: 255,
        nullable: true,
    }),
    __metadata("design:type", String)
], Legajo.prototype, "file_partida_nac", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        length: 255,
        nullable: true,
    }),
    __metadata("design:type", String)
], Legajo.prototype, "file_problematica_salud", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        length: 255,
        nullable: true,
    }),
    __metadata("design:type", String)
], Legajo.prototype, "nivel_educacion", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        length: 255,
        nullable: true,
    }),
    __metadata("design:type", String)
], Legajo.prototype, "nro_documento", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        length: 255,
        nullable: true,
    }),
    __metadata("design:type", String)
], Legajo.prototype, "numero_calle", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        length: 255,
        nullable: true,
    }),
    __metadata("design:type", String)
], Legajo.prototype, "observ_obra_social", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        length: 255,
        nullable: true,
    }),
    __metadata("design:type", String)
], Legajo.prototype, "observaciones", void 0);
__decorate([
    (0, typeorm_1.Column)('int', {
        nullable: true,
    }),
    __metadata("design:type", Number)
], Legajo.prototype, "partida_nacimiento", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        length: 255,
        nullable: true,
    }),
    __metadata("design:type", String)
], Legajo.prototype, "probl_salud", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        length: 255,
        nullable: true,
    }),
    __metadata("design:type", String)
], Legajo.prototype, "referencia_llamada102", void 0);
__decorate([
    (0, typeorm_1.Column)('int', {
        nullable: true,
    }),
    __metadata("design:type", Number)
], Legajo.prototype, "se_interv_en_su_gestion", void 0);
__decorate([
    (0, typeorm_1.Column)('int', {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Legajo.prototype, "sexo_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => sexo_entity_1.Sexo, {
        eager: true,
    }),
    (0, typeorm_1.JoinColumn)({
        name: 'sexo_id',
        referencedColumnName: 'id_sexo',
    }),
    __metadata("design:type", sexo_entity_1.Sexo)
], Legajo.prototype, "sexo", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        length: 100,
        nullable: true,
    }),
    __metadata("design:type", String)
], Legajo.prototype, "telefono", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        length: 255,
        nullable: true,
    }),
    __metadata("design:type", String)
], Legajo.prototype, "telefono_legajo", void 0);
__decorate([
    (0, typeorm_1.Column)('int', {
        nullable: true,
    }),
    __metadata("design:type", Number)
], Legajo.prototype, "tpo_cobertura_salud", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        length: 255,
        nullable: true,
    }),
    __metadata("design:type", String)
], Legajo.prototype, "tipo_documento", void 0);
__decorate([
    (0, typeorm_1.Column)('int', {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Legajo.prototype, "usuario_alta_id", void 0);
__decorate([
    (0, typeorm_1.Column)('int', {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Legajo.prototype, "usuario_modif_id", void 0);
__decorate([
    (0, typeorm_1.Column)('int', {
        nullable: true,
    }),
    __metadata("design:type", Number)
], Legajo.prototype, "localidad_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => localidad_entity_1.Localidad),
    (0, typeorm_1.JoinColumn)({
        name: 'localidad_id',
        referencedColumnName: 'id_localidad',
    }),
    __metadata("design:type", localidad_entity_1.Localidad)
], Legajo.prototype, "localidad", void 0);
__decorate([
    (0, typeorm_1.Column)('int', {
        nullable: true,
    }),
    __metadata("design:type", Number)
], Legajo.prototype, "municipio_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => municipio_entity_1.Municipio),
    (0, typeorm_1.JoinColumn)({
        name: 'municipio_id',
        referencedColumnName: 'id_municipio',
    }),
    __metadata("design:type", municipio_entity_1.Municipio)
], Legajo.prototype, "municipio", void 0);
__decorate([
    (0, typeorm_1.Column)('int', {
        nullable: true,
    }),
    __metadata("design:type", Number)
], Legajo.prototype, "nacionalidad_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => pais_entity_1.Pais),
    (0, typeorm_1.JoinColumn)({
        name: 'nacionalidad_id',
        referencedColumnName: 'id_pais',
    }),
    __metadata("design:type", pais_entity_1.Pais)
], Legajo.prototype, "nacionalidad", void 0);
__decorate([
    (0, typeorm_1.Column)('int', {
        nullable: true,
    }),
    __metadata("design:type", Number)
], Legajo.prototype, "obra_social_id", void 0);
__decorate([
    (0, typeorm_1.Column)('int', {
        nullable: true,
        default: 9,
    }),
    __metadata("design:type", Number)
], Legajo.prototype, "pais_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => pais_entity_1.Pais),
    (0, typeorm_1.JoinColumn)({
        name: 'pais_id',
        referencedColumnName: 'id_pais',
    }),
    __metadata("design:type", pais_entity_1.Pais)
], Legajo.prototype, "pais", void 0);
__decorate([
    (0, typeorm_1.Column)('int', {
        nullable: true,
    }),
    __metadata("design:type", Number)
], Legajo.prototype, "provincia_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => provincia_entity_1.Provincia),
    (0, typeorm_1.JoinColumn)({
        name: 'provincia_id',
        referencedColumnName: 'id_provincia',
    }),
    __metadata("design:type", provincia_entity_1.Provincia)
], Legajo.prototype, "provincia", void 0);
__decorate([
    (0, typeorm_1.Column)('int', {
        nullable: true,
    }),
    __metadata("design:type", Number)
], Legajo.prototype, "acompaniante_id", void 0);
__decorate([
    (0, typeorm_1.Column)('int', {
        nullable: true,
    }),
    __metadata("design:type", Number)
], Legajo.prototype, "equipot_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => equipos_t_entity_1.EquiposT, {
        eager: true,
    }),
    (0, typeorm_1.JoinColumn)({
        name: 'equipot_id',
        referencedColumnName: 'id_equipo',
    }),
    __metadata("design:type", equipos_t_entity_1.EquiposT)
], Legajo.prototype, "equipo_territorial", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Legajo.prototype, "fecha_alta", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Legajo.prototype, "ultima_actualizacion", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], Legajo.prototype, "fecha_baja", void 0);
Legajo = __decorate([
    (0, typeorm_1.Entity)()
], Legajo);
exports.Legajo = Legajo;
//# sourceMappingURL=legajo.entity.js.map