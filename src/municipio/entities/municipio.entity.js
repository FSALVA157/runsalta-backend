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
exports.Municipio = void 0;
const provincia_entity_1 = require("../../provincia/entities/provincia.entity");
const typeorm_1 = require("typeorm");
let Municipio = class Municipio {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Municipio.prototype, "id_municipio", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        length: 100,
        nullable: false,
    }),
    __metadata("design:type", String)
], Municipio.prototype, "municipio", void 0);
__decorate([
    (0, typeorm_1.Column)('int', {
        nullable: false,
    }),
    __metadata("design:type", Number)
], Municipio.prototype, "provincia_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => provincia_entity_1.Provincia),
    (0, typeorm_1.JoinColumn)({
        name: 'provincia_id',
        referencedColumnName: 'id_provincia',
    }),
    __metadata("design:type", provincia_entity_1.Provincia)
], Municipio.prototype, "provincia", void 0);
Municipio = __decorate([
    (0, typeorm_1.Entity)()
], Municipio);
exports.Municipio = Municipio;
//# sourceMappingURL=municipio.entity.js.map