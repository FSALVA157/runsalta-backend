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
exports.ServiciosL = void 0;
const equipos_t_entity_1 = require("../../equipos-t/entities/equipos-t.entity");
const typeorm_1 = require("typeorm");
let ServiciosL = class ServiciosL {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ServiciosL.prototype, "id_serviciol", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        length: 100,
        nullable: false,
        unique: true,
    }),
    __metadata("design:type", String)
], ServiciosL.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        length: 100,
        nullable: false,
    }),
    __metadata("design:type", String)
], ServiciosL.prototype, "codigo_postal", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        length: 100,
        nullable: true,
    }),
    __metadata("design:type", String)
], ServiciosL.prototype, "cel_guardia", void 0);
__decorate([
    (0, typeorm_1.Column)('boolean', {
        default: false,
    }),
    __metadata("design:type", Boolean)
], ServiciosL.prototype, "convenio", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        length: 255,
        nullable: true,
    }),
    __metadata("design:type", String)
], ServiciosL.prototype, "direccion", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        length: 255,
        nullable: true,
    }),
    __metadata("design:type", String)
], ServiciosL.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        length: 255,
        nullable: true,
    }),
    __metadata("design:type", String)
], ServiciosL.prototype, "observacion", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        length: 100,
        nullable: true,
    }),
    __metadata("design:type", String)
], ServiciosL.prototype, "telefono", void 0);
__decorate([
    (0, typeorm_1.Column)('int', {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ServiciosL.prototype, "equipot_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => equipos_t_entity_1.EquiposT, {
        eager: true,
    }),
    (0, typeorm_1.JoinColumn)({
        name: 'equipot_id',
        referencedColumnName: 'id_equipo',
    }),
    __metadata("design:type", equipos_t_entity_1.EquiposT)
], ServiciosL.prototype, "equipo_territorial", void 0);
__decorate([
    (0, typeorm_1.Column)('int', {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ServiciosL.prototype, "usuario_alta_id", void 0);
__decorate([
    (0, typeorm_1.Column)('int', {
        nullable: false,
    }),
    __metadata("design:type", Number)
], ServiciosL.prototype, "usuario_modif_id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ServiciosL.prototype, "fecha_alta", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ServiciosL.prototype, "ultima_actualizacion", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], ServiciosL.prototype, "fecha_baja", void 0);
ServiciosL = __decorate([
    (0, typeorm_1.Entity)()
], ServiciosL);
exports.ServiciosL = ServiciosL;
//# sourceMappingURL=servicios-l.entity.js.map