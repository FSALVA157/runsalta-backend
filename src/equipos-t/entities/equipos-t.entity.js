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
exports.EquiposT = void 0;
const provincia_entity_1 = require("../../provincia/entities/provincia.entity");
const typeorm_1 = require("typeorm");
let EquiposT = class EquiposT {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], EquiposT.prototype, "id_equipo", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        length: 100,
        nullable: false,
        unique: true,
    }),
    __metadata("design:type", String)
], EquiposT.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        length: 100,
        nullable: true,
    }),
    __metadata("design:type", String)
], EquiposT.prototype, "cel_guardia", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        length: 100,
        nullable: false,
        unique: true,
    }),
    __metadata("design:type", String)
], EquiposT.prototype, "codigo", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        length: 100,
        nullable: false,
    }),
    __metadata("design:type", String)
], EquiposT.prototype, "codigo_postal", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        length: 100,
        nullable: true,
    }),
    __metadata("design:type", String)
], EquiposT.prototype, "direccion", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        length: 100,
        nullable: true,
    }),
    __metadata("design:type", String)
], EquiposT.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        length: 50,
        nullable: true,
    }),
    __metadata("design:type", String)
], EquiposT.prototype, "fax", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        length: 255,
        nullable: true,
    }),
    __metadata("design:type", String)
], EquiposT.prototype, "observacion", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        length: 100,
        nullable: true,
    }),
    __metadata("design:type", String)
], EquiposT.prototype, "responsable", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        length: 100,
        nullable: true,
    }),
    __metadata("design:type", String)
], EquiposT.prototype, "telefono", void 0);
__decorate([
    (0, typeorm_1.Column)('int', {
        nullable: false,
    }),
    __metadata("design:type", Number)
], EquiposT.prototype, "usuario_alta_id", void 0);
__decorate([
    (0, typeorm_1.Column)('int', {
        nullable: false,
    }),
    __metadata("design:type", Number)
], EquiposT.prototype, "usuario_modif_id", void 0);
__decorate([
    (0, typeorm_1.Column)('int', {
        nullable: true,
    }),
    __metadata("design:type", Number)
], EquiposT.prototype, "provincia_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => provincia_entity_1.Provincia, {
        eager: true,
    }),
    (0, typeorm_1.JoinColumn)({
        name: 'provincia_id',
        referencedColumnName: 'id_provincia',
    }),
    __metadata("design:type", provincia_entity_1.Provincia)
], EquiposT.prototype, "provincia", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], EquiposT.prototype, "fecha_alta", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], EquiposT.prototype, "ultima_actualizacion", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], EquiposT.prototype, "fecha_baja", void 0);
EquiposT = __decorate([
    (0, typeorm_1.Entity)()
], EquiposT);
exports.EquiposT = EquiposT;
//# sourceMappingURL=equipos-t.entity.js.map