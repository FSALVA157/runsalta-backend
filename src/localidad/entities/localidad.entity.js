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
exports.Localidad = void 0;
const municipio_entity_1 = require("../../municipio/entities/municipio.entity");
const provincia_entity_1 = require("../../provincia/entities/provincia.entity");
const typeorm_1 = require("typeorm");
let Localidad = class Localidad {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Localidad.prototype, "id_localidad", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        length: 100,
        nullable: false,
    }),
    __metadata("design:type", String)
], Localidad.prototype, "localidad", void 0);
__decorate([
    (0, typeorm_1.Column)('int', {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Localidad.prototype, "provincia_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => provincia_entity_1.Provincia),
    (0, typeorm_1.JoinColumn)({
        name: 'provincia_id',
        referencedColumnName: 'id_provincia',
    }),
    __metadata("design:type", provincia_entity_1.Provincia)
], Localidad.prototype, "provincia", void 0);
__decorate([
    (0, typeorm_1.Column)('int', {
        nullable: true,
        default: null,
    }),
    __metadata("design:type", Number)
], Localidad.prototype, "municipio_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => municipio_entity_1.Municipio, {
        eager: true,
    }),
    (0, typeorm_1.JoinColumn)({
        name: 'municipio_id',
        referencedColumnName: 'id_municipio',
    }),
    __metadata("design:type", municipio_entity_1.Municipio)
], Localidad.prototype, "municipio", void 0);
Localidad = __decorate([
    (0, typeorm_1.Entity)()
], Localidad);
exports.Localidad = Localidad;
//# sourceMappingURL=localidad.entity.js.map