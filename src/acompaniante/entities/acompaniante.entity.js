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
exports.Acompaniante = void 0;
const typeorm_1 = require("typeorm");
let Acompaniante = class Acompaniante {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Acompaniante.prototype, "id_acompaniante", void 0);
__decorate([
    (0, typeorm_1.Column)('boolean', {
        default: true,
    }),
    __metadata("design:type", Boolean)
], Acompaniante.prototype, "activo", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        length: 255,
        nullable: false,
    }),
    __metadata("design:type", String)
], Acompaniante.prototype, "apellido", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        length: 255,
        nullable: false,
    }),
    __metadata("design:type", String)
], Acompaniante.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        length: 255,
        nullable: true,
    }),
    __metadata("design:type", String)
], Acompaniante.prototype, "domicilio", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        length: 255,
        nullable: true,
    }),
    __metadata("design:type", String)
], Acompaniante.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        length: 100,
        nullable: true,
    }),
    __metadata("design:type", String)
], Acompaniante.prototype, "telefono", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        length: 50,
        nullable: true,
    }),
    __metadata("design:type", String)
], Acompaniante.prototype, "sexo", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        length: 50,
        nullable: true,
    }),
    __metadata("design:type", String)
], Acompaniante.prototype, "dni", void 0);
__decorate([
    (0, typeorm_1.Column)('int', {
        nullable: true,
    }),
    __metadata("design:type", Number)
], Acompaniante.prototype, "edad", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        length: 255,
        nullable: true,
    }),
    __metadata("design:type", String)
], Acompaniante.prototype, "capacitad_en_egreso", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        length: 255,
        nullable: true,
    }),
    __metadata("design:type", String)
], Acompaniante.prototype, "descripcion_perfil", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        length: 255,
        nullable: true,
    }),
    __metadata("design:type", String)
], Acompaniante.prototype, "descripcion_trabajo_act", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        length: 255,
        nullable: true,
    }),
    __metadata("design:type", String)
], Acompaniante.prototype, "tipo_disponibilidad", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        length: 255,
        nullable: true,
    }),
    __metadata("design:type", String)
], Acompaniante.prototype, "file_inf_admision", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        length: 255,
        nullable: true,
    }),
    __metadata("design:type", String)
], Acompaniante.prototype, "file_inf_baja", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        length: 255,
        nullable: true,
    }),
    __metadata("design:type", String)
], Acompaniante.prototype, "latitud", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        length: 255,
        nullable: true,
    }),
    __metadata("design:type", String)
], Acompaniante.prototype, "longitud", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        length: 255,
        nullable: true,
    }),
    __metadata("design:type", String)
], Acompaniante.prototype, "nivel_educacion", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        length: 255,
        nullable: true,
    }),
    __metadata("design:type", String)
], Acompaniante.prototype, "subvenc_por_prog_eg", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        length: 100,
        nullable: true,
    }),
    __metadata("design:type", String)
], Acompaniante.prototype, "tiene_trabajo", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        length: 100,
        nullable: true,
    }),
    __metadata("design:type", String)
], Acompaniante.prototype, "titulo_educacion", void 0);
__decorate([
    (0, typeorm_1.Column)('int', {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Acompaniante.prototype, "id_experiencia_acomp", void 0);
__decorate([
    (0, typeorm_1.Column)('int', {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Acompaniante.prototype, "id_usuario", void 0);
__decorate([
    (0, typeorm_1.Column)('int', {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Acompaniante.prototype, "id_usuario_alta", void 0);
__decorate([
    (0, typeorm_1.Column)('int', {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Acompaniante.prototype, "id_usuario_modif", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Acompaniante.prototype, "fecha_alta", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Acompaniante.prototype, "ultima_actualizacion", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], Acompaniante.prototype, "fecha_baja", void 0);
Acompaniante = __decorate([
    (0, typeorm_1.Entity)()
], Acompaniante);
exports.Acompaniante = Acompaniante;
//# sourceMappingURL=acompaniante.entity.js.map